import React from 'react';
import { RadioButton } from 'react-native-paper';

import { Container, RadioButtonText } from './styles';

interface RadioInputProps {
  value: string;
}

const FormRadioInput: React.FC<RadioInputProps> = ({ children, value }) => {
  return (
    <Container>
      <RadioButton value={value} />
      <RadioButtonText>{children}</RadioButtonText>
    </Container>
  );
};

export default FormRadioInput;
