import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled(RectButton)`
  width: 280px;
  height: 70px;
  background: #2526a5;
  border-radius: 14px;

  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #f5f5f5;
  font-size: 18px;
  font-weight: 300;
`;
