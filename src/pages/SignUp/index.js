import React, { useRef } from 'react';
import { Button, View, Text,ScrollView, TouchableOpacity } from 'react-native';
import { Form } from '@unform/mobile';
import Input from '../../components/Input';

import styles from './style';


export default function SignIn() {
  const formRef = useRef(null);

  function handleSubmit(data) {
    console.log(data);
    // { email: 'test@example.com', password: '123456' }
  }
  return (
    <ScrollView style={styles.containerSignUp}>
      <View style={styles.containerTextHeader}>
        <Text style={styles.textHeader}>Informe seus dados para prosseguir no cadastro</Text>
      </View>
      <View >
        <Form
        ref={formRef}
        onSubmit={handleSubmit}
        style={styles.formCadastro}

        >
          <Input name="name" type="text"  placeholder="Nome completo"/>
          <Input name="cpf" type="text"  placeholder="CPF"/>
          <Input name="number" type="text"  placeholder="Celular"/>
          <Input name="email" type="email"  placeholder="Email"/>
          <Input name="password" type="password" secureTextEntry={true}  placeholder="Senha" />
          <Input name="password_again" type="password" secureTextEntry={true}  placeholder="Confirme a senha" />

          <View style={styles.containerButton}>
            <TouchableOpacity
              title="Sign in"
              style={ styles.btnSubmit}
              onPress={ () => {
                formRef.current.submitForm();
              } }
            >
              <Text style={styles.submitText}>Cadastrar-se</Text>
            </TouchableOpacity>
          </View>
        </Form>
      </View>
    </ScrollView>
  );
}
