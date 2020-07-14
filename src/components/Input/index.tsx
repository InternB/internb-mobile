import React from 'react';
import { TextInputProps } from 'react-native';

import { Container, TextInput, Icon } from './styles';

interface InputProps extends TextInputProps {
  // name: string;
  icon?: string;
  containerStyle?: {};
}

const Input: React.FC<InputProps> = ({ icon, containerStyle, ...rest }) => {
  return (
    <Container style={containerStyle}>
      <TextInput {...rest} />

      {icon && <Icon name={icon} size={20} color="#333" />}
    </Container>
  );
};

export default Input;
