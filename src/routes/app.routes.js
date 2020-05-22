import * as React from 'react';

import { StyleSheet } from 'react-native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const App = createBottomTabNavigator();

import Favorite from '../pages/Favorite'
import Home from '../pages/Home';
import Leasing from '../pages/Leasing';
import Notification from '../pages/Notification';
import Profile from '../pages/Profile';

function AppRoutes() {
  return (
    <App.Navigator
      screenOptions={{
        headerShown:false,
      }}
      tabBarOptions={{
        activeBackgroundColor: "#F4C20D",
        inactiveBackgroundColor: "#F4C20D",
        activeTintColor: 'black',
        inactiveTintColor: 'black',

      }}

      >
        <App.Screen name="Página Inicial" component={Home} />
        <App.Screen name="Notificações" component={Notification} />
        <App.Screen name="Locações" component={Leasing} tabBarOptions={{ activeBackgroundColor:"#F4C20D" }} />
        <App.Screen name="Favoritos" component={Favorite} />
        <App.Screen name="Perfil" component={Profile} />
      </App.Navigator>
  );
}

export default AppRoutes;

const styles = StyleSheet.create({
  // navigatorAppRoutes:{

  // }
})


