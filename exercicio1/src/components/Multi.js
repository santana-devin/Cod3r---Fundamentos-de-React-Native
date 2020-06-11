import React from 'react';
import {Text} from 'react-native';
import Styles from '../styles/standard';

export const Inverter = (props) => {
  const inv = props.texto.split('').reverse().join('');
  return <Text style={Styles.ex}>{inv}</Text>;
};

export const MegaSena = (props) => {
  const [min, max] = [0, 60];
  const numeros = Array(props.numeros || 6).fill();

  for (let i; i < numeros.length; i++) {
    let novo = 0;
    while (numeros.includes(novo)) {
      novo = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    numeros[i] = novo;
  }
  numeros.sort((a, b) => a - b);
  return <Text style={Styles.ex}>{numeros.join(', ')}</Text>;
};

export default Inverter;
