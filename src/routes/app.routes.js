import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

const App = createStackNavigator();

import Home from '../pages/Home'

function AppRoutes() {
  return (
    <App.Navigator
      screenOptions={{
        headerShown:false,
      }}
    >
      <App.Screen name="Home" component={Home} />
    </App.Navigator>
  );
}

export default AppRoutes;
