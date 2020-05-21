import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

const App = createStackNavigator();

import Home from '../pages/Home'
import Login from '../pages/Login'

function AppRoutes() {
  return (
    <App.Navigator
      screenOptions={{
        headerShown:false,
      }}
    >
      <App.Screen name="Login" component={Login} />
      <App.Screen name="Home" component={Home} />
    </App.Navigator>
  );
}

export default AuthRoutes;
