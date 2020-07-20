import React, { useEffect, useState } from 'react';
import { Alert, Image, View, Text, TouchableOpacity } from 'react-native';
import api from '../../services/api';

import styles from './style';

function Confirmacao({ route, navigation}) {

  const [dateInitialFormated, setDateInitialFormated] = useState('');
  const [dateFinalFormated, setDateFinalFormated] = useState('');

  const [valorTotalFormated, setValorTotalFormated] = useState(0);

  useEffect(() => {
    if(!!route.params.diasAlugar[0]){
      setDateInitialFormated(dataAtualFormatada(route.params.diasAlugar[0]))
    }
    if(!!route.params.diasAlugar[route.params.diasAlugar.length - 1]){
      setDateFinalFormated(dataAtualFormatada(route.params.diasAlugar[route.params.diasAlugar.length - 1]))
    }
    if(!!route.params.diasAlugar){
      setValorTotalFormated(formatTotalValue())
    }

  },[])

  function handleSubmit() {

    // api.post('/garages', payload).then((res) => {
    //   console.log((res.data.id))

    // }).catch((err) =>{
    //   console.log(err)
    // });
    console.log(route.params);

    navigation.navigate('Home')

    Alert.alert(
      'Sucesso',
      "Sua solicitação de locação foi realizada com sucesso. Para visualiza-la va a página de locações"
    )

  }
  function dataAtualFormatada(date){
    var x = date.split("-");

    return x[2]+"/"+x[1]+"/"+x[0]+""

  }

  function formatTotalValue(){

    var total = route.params.diasAlugar.length * route.params.disponibilidadeGaragem[0].valor_diaria;

    return total.toFixed(2).toString().replace(".",",");

  }

  return (
    <View style={styles.containerPage}>
      <View style={styles.containerImageGarage}>
        <Image
          source={require('../../assets/garagem_confirmar.png')}
        />
        <Text style={styles.textHeader}>Confira os dados da locação</Text>
      </View>
      <View style={styles.containerInformation}>
        <View style={styles.containerIntervalo}>
          <Text style={styles.textInformacoes}>Intervalo</Text>
  <Text style={styles.valueIntervalo}>{dateInitialFormated} até dia {dateFinalFormated}</Text>
        </View>
        <View style={styles.containerIntervalo}>
          <Text style={styles.textInformacoes}>Valor total da locação</Text>
          <Text style={styles.valueIntervalo}>{valorTotalFormated}</Text>
        </View>
      </View>

      <TouchableOpacity
        style={ styles.btnDetalhes}
        onPress={() => {
          handleSubmit()
        }}
      >
        <Text style={styles.textDetalhes}>Confirmar locação</Text>
      </TouchableOpacity>

    </View>

  )
}

export default Confirmacao;
