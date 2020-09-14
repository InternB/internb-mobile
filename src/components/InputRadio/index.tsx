import React from 'react';
import { RadioButton } from 'react-native-paper';

import { Container, RadioButtonText } from './styles';

interface RadioInputProps {
  value: string;
  onPress?: (() => void) | undefined;
}

const FormRadioInput: React.FC<RadioInputProps> = ({
  children,
  value,
  onPress,
}) => {
  return (
    <Container>
      <RadioButton.Android
        value={value}
        onPress={onPress}
        color="#4d4bae"
        accessibilityStates
      />
      <RadioButtonText>{children}</RadioButtonText>
    </Container>
  );
};

export default FormRadioInput;
