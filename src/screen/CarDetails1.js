import React, { useState } from 'react';
import { View, Text, Button, Image } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { RNCamera } from 'react-native-camera';
import OCR from '@react-native-community/ocr';
import axios from 'axios';
import MlkitOcr from 'react-native-mlkit-ocr';

const CarDetailsScanner = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [carDetails, setCarDetails] = useState(null);

  const takePhoto = async () => {
    ImagePicker.launchCamera({ mediaType: 'photo' }, async response => {
      if (!response.didCancel) {
        setImageUrl(response.uri);
        await recognizeNumberPlate(response.uri);
      }                 
    });
  };

  const recognizeNumberPlate = async imageUri => {
    try {
      const { data } = await OCR.recognize({
        url: imageUri,
        language: 'eng',
        useBase64: false,
      });
      console.log('Recognized text:', data);
      // Extract number plate and fetch car details
      const carNumber = extractCarNumber(data);
      await fetchCarDetails(carNumber);
    } catch (error) {
      console.error('OCR Error:', error);
    }
  };

  const extractCarNumber = text => {
    // Implement logic to extract car number from recognized text
    // Example: regex or custom logic based on text structure
    return text; // Placeholder implementation
  };

  const fetchCarDetails = async (carNumber) => {
    try {
      const response = await axios.get(
        `https://api.example.com/cars?numberPlate=${carNumber}`
      );
      setCarDetails(response.data);
    } catch (error) {
      console.error('Error fetching car details:', error);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Take Photo" onPress={takePhoto} />
      {imageUrl && (
        <Image source={{ uri: imageUrl }} style={{ width: 200, height: 200 }} />
      )}
      {carDetails && (
        <View>
          <Text>Car Details:</Text>
          <Text>Model: {carDetails.model}</Text>
          <Text>Color: {carDetails.color}</Text>
          {/* Display other details */}
        </View>
      )}
    </View>
  );
};

export default CarDetailsScanner;
// npm install @react-native-community/cameraroll react-native-image-picker @react-native-community/ocr
