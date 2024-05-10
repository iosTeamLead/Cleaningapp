import React, {useState, useEffect} from 'react';
import {View, Text, Button, PermissionsAndroid, StyleSheet} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import axios from 'axios';
import Header from '../component/Header';

const CarDetails = () => {
  const [scanned, setScanned] = useState(false);
  const [carNumber, setCarNumber] = useState(null);
  const [carDetails, setCarDetails] = useState(null);

  useEffect(() => {
    requestCameraPermission();
  }, []);

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Camera Permission',
          message: 'This app needs access to your camera.',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Camera permission granted');
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const handleScan = event => {
    console.log('Scanned QR code:', event.data);
    if (event.data) {
      setCarNumber(event.data); // Set the scanned car number
      fetchCarDetails(event.data);
      setScanned(true);
    }
  };

  const fetchCarDetails = async carNumber => {
    try {
      const res = await axios.get(
        `http://192.168.1.128:4000/api/userdetails/${carNumber}`,
      );
      if (res.status === 200) {
        setCarDetails(res.data);
        console.log('CarDetails', res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const resetScanner = () => {
    setScanned(false);
    setCarNumber(null); // Reset the scanned car number
    setCarDetails(null);
  };

  return (
    <View style={{flex: 1}}>
      {scanned ? (
        <View>
          <Header title="Car Details" />
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
              {/* Display other details */}
              <Button title="Scan Again" onPress={resetScanner} />
            </View>
          ) : (
            <Text>No details found for car number: {carNumber}</Text>
          )}
        </View>
      ) : (
        <QRCodeScanner
          onRead={handleScan}
          flashMode={RNCamera.Constants.FlashMode.auto}
          topContent={<Text>Scan the QR code</Text>}
          bottomContent={<Text>Align QR code within the frame to scan</Text>}
        />
      )}
    </View>
  );
};

export default CarDetails;

const styles = StyleSheet.create({
  detailsbox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
