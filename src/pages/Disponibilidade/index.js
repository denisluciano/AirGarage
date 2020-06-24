import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

import {Calendar, CalendarList, Agenda, LocaleConfig} from 'react-native-calendars';

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


function Calendary (){
  return(

    <FlatList
    data={[
      {key: '1'},
      {key: '2'},
      {key: '3'},
      {key: '4'},
      {key: 'James'},
      {key: 'Joel'},
      {key: 'John'},
      {key: 'Jillian'},
      {key: 'Jimmy'},
      {key: 'Julie'},
    ]}
    renderItem={({item}) =>
    <View style={styles.containerDia}>
      <TouchableOpacity
        // style={}
        onPress={() => {}}
      >
        <Text>{item.key}</Text>
      </TouchableOpacity>
    </View>
    }
  />

  );
}

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
    <View>
      <CalendarList
        markedDates={{
          '2020-06-16': {selected: true, selectedColor: 'blue'},
          '2020-06-17': {selected: true, selectedColor: 'blue'},
          '2020-06-18': {selected: true, selectedColor: 'blue'},
          '2020-06-19': {selected: true, selectedColor: 'blue'},
          '2020-06-20': {disabled: true},
        }}
        pastScrollRange={0}
        // Max amount of months allowed to scroll to the future. Default = 50
        futureScrollRange={3}
        // Enable or disable scrolling of calendar list
      />
    </View>
  );
}

export default Disponibilidade;
