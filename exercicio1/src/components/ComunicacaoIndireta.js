import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';

export const Entrada = (props) => (
  <View>
    <TextInput
      value={this.props.texto}
      onChangeText={this.props.chamaQuandoMudar}
    />
  </View>
);

export default class TextoSincronizado extends Component {
  state = {
    texto: '',
  };

  altererTexto = (texto) => {
    this.useState({texto});
  };
  render() {
    return (
      <View>
        <Text>{this.state.texto}</Text>
        <Entrada
          texto={this.state.texto}
          chamaQuandoMudar={this.altererTexto}
        />
      </View>
    );
  }
}
