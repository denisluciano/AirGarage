import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

const Auth = createStackNavigator();

import Home from '../pages/Home'
import Login from '../pages/Login'

function AuthRoutes() {
  return (
    <Auth.Navigator
      screenOptions={{
        headerShown:false,
      }}
    >
      <Auth.Screen name="Login" component={Login} />
    </Auth.Navigator>
  );
}

export default AuthRoutes;
