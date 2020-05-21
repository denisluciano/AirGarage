import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


import Routes from './src/routes';


const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <View style={{flex:1, }}>
        <Routes />
      </View>
    </NavigationContainer>
  );
};

export default App;
