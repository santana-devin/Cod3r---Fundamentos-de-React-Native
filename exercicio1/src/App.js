import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Simples from './components/Simples';
import ParImpar from './components/ParImpar';

export default class App extends Component {
  render() {
    return (
      <View>
        <Simples texto="Simples!" />
        <ParImpar numero={30} />
      </View>
    );
  }
}
