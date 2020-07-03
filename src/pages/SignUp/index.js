import React, { useState } from 'react';
import { View, Text,TextInput, TouchableOpacity } from 'react-native';
import styles from './style';

function Step01(){
  return(
    <>
      <TextInput
        style={ styles.input }
        onChangeText={text => setName(text)}
        value={name}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Nome Completo"
      />
      <TextInput
        style={ styles.input }
        onChangeText={text => setCPF(text)}
        value={cpf}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="CPF/CNPJ"
      />
      <TextInput
        style={ styles.input }
        onChangeText={text => setEmail(text)}
        value={email}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Email"
      />
      <TextInput
        style={ styles.input }
        onChangeText={text => setPassword(text)}
        value={password}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={true}
        placeholder="Senha"
      />
    </>

  );
}


function SignUp({ navigation }) {
  const [name, setName] = useState('');
  const [cpf, setCPF] = useState('');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.containerSignUp}>
      <View style={styles.containerTextHeader}>
        <Text style={styles.textHeader}>Informe seus dados para proceguir no cadastro</Text>
      </View>
      <View style={styles.containerInputs}>
        <Step01 />
      </View>
      <View style={styles.containerButton}>
        <TouchableOpacity
          style={ styles.btnSubmit}
          onPress={ () =>{}}
        >
          <Text style={styles.submitText}>Avançar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default SignUp;
