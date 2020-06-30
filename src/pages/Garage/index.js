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
    <ScrollView style={styles.containerGarage}>
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
      <View style={styles.containerAllInformation}>
        <View style={styles.containerTitulo}>
          <Text style={styles.textTitle}>Titulo Garagem</Text>
          <Icon name="heart-o" size={18} color="#000" />
        </View>
        <View style={styles.containerDescricao}>
          <Text>Descrição</Text>
          <Text>Uma garagem no centro da cidade, próximo aos principais bancos da cidade. Além de ser uma área muito segura. </Text>
        </View>
        <View style={styles.containerInformation}>
          <View>
            <Text style={styles.textInformation}>Informações</Text>
          </View>
          <View style={styles.containerInformationItems}>
            <View style={styles.itemInformation}>
              <IconMaterial name="arrow-expand-horizontal" size={18} color="#000" />
              <Text style={styles.textItemInformation}>Dimensões</Text>
            </View>
            <View style={styles.itemInformation}>
              <IconMaterial name="format-vertical-align-top" size={18} color="#000" />
              <Text style={styles.textItemInformation}>Altura Máxima</Text>
            </View>
            <View style={styles.itemInformation}>
              <Icon name="building" size={18} color="#000" />
              <Text style={styles.textItemInformation}>Tipo</Text>
            </View>
            <View style={styles.itemInformation}>
              <Icon name="vcard-o" size={18} color="#000" />
              <Text style={styles.textItemInformation}>Acesso controlado</Text>
            </View>
            <View style={styles.itemInformation}>
              <Icon name="video-camera" size={18} color="#000" />
              <Text style={styles.textItemInformation}>Cameras de segurança</Text>
            </View>
            <View style={styles.itemInformation}>
              <Icon name="times-circle" size={18} color="#000" />
              <Text style={styles.textItemInformation}>Vaga presa</Text>
            </View>
            <View style={styles.itemInformation}>
              <IconMaterial name="fridge-top" size={18} color="#000" />
              <Text style={styles.textItemInformation}>Depósito de objetos</Text>
            </View>
            <View style={styles.itemInformation}>
              <IconMaterial name="umbrella-outline" size={18} color="#000" />
              <Text style={styles.textItemInformation}>Coberto</Text>
            </View>
          </View>
        </View>
        <View style={styles.containerEndereco}>

            <Text style={styles.textEndereco}>Endereço</Text>

          <View style={styles.containerMaps}>
            <MapView style={styles.Maps}
              region={{
                latitude: -20.756138,
                longitude: -42.891375,
                latitudeDelta: 0.0043,
              longitudeDelta: 0.0034
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
          <TouchableOpacity
            style={ styles.btnDetalhes}
            onPress={() => navigation.navigate('Disponibilidade')}
          >
            <Text style={styles.textDetalhes}>Ver disponibilidade</Text>
          </TouchableOpacity>
        </View>

      </View>

    </ScrollView>

  );
}

export default Garage;
