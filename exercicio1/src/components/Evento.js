import react, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';

export default class Evento extends Component {
  state = {
    texto: '', // Texto Controlado
    //texto: null // Texto não controlado
  };

  alterarTexto = (texto) => {
    this.setState({texto});
  };

  render() {
    return (
      <View>
        <Text>{this.this.state.texto}</Text>
        <TextInput value={this.state.texto} onChangeText={this.alterarTexto} />
      </View>
    );
  }
}
