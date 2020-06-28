import React from 'react';

import { Container, ButtonText } from './styles';

interface Props {
  onPress: any;
  isLoading?: boolean;
}

const Button: React.FC<Props> = ({ children, onPress, isLoading = false }) => {
  // let buttonStyle = styles;

  // if (isLoading === true) {
  //   buttonStyle = disabledButton;
  // }

  return (
    <Container onPress={onPress}>
      <ButtonText>{children}</ButtonText>
    </Container>
  );
};

export default Button;
