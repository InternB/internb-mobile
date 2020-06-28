import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

interface ButtonProps {
  disabled: boolean;
}

export const Container = styled(RectButton)`
  border-width: 2px;
  border-radius: 10px;
  background: #c5c5c5;

  height: 60px;
  margin-top: 10px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: #333;
  font-size: 18px;
`;
