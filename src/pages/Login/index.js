import React from 'react';
import { Button, TextInput, View, Image, KeyboardAvoidingView, Text } from 'react-native';

import api from '../../services/api';

import styles from './style'
import { TouchableOpacity } from 'react-native-gesture-handler';


function Login() {
  const [email, onChangeEmail] = React.useState('');
  const [senha, onChangeText] = React.useState('');

  const [session, setSession] = React.useState(null);

  async function login() {
    console.log('fazendo a request');
    const response =  await api.post('/sessions', {
      params: {
        email: 'denis.lopes3012@gmail.com',
        password: '123456'
      }
    });

    console.log(response.data);

    // setSession(response.data);
  }

  return(
    <KeyboardAvoidingView style={styles.background}>
      <View style={ styles.containerLogo }>
        <Image
        source={require('../../assets/logo.png')}
        />
      </View>
      <View style={styles.container}>
        <TextInput
          style={ styles.input }
          onChangeText={text => onChangeEmail(text)}
          value={email}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          style={ styles.input }
          onChangeText={text => onChangeText(text)}
          value={senha}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TouchableOpacity
          style={ styles.btnSubmit}
          onPress={login}
        >
          <Text style={styles.submitText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ styles.btnRegister}>
          <Text style={styles.registerText}>Registrar-se</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ styles.btnForgot}>
          <Text style={styles.registerForgot}>Cadastrar-se</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}



export default Login;
