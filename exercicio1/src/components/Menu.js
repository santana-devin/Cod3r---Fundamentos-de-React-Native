import react from 'react';
import {createDrawerNavigator} from 'react-navigation';

import Simples from './Simples';
import ParImpar from './ParImpar';
import {Inverter, MegaSena} from './Multi';
import Contador from './Contador';
import PlatForm from './PlatForm';
import ValidarProps from './ValidarProps';
import Vo from './ComunicacaoDireta';
import TextoSincronizado from './ComunicacaoIndireta';

export default createDrawerNavigator(
  {
    TextoSincronizado: {
      screen: TextoSincronizado,
    },
    Vo: () => <Vo nome="João" sobrenome="Silva" />,
    ValidarProps: <ValidarProps ano={34} />,
    PlatForm: PlatForm,
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
