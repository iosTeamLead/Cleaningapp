import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import MlkitOcr from 'react-native-mlkit-ocr';
import Header from '../component/Header';
import axios from 'axios';

const CarDetails = () => {
  const [image, setImage] = useState(null);
  const [carNumber, setCarNumber] = useState(null);
  const [carDetails, setCarDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const launchImagePicker = async () => {
      try {
        const result = await launchImageLibrary({}, setImage);
        if (!result.didCancel) {
          setImage(result);
        }
      } catch (error) {
        console.error('Image picker error:', error);
      }
    };

    launchImagePicker();
  }, []);

  useEffect(() => {
    const recognizeText = async () => {
      try {
        if (image) {
          const result = await MlkitOcr.detectFromUri(image.assets[0].uri);
          setCarNumber(result[0].text);
          console.log('carNumber', result[0].text);
        }
      } catch (error) {
        console.error('Text recognition error:', error);
      }
    };

    recognizeText();
  }, [image]);

  useEffect(() => {
    if (carNumber) {
      fetchCarDetails(carNumber);
    }
  }, [carNumber]);

  const fetchCarDetails = async carNumber => {
    setLoading(true);
    try {
      const res = await axios.get(
        `http://192.168.1.113:4000/api/userdetails/${carNumber}`,
      );
      if (res.status === 200) {
        setCarDetails(res.data);
        setLoading(false);
        console.log('CarDetails', carDetails);
      } else if (res.status === 401) {
        console.log(res.error);
      }
    } catch (error) {
      setLoading(false);
      console.error('Fetch car details error:', error);
    }
  };

  return (
    <>
      <Header title="Car Details" />
      {loading ? (
        <Text style={{fontSize: 25, color: '#000', fontWeight: '500'}}>
          Loading
        </Text>
      ) : (
        <>
          {carDetails ? (
            <View style={{margin: 10}}>
              <View style={{backgroundColor: '#eee'}}>
                <Text
                  style={{fontSize: 20, color: 'tomato', fontWeight: 'bold'}}>
                  Car Details:
                </Text>
              </View>
              <View style={{marginTop: 20}}>
                <View style={styles.detailsbox}>
                  <Text style={styles.h6}>CarNumber:</Text>
                  <Text style={[styles.h6, styles.span]}>
                    {carDetails.carNumber}
                  </Text>
                </View>
                <View style={styles.detailsbox}>
                  <Text style={styles.h6}>Name:</Text>
                  <Text style={[styles.h6, styles.span]}>
                    {carDetails.name}
                  </Text>
                </View>
                <View style={styles.detailsbox}>
                  <Text style={styles.h6}>Model:</Text>
                  <Text style={[styles.h6, styles.span]}>
                    {carDetails.model}
                  </Text>
                </View>
                <View style={styles.detailsbox}>
                  <Text style={styles.h6}>Color:</Text>
                  <Text style={[styles.h6, styles.span]}>
                    {carDetails.color}
                  </Text>
                </View>
                <View style={styles.detailsbox}>
                  <Text style={styles.h6}>Location:</Text>
                  <Text style={[styles.h6, styles.span]}>
                    {carDetails.location}
                  </Text>
                </View>
                <View style={styles.detailsbox}>
                  <Text style={styles.h6}>Phone Number:</Text>
                  <Text style={[styles.h6, styles.span]}>
                    {carDetails.phone_number}
                  </Text>
                </View>
              </View>
            </View>
          ) : (
            <View style={{alignItems:'center',justifyContent:'center',flex:1,margin:10}}>
              <Text style={{fontSize:20,color:'#000'}}>No details found for car number: {carNumber}</Text>
            </View>
          )}
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  detailsbox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  h6: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000',
  },
  span: {
    color: 'tomato',
  },
});

export default CarDetails;
