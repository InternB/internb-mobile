import React from 'react';
import { ActivityIndicator, TouchableOpacityProps } from 'react-native';

import { Container, ButtonText } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  isLoading = false,
  ...rest
}) => {
  return (
    <Container {...rest} disabled={isLoading}>
      <ButtonText>{children}</ButtonText>
      {isLoading && <ActivityIndicator />}
    </Container>
  );
};

export default Button;
