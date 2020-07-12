/*
Uma observação que tenho a fazer aqui. Inicialmente o esquema de rotas era
feito de uma forma diferente, mas precisamos mudar pois em algumas telas
precisavamos ocultar o meu inferior e o react native não recomendava usar
'tabBarVisible', pois poderia acontecer alguns bugs. A recomendação era
criar uma pilha antes e depois chamar a tab, então foi isso que fizemos.

Tudo isso que foi mencionado a cima está na doc v5,
https://reactnavigation.org/docs/hiding-tabbar-in-screens/

Antes tinhamos as tabs e para cada tab tinha um componente de stach, como
por exemplo para tab Home o component dava as outras screens em uma pilha.
Esse component ficava em um arquivo separado chamado home.routes.js e nele
era carregado de fato os components react-native
*/
import * as React from 'react';

import { StyleSheet } from 'react-native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const AppTab = createBottomTabNavigator();

import HomeScreen from '../pages/Home';
import Favorite from '../pages/Favorite'
import Home from '../pages/Home';
import Leasing from '../pages/Leasing';
import Notification from '../pages/Notification';
import Profile from '../pages/Profile';
import Garage from '../pages/Garage';
import EditProfile from '../pages/EditProfile';
import Disponibilidade from '../pages/Disponibilidade';


function TabRoutes() {
  return (
    <AppTab.Navigator
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
        <AppTab.Screen name="Página Inicial" component={HomeScreen}  />
        <AppTab.Screen name="Notificações" component={Notification} />
        <AppTab.Screen name="Locações" component={Leasing} tabBarOptions={{ activeBackgroundColor:"#F4C20D" }} />
        <AppTab.Screen name="Favoritos" component={Favorite} />
        <AppTab.Screen name="Perfil" component={Profile} />
      </AppTab.Navigator>
  );
}

const AppStack = createStackNavigator();

function AppRoutes() {

  return (
    <AppStack.Navigator
      screenOptions={{
        headerShown:false,
      }}
      // initialRouteName="Disponibilidade"
    >
      <AppStack.Screen name="Home" component={TabRoutes} />
      <AppStack.Screen
        name="Garage"
        component={Garage}
        options={{
          title: 'Garagem',
          headerStyle: {
            backgroundColor: '#F4C20D',
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerShown: true,
          // headerTitleAlign: "center",
        }}
      />
      <AppStack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{
          title: 'Editar Perfil',
          headerStyle: {
            backgroundColor: '#F4C20D',
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerShown: true,
          // headerTitleAlign: "center",
        }}
      />
      <AppStack.Screen
        name="Disponibilidade"
        component={Disponibilidade}
        options={{
          title: 'Disponibilidade',
          headerStyle: {
            backgroundColor: '#F4C20D',
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerShown: true,
          // headerTitleAlign: "center",
        }}
      />

    </AppStack.Navigator>
  );
}


export default AppRoutes;
