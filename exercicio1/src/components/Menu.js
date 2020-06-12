import react from 'react';
import {createDrawerNavigator} from 'react-navigation';

import Simples from './Simples';
import ParImpar from './ParImpar';
import {Inverter, MegaSena} from './Multi';
import Contador from './Contador';
export default createDrawerNavigator(
  {
    Contador: {
      screen: () => <Contador numeroInicial={100} />,
    },
    MegaSena: {
      screen: () => <MegaSena numeros={6} />,
      navigationOptions: {title: 'Mega Sena'},
    },
    Inverter: {
      screen: () => <Inverter texto="React Native" />,
    },
    ParImpar: {
      screen: () => <ParImpar numero={24} />,
      navidationOptions: {title: 'Par e Impar'},
    },
    Simples: {
      screen: () => <Simples texto="Simples!!!" />,
    },
  },
  {drawerWidth: 300},
);
