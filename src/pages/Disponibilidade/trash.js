import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

import { Calendar } from 'react-native-calendario';

import styles from './style';


function Disponibilidade({ navigation }) {


  return (
    <View style={styles.containerDisponibilidade}>
      <View style={styles.containerBody}>
        <View style={styles.containerText}>
          <Text style={styles.textDisponibilidade}>Veja as datas disponíveis e selecione os dias que deseja alugar</Text>
        </View>

        <View style={styles.containerCalendary}>

        <Calendar
          onChange={(range) => console.log(range)}
          locale='br'
          disabledDays={['2020-09-09',]}

        />
        </View>

      </View>
      <View style={styles.bottomBar}>

        <TouchableOpacity
          style={ styles.btnConfirmar}
          onPress={() => navigation.navigate('Garage')}
        >
          <Text style={styles.textConfirmar}>Avançar</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

export default Disponibilidade;
