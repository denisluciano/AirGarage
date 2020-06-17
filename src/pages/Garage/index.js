import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './style';


function Garage({ navigation }) {

  return(
    <>
      <TouchableOpacity

        onPress={
          () => {
            navigation.navigate('EditProfileScreen')
          }

        }
      >
        <Text >Detalhes</Text>
      </TouchableOpacity>
    </>
  );
}

export default Garage;
