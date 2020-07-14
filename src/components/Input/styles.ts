import styled, { css } from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled.View<InputProps>`
  width: 100%;
  height: 50px;
  padding: 0 16px;
  background: #c5c5c5;
  border-radius: 10px;
  margin-bottom: 8px;
  flex-direction: row;
  align-items: center;
  border-width: 2px;
  border-color: #333;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  font-size: 16px;
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 10px;
`;
