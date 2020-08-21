import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled(RectButton)`
  padding: 6px 12px;
  background: #ffffff;
  border-color: #2526a5;
  border-style: solid;
  border-width: 3px;
  border-radius: 12px;

  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #333;
  font-size: 16px;
  font-weight: 600;
`;
