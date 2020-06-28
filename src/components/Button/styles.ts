import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

interface ButtonProps {
  disabled: boolean;
}

export const Container = styled(RectButton)`
  width: 100%;
  height: 60px;
  background: #c5c5c5;
  border-radius: 10px;
  margin-top: 8px;

  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #333;
  font-size: 18px;
  margin-right: 10px;
`;
