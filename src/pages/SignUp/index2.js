import React, { useState, useContext, useCallback, useRef, useEffect } from 'react';
import { View, Text,TextInput, TouchableOpacity } from 'react-native';
import styles from './style';
import RegisterContext from '../../contexts/register';
import { RegisterProvider } from '../../contexts/register';

import { Form } from '@unform/mobile'
import { useField } from '@unform/core';


function Step01(){
  const { name, cpf, email, password, step01 } = useContext(RegisterContext);

  const [nameC, setNameC] = useState('');
  const [cpfC, setCPFC] = useState('');
  const [emailC, setEmailC] = useState('');
  const [passwordC, setPasswordC] = useState('');

  //referencia do form para fazermos o submit no TouchableOpacity
  const formRef = useRef(null);


  //Essa parte é para registrar os campos do nosso formulário
  const { registerField, defaultValue='', fieldName, error } = useField(name)

  //para receber valor do nosso input
  const inputValueRef = useRef({ value: defaultValue});

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
    })
  },[fieldName, registerField])


  function handleStep01(){
    step01(nameC,cpfC,emailC,passwordC);
    console.log("handleStepo1");
  }
  const handleStep01x = useCallback((data) => {
    console.log(data);
  })

  return(
    <View style={styles.containerSignUp}>
      <View style={styles.containerTextHeader}>
        <Text style={styles.textHeader}>Informe seus dados para proceguir no cadastro</Text>
      </View>
      <View >
        <Form
          style={ styles.containerInputs }
          onSubmit={handleStep01x}
          ref={formRef}
        >
          <TextInput
            style={ styles.input }
            onChangeText={(text) => {
              inputValueRef.current.value = value
            }}
            defaultValue={defaultValue}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Nome Completo"
          />
          {/* <TextInput
            style={ styles.input }
            onChangeText={text => setCPFC(text)}
            value={cpfC}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="CPF/CNPJ"
          />
          <TextInput
            style={ styles.input }
            onChangeText={text => setEmailC(text)}
            value={emailC}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Email"
          />
          <TextInput
            style={ styles.input }
            onChangeText={text => setPasswordC(text)}
            value={passwordC}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
            placeholder="Senha"
          /> */}
          <View style={styles.containerButton}>
            <TouchableOpacity
              style={ styles.btnSubmit}
              onPress={ () => {
                formRef.current.submitForm();
              } }
            >
              <Text style={styles.submitText}>Avançar</Text>
            </TouchableOpacity>
          </View>
        </Form>
      </View>
    </View>
  );
}
function Step02(){
  const { number, step02 } = useContext(RegisterContext);

  const [numberC, setNumberC] = useState('');

  function handleStep02(){
    step02(numberC);
    console.log("handleStepo1");
  }
  return(
    <View style={styles.containerSignUp}>
      <View style={styles.containerTextHeader}>
        <Text style={styles.textHeader}>Insira um número de telefone válido. Será enviado um código para confirmação</Text>
      </View>
      <View style={styles.containerInputs}>
        <TextInput
          style={ styles.input }
          onChangeText={text => setNumberC(text)}
          value={numberC}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Numero de telefone"
        />

        <View style={styles.containerButton}>
          <TouchableOpacity
            style={ styles.btnSubmit}
            onPress={ handleStep02 }
          >
            <Text style={styles.submitText}>Avançar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}


function SignUp({ navigation }) {


    return (
      <RegisterProvider>
        <Step01 />
      </RegisterProvider>
    )

}

export default SignUp;
