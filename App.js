import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/navigation/StackNavigation';
import { StatusBar } from 'react-native';


function App() {
  return (
    
    <NavigationContainer>
      <StatusBar backgroundColor="#28435F"/>
      <StackNavigation/>
    </NavigationContainer>
  );
}

export default App;
