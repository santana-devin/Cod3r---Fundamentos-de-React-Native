import react from 'react';
import PropTypes from 'prop-types';
import {Text} from 'react-native';

const ValidarProps = (props) => (
  <Text style={{fontSize: 30}}>
    {props.label || 'Ano: '}
    {props.ano + 2000}
  </Text>
);

ValidarProps.defaultProps = {
  label: 'Ano: ',
};

ValidarProps.PropTypes = {
  ano: PropTypes.number.isRequired,
};

export default ValidarProps;
