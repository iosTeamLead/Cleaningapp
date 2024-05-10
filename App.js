import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/navigation/StackNavigation';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <StatusBar backgroundColor="#28435F" />
        <StackNavigation />
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

export default App;
