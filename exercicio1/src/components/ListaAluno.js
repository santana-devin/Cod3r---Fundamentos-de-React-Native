import React from 'react';
import {ScrollView, View, Text, FlatList} from 'react-native';

const alunos = [
  {id: 1, nome: 'Fabrício', nota: 3.3},
  {id: 2, nome: 'Davi', nota: 3.3},
  {id: 3, nome: 'Ricardo', nota: 3.3},
  {id: 4, nome: 'Alessandra', nota: 3.3},
  {id: 5, nome: 'Pedro', nota: 3.3},
  {id: 6, nome: 'Felipe', nota: 3.3},
];

const itemStyle = {
  paddingHorizontal: 15,
  heght: 50,
  backgroundColor: '#DDD',
  borderWight: 0.5,
  borderColor: '#222',
};

export const Alunos = (props) => (
  <View style={itemStyle}>
    <Text>Nome: {props.nome}</Text>
    <Text style={{fontWeight: 'bold'}}>Nota: {props.nota}</Text>
  </View>
);

export default (props) => {
  const renderItens = ({item}) => {
    return <Alunos {...item} />;
  };

  return (
    <ScrollView>
      <FlatList
        data={alunos}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
      />
    </ScrollView>
  );
};
