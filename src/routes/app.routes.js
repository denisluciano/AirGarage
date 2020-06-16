import * as React from 'react';

import { StyleSheet } from 'react-native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const App = createBottomTabNavigator();

import Favorite from '../pages/Favorite'
import Home from '../pages/Home';
import Leasing from '../pages/Leasing';
import Notification from '../pages/Notification';
import Profile from '../pages/Profile';

import HomeRoutes from './home.routes';


function AppRoutes() {
  return (
    <App.Navigator
      // screenOptions={{
      //   headerShown:false,
      // }}
      screenOptions={({ route }) => ({
        headerShown:false,
        tabBarIcon: ({ focused, color, size }) => {

          if (route.name === 'Página Inicial') {
            return focused
              ? <MaterialCommunityIcons name='home' size={size} color={color} />
              : <MaterialCommunityIcons name='home-outline' size={size} color={color} />;
          } else if (route.name === 'Notificações') {
            return focused
              ? <Ionicons name='md-notifications' size={size} color={color} />
              : <Ionicons name='ios-notifications-outline' size={size} color={color} />;
          }else if (route.name === 'Locações') {
            return focused
              ? <Ionicons name='ios-list-box' size={size} color={color} />
              : <Ionicons name='ios-list' size={size} color={color} />;
          }else if (route.name === 'Favoritos') {
            return focused
              ? <MaterialCommunityIcons name='heart' size={size} color={color} />
              : <MaterialCommunityIcons name='heart-outline' size={size} color={color} />;
          }else if (route.name === 'Perfil') {
            return focused
              ? <FontAwesome name='user' size={size} color={color} />
              : <FontAwesome name='user-o' size={size} color={color} />;
          }

        },
      })}
      tabBarOptions={{
        activeBackgroundColor: "#F4C20D",
        inactiveBackgroundColor: "#F4C20D",
        activeTintColor: 'black',
        inactiveTintColor: 'black',

      }}

      >
        <App.Screen name="Página Inicial" component={HomeRoutes} />
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


