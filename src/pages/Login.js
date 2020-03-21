import React from 'react';
import { Button, StyleSheet, TextInput  } from 'react-native';

function Login() {
  const [email, onChangeEmail] = React.useState('');
  const [senha, onChangeText] = React.useState('');
  return(
    <>
      <TextInput
        style={style.buttonLogin}
        onChangeText={text => onChangeEmail(text)}
        value={email}
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => onChangeText(text)}
        value={senha}
      />
      <Button
        title="Login"
      />
    </>
  )
}

const styles = StyleSheet.create({
  buttonLogin: {
    d: ""
  },
});

export default Login;
