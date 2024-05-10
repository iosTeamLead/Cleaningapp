import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, View, Text, Button} from 'react-native';
import axios from 'axios';
import Header from '../component/Header';

const CarNumberPlate = ({navigation}) => {
  const [carNumber, setCarNumber] = useState([]);
  console.log('CarDetails', carNumber);


  const getCarNumber = async () => {
    try {
      const res = await axios.get('http://192.168.1.113:4000/api/userdetails');
      setCarNumber(res.data);
    } catch (error) {
      console.log('Error fetching car numbers:', error);
    }
  };

  useEffect(() => {
    getCarNumber();
  }, []);

  const renderCarNumberDetails = ({item}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 20,
          // padding: 10,
          borderBottomColor: 'white',
          borderWidth: 0.5,
        }}>
        <Text style={{fontSize: 20, color: 'white'}}>{item.name}</Text>
        <Text style={{color: 'white', fontSize: 20}}>{item.carNumber}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <Header title="CarNumberplate" />
      <View style={{backgroundColor: '#000', padding: 5, height: '100%'}}>
        <View style={{margin: 15}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: 20, color: 'tomato'}}>Name</Text>
            <Text style={{fontSize: 20, color: 'tomato'}}>CarNumber</Text>
          </View>
          <FlatList
            data={carNumber}
            renderItem={renderCarNumberDetails}
            keyExtractor={item => item._id}
          />
        </View>
        <Button title='Go' onPress={()=>navigation.navigate('Home')}/>
      </View>
    </SafeAreaView>
  );
};

export default CarNumberPlate;
