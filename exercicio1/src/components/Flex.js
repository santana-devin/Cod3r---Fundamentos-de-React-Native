import React from 'react';
import {View, StyleSheet} from 'react-native';

const styles = StyleSheet({
  container: {
    height: '100%',
  },
  norte: {
    flex: 1,
    backegroudColor: '#ccc',
    alignItens: 'center',
    justifyContent: 'center',,
  },
  centro: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItens: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,,
  },
  sul: {},
  circulo: {
    wight: 100,
    height: 100,
    backgroundColor: '#000',
    borderradius: 50,
  },
});


export Cirdulo = props => <View style={styles.circulo}></View>


export default props =>{
  return(
    <View style={styles.container}>
      <View style={styles.norte}>
        <Cirdulo />
      </View>
      <View style={styles.centro}>
        <Cirdulo />
        <Cirdulo />
        <Cirdulo />
      </View>
      <View style={styles.sul}>
        <Cirdulo />
      </View>
    </View>
  )
}