import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

const Auth = createStackNavigator();

import Init from '../pages/Init';
import SignIn from '../pages/SignIn';
import AppRoutes from './app.routes';
import SignUp from '../pages/SignUp';


function AuthRoutes() {
  return (
    <Auth.Navigator
      screenOptions={{
        headerShown:false,
      }}
    >
      <Auth.Screen name="Init" component={Init} />
      <Auth.Screen name="Login" component={SignIn} />
      <Auth.Screen name="SignUp" component={SignUp} />
      <Auth.Screen name="TabRoutes" component={AppRoutes} />
    </Auth.Navigator>
  );
}

export default AuthRoutes;
