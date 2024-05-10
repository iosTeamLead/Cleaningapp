import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/AntDesign';
import Home from '../screen/Home';
import Notification from '../screen/Notification';

const Tab = createBottomTabNavigator();
const BottomtabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarActiveTintColor: 'orange',
        tabBarInactiveTintColor: '#fff',
        tabBarStyle: {
          backgroundColor: 'purple',
          borderTopWidth: 0,
          elevation: 0,
          paddingTop: 10,
          paddingBottom: 10,
          height: 70,
        },
      })}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: () => <Icon name="home" color="#fff" size={25} />,
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          headerShown: false,
          tabBarIcon: () => <Icon name="settings" color="#fff" size={25} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomtabNavigation;
