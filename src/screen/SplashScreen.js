import {Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from '../styles/Styles';

const SplashScreen = () => {
  const navigation = useNavigation();

  // useEffect(()=>{
  //     setTimeout(()=>{
  //         navigation.navigate('CarNumberPlate')
  //     },5000)
  // },[])
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#25435F',
      }}>
      <View style={{flex: 4, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: 40, color: '#F9C62E', fontWeight: '600'}}>
          WebCleaning
        </Text>
      </View>
      <View style={{flex:1}}>
        <TouchableOpacity style={styles.btn}>
            <Text style={styles.btntext}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default SplashScreen;
