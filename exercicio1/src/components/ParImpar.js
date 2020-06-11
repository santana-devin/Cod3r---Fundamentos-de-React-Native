import React from 'react';
import {View, Text} from 'react-native';
import Styles from '../styles/standard';
import If from './If';

function ParOuImpar(num) {
  /*
  if(num % 2==0){
    return <Text style={Styles.ex}> Par</Text>
  }else{
    <Text style={Styles.ex}> Impar</Text>
  }
  */
  const v = num % 2 ? 'Par' : 'Impar';
  return <Text style={Styles.ex}>{v}</Text>;
}

export default (props) => {
  <View>
    <If test={props.numero % 2 == 0}>
      <Text style={Styles.ex}> Par</Text>
    </If>
    <If test={props.numero % 2 == 1}>
      <Text style={Styles.ex}> Par</Text>
    </If>

    {/*
    {ParOuImpar(props.numero)}
    {
      props.numero % 2 = 0
      ? <Text style={Styles.ex}> Par</Text>
      : <Text style={Styles.ex}>Impar</Text>
    }
    */}
  </View>;
};
