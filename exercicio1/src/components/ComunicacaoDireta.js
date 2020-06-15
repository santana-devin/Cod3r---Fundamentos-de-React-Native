import React from 'react';
import {View, Text} from 'react-native';

const fonts = {style: {fontSize: 30}};

function filhosComProps(props) {
  return React.Children.map(props.Children, (c) =>
    React.cloneElement(c, {...props, ...c.props}),
  );
}

export const Filho = (props) => (
  <View>
    <Text {...fonts}>
      Filho: {props.nome} {props.sobrenome}
    </Text>
  </View>
);

export const Pai = (props) => (
  <View>
    <Text {...fonts}>
      Pai: {props.nome} {props.sobrenome}
    </Text>
    {/* {props.children}*/}
    {filhosComProps(props)}
  </View>
);

export const Vo = (props) => (
  <View>
    <Text {...fonts}>
      Vô: {props.nome} {props.sobrenome}
    </Text>
    <Pai nome="Andre" sobrenome={props.sobrenome}>
      <Filho nome="Ana"> </Filho>
      <Filho nome="Gui" />
      <Filho nome="Davi" />
    </Pai>
    <Pai {...props} nome="Pedro">
      <Filho nome="Rebeca"> </Filho>
      <Filho nome="Renato" />
    </Pai>
  </View>
);
