import React, {useState, useEffect, useCallback} from 'react';
import {Alert, View, Text, TouchableOpacity, FlatList } from 'react-native';
import {Calendar, CalendarList, Agenda, LocaleConfig } from 'react-native-calendars';
import styles from './style';


function Disponibilidade({ route, navigation }) {
  LocaleConfig.defaultLocale = 'pt-br';

  LocaleConfig.locales['pt-br'] = {
    monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
    monthNamesShort: ['Jan.','Fev.','Mar','Abr','Mai','Jun','Jul.','Ago','Set.','Otu.','Nov.','Dez.'],
    dayNames: ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'],
    dayNamesShort: ['Dom.','Seg.','Ter.','Quar.','Quin.','Sex.','Sab.'],
    today: 'Hoje'
  };

  const [selected, setSelected] = useState({});
  const [firstDate, setFirstDate] = useState({});
  // usado para saber qual clique é para adicionar o intervalo.
  // false não deu nem um clique, true falta um para o intervalo
  const [alter, setAlter] = useState(false)
  const [diasAlugar, setDiasAlugar] = useState([]);

  // to load dates avaliable
  useEffect(() => {

    let markedDay = {}

    route.params.disponibilidadeGaragem.forEach(element => {

      const dayInitialObj = new Date(element.data_inicial)
      const dayFinalObj = new Date(element.data_final)

      var d = new Date(dayInitialObj)

      for (; d <= dayFinalObj; d.setDate(d.getDate() + 1)) {
        markedDay[formatDate(d)] = {disabled: false, textColor: "#000", idDisp: element.id}
      }
    });

    route.params.locacaoGaragem.forEach(element => {

      const dayInitialLoc = new Date(element.data_inicial)
      const dayFinalLoc = new Date(element.data_final)

      var d = new Date(dayInitialLoc)

      for (; d <= dayFinalLoc; d.setDate(d.getDate() + 1)) {
        markedDay[formatDate(d)] = {disabled: true, color: "#F4C20D", locacao: true}
      }
    })

    setSelected( Object.assign({}, markedDay));
  },[])

  const clearDays = () => {

    const markedDay = Object.assign({}, selected);

    diasAlugar.forEach(element => {
      if(!!markedDay[element].idDisp){
        markedDay[element] = {disabled: false, textColor: "#000", idDisp: markedDay[element].idDisp}
      }
    });

    //limpar caso tenha um dia selecionado
    setFirstDate({})
    setAlter(false)

    setSelected(markedDay);
    setDiasAlugar([]);

  }



  const onDayPress = (day) => {

    //se esse dia está disponível
    if(!selected[day.dateString]){
      Alert.alert(
        'Erro',
        "Dia indiponível, por favor selecione uma data válida"
      )
      return;
    }

    //se o dia já pertence a uma locacao
    if(!!selected[day.dateString].locacao){
      Alert.alert(
        'Erro',
        "Esse dia já pertence a uma locação. Por favor selecione um dia válido"
      )
      return;
    }


    if(!alter){
      clearDays(); // para caso ja haja uma seleção
      const dayObj = new Date(day.year, day.month-1, day.day)
      setFirstDate(dayObj);
      setAlter(!alter)
    }else {
      // console.log(selected[formatDate(firstDate)])


      //se o primeiro já tiver selecionado não deixar em um período distinto
      if(selected[formatDate(firstDate)].idDisp != selected[day.dateString].idDisp ){
        Alert.alert(
          'Erro',
          "Você não pode selecionar um intervalo que contenha dias indiponíveis"
        )
        return;
      }



      const dayObj = new Date(day.year, day.month-1, day.day); //month is less 1 because is start in month 0 and calendary 1

      if(firstDate > dayObj){
        //verificando se existe alguma data marcada entre o primeiro e o ultimo dia
        if(existDateBetween(dayObj, firstDate)){
          Alert.alert(
            'Erro',
            "Você não pode selecionar um intervalo que exista uma locação já existente"
          )
          return;
        }
        markDays(dayObj, firstDate);
      }else {
        //verificando se existe alguma data marcada entre o primeiro e o ultimo dia
        if(existDateBetween(firstDate, dayObj)){
          Alert.alert(
            'Erro',
            "Você não pode selecionar um intervalo que exista uma locação já existente"
          )
          return;
        }
        markDays(firstDate, dayObj);
      }

      setAlter(!alter)

    }
  }
  const existDateBetween = (initial, final) => {

    const markedDay = Object.assign({}, selected);

    var d = new Date(initial)

    for (; d <= final; d.setDate(d.getDate() + 1)) {

      if(!!markedDay[formatDate(d)].locacao){
        return true;

      }

    }
    return false;
  }


  const markDays = (initial, final) => {

    const markedDay = Object.assign({}, selected);
    const markedDayKeys = [];

    var d = new Date(initial)

    for (; d <= final; d.setDate(d.getDate() + 1)) {

      markedDay[formatDate(d)] = {startingDay: false, color: 'green', endingDay: false, idDisp: markedDay[formatDate(d)].idDisp}
      markedDayKeys.push(formatDate(d));

    }
    console.log(markedDayKeys);

    setDiasAlugar(markedDayKeys);
    setSelected(markedDay)
  }



  const next = () => {

    let dataPage3 = {}

    dataPage3 = Object.assign(route.params, {"diasAlugar": diasAlugar});

    navigation.navigate('Confirmacao', dataPage3);

  }

  const formatDate = (date) => {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
  }

  return (
    <View style={styles.containerDisponibilidade}>
      <View style={styles.containerBody}>
        <View style={styles.containerText}>
          <Text style={styles.textDisponibilidade}>
            Selecione os períodos que deseja disponibilizar
            sua garagem clicando primeira vez em uma data para indicar o inicio e segunda vez para demarcar o fim
            </Text>
        </View>

        <View style={styles.containerCalendary}>

          <CalendarList

            markingType={'period'}
            pastScrollRange={0}
            // Max amount of months allowed to scroll to the future. Default = 50
            futureScrollRange={12}
            // Enable or disable scrolling of calendar list
            markedDates={selected}
            onDayPress={onDayPress}
            disabledByDefault={true}
          />
        </View>

      </View>
      <View style={styles.bottomBar}>

        <TouchableOpacity
          style={styles.btnLimpar}
          onPress={() => {
            clearDays();
          }}
        >
          <Text style={styles.textConfirmar}>Limpar período</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnConfirmar}
          onPress={next}
        >
          <Text style={styles.textConfirmar}>Avançar</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

export default Disponibilidade;
