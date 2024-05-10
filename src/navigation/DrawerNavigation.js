import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import Notification from '../screen/Notification';
import CarNumberPlate from '../screen/CarNumberPlate';
// import Home from '../screen/Home';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import SplachScreen from '../screen/SplachScreen';
// import BottomtabNavigation from './BottomtabNavigation';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator initialRouteName='SplachScreen'>
      {/* <Drawer.Screen name="Home" component={BottomtabNavigation} options={{headerShown:false}}/> */}
      {/* <Drawer.Screen name="SplachScreen" component={SplachScreen} options={{headerShown:false}}/> */}
      <Drawer.Screen
        name="CarNumberPlate"
        component={CarNumberPlate}
        options={{
          headerShown: false,
          drawerIcon: () => (
            <Icon
              name="dashboard"
              size={20}
            />
          ),
        }}
      />
      
      <Drawer.Screen
        name="Notification"
        component={Notification}
        options={{drawerIcon: () => <Icon name="notifications" size={20} />}}
      />
      {/* <Drawer.Screen
        name="Home"
        component={Home}
        options={{drawerIcon: () => <Icon name="home" size={20} />}}
      /> */}
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
