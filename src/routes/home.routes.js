import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../pages/Home';
import GarageScreen from '../pages/Garage';

const Home = createStackNavigator();

function HomeRoutes() {
  return (
    <Home.Navigator
      screenOptions={{
        headerShown:false,
      }}
    >
      <Home.Screen name="Home" component={HomeScreen} />
      <Home.Screen name="Garage" component={GarageScreen} />
    </Home.Navigator>
  );
}

export default HomeRoutes;
