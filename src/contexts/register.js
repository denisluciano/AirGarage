import React, { createContext, useState, useEffect } from 'react';
import { set } from 'react-native-reanimated';
// import AsyncStorage from '@react-native-community/async-storage';
// import api from '../services/api';

const RegisterContext = createContext(null);

export const RegisterProvider: () => React$Node = ({ children }) => {

  const [name, setName] =  useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [number, setNumber] = useState('');
  const [step, setStep] = useState('');

  function step01(name,cpf, email, password) {
    setName(name);
    setCpf(cpf);
    setEmail(email);
    setPassword(password);

    console.log("setou resto e password:");
    console.log(password);

    setStep(2);
  }
  function step02(number) {
    setNumber(number);

    console.log("numero de celular add no contexto:");
    console.log(number);
  }

  return (
    <RegisterContext.Provider value={{name, cpf, email, number, password, step, step01, step02}}>
      {children}
    </RegisterContext.Provider>
  );
};

export default RegisterContext;
