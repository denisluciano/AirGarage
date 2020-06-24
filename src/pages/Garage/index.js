import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, ImageBackground } from 'react-native';
import MapView from 'react-native-maps';

import Icon from 'react-native-vector-icons/FontAwesome';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';


import styles from './style';

function ComentaryCard(){
  return(
    <View style={styles.containerCardComentary}>
      <View style={styles.headerCardComentary}>
        <Text>Jugurta Lisboa</Text>
        <Text>12/08/2020</Text>
      </View>
      <Text style={styles.textComentary}>Meu carro ficou estacionado 7 meses nessa garagem e achei uma ótima garagem, estava sempre limpa, dono cuidadoso</Text>

    </View>
  );
}


function Garage({ navigation }) {

  return(
    <ScrollView style={{flex:1}}>
      <View>
      <ScrollView
        // style={styles.containerImageGarage}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <Image
          source={require('../../assets/garage_page.png')}
        />
        <Image
          source={require('../../assets/garage_page.png')}
        />
        <View></View>
      </ScrollView>
      </View>
      <View style={styles.containerTitulo}>
        <Text>Titulo Garagem</Text>
        <Icon name="heart-o" size={18} color="#000" />
      </View>
      <View style={styles.containerDescricao}>
        <Text>Descrição</Text>
        <Text>Uma garagem em uma área no centro próximo aos principais banco de da cidade além de ser uma área segura. </Text>
      </View>
      <View style={styles.containerInformacao}>
        <View>
          <Text>Informações</Text>
        </View>
        <View>
          <View>
            <IconMaterial name="arrow-expand-horizontal" size={18} color="#000" />
            <Text>Dimensões</Text>
          </View>
          <View>
            <IconMaterial name="format-vertical-align-top" size={18} color="#000" />
            <Text>Altura Máxima</Text>
          </View>
          <View>
            <Icon name="building" size={18} color="#000" />
            <Text>Tipo</Text>
          </View>
          <View>
            <Icon name="vcard-o" size={18} color="#000" />
            <Text>Acesso controlado</Text>
          </View>
          <View>
            <Icon name="video-camera" size={18} color="#000" />
            <Text>Cameras de segurança</Text>
          </View>
          <View>
            <Icon name="times-circle" size={18} color="#000" />
            <Text>Vaga presa</Text>
          </View>
          <View>
            <IconMaterial name="fridge-top" size={18} color="#000" />
            <Text>Depósito de objetos</Text>
          </View>
          <View>
            <IconMaterial name="umbrella-outline" size={18} color="#000" />
            <Text>Coberto</Text>
          </View>
        </View>
      </View>
      <View style={styles.containerEndereco}>
        <View>
          <Text>Endereço</Text>
        </View>
        <View style={{flex:1, alignItems: "center"}}>
          <MapView style={{flex:1, width: 380, height:100}}
            region={{
              latitude: -20.756138,
              longitude: -42.891375,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}
          />
        </View>
        <View>
          <Text>Av Jk, Bairro Santa Clara, Viçosa MG</Text>
        </View>
      </View>
      <View style={styles.containerAvaliacao}>
        <Text>Avaliacão</Text>
        <Text>4,7</Text>
      </View>
      <View style={styles.containerComentarios}>
        <Text>Comentários</Text>

        <ComentaryCard />
        <ComentaryCard />
        <ComentaryCard />
        <ComentaryCard />
      </View>



    </ScrollView>

  );
}

export default Garage;
