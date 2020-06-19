import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

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
  return (
    <View>
      <Calendary />
    </View>
  );
}

export default Disponibilidade;
