import React from 'react';
import { ActivityIndicator } from 'react-native';
import { RectButtonProperties } from 'react-native-gesture-handler';

import { Container, ButtonText } from './styles';

interface ButtonProps extends RectButtonProperties {
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  isLoading = false,
  ...rest
}) => {
  return (
    <Container {...rest} enabled={isLoading}>
      <ButtonText>{children}</ButtonText>
      {!isLoading && <ActivityIndicator />}
    </Container>
  );
};

export default Button;
