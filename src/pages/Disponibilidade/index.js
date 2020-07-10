import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

import {Calendar, CalendarList, Agenda, LocaleConfig } from 'react-native-calendars';

import styles from './style';

const calendary =
{
  "janeiro" : 31,
  "marco": 31,
  "abril": 30,
  "maio": 31,
  "junho": 30,
  "julho": 31,
  "agosto": 31,
  "setembro": 30,
  "outubro": 31,
  "novembro": 30,
  "dezembro": 31,
};



function Disponibilidade({ navigation }) {
  LocaleConfig.defaultLocale = 'pt-br';

  LocaleConfig.locales['pt-br'] = {
    monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
    monthNamesShort: ['Jan.','Fev.','Mar','Abr','Mai','Jun','Jul.','Ago','Set.','Otu.','Nov.','Dez.'],
    dayNames: ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'],
    dayNamesShort: ['Dom.','Seg.','Ter.','Quar.','Quin.','Sex.','Sab.'],
    today: 'Hoje'
  };
  return (
    <View style={styles.containerDisponibilidade}>
      <View style={styles.containerBody}>
        <View style={styles.containerText}>
          <Text style={styles.textDisponibilidade}>Veja as datas disponíveis e selecione os dias que deseja alugar</Text>
        </View>

        <View style={styles.containerCalendary}>
          <CalendarList
            markedDates={{
              '2020-08-16': {startingDay: true, color: 'green'},

              '2020-08-19': {endingDay: true, color: 'green'},
              '2020-08-20': {disabled: true},
            }}
            markingType={'period'}
            pastScrollRange={0}
            // Max amount of months allowed to scroll to the future. Default = 50
            futureScrollRange={3}
            // Enable or disable scrolling of calendar list
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
