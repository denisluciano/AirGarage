import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './style';


function Garage({ navigation }) {

  return(
    <ScrollView>
      <View style={styles.containerImageGarage}>
        <Image
          source={require('../../assets/garage_page.png')}
        />
      </View>
      <View>
        <Text>Titulo Garagem</Text>
        <Icon name="heart-o" size={18} color="#000" />
      </View>
      <View>
        <Text>Descrição</Text>
        <Text>Uma garagem em uma área no centro próximo aos principais banco de da cidade além de ser uma área segura. </Text>
      </View>
      <View>
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
      <View>
        <View>
          <Text>Endereço</Text>
        </View>
        <View>

        </View>
      </View>


    </ScrollView>
  );
}

export default Garage;
