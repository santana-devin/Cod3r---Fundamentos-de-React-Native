import React from 'react';
import {View, Text} from 'react-native';

import Styles from './styles/standard';

export default props => <Text style={[Styles.ex,Styles.exFont} >Arrow:{props.texto}</Text>

/*
export default function(props){
  return <Text >{props.texto}</Text>
}

export default props => {
  return <Text >Arrow:{props.texto}</Text>
}
export default props => <Text >Arrow:{props.texto}</Text>

export default props =>
  <View>
    <Text >Arrow1:{props.texto}</Text>
    <Text >Arrow2:{props.texto}</Text>
  </View>

export default (props) =>
  <View>
    <Text>Arrow1:{props.texto}</Text>
    <Text>Arrow2:{props.texto}</Text>
  </View>


export default (props) => [
  <Text key={0}>Arrow1:{props.texto}</Text>,
  <Text key={1}>Arrow2:{props.texto}</Text>,
];
*/