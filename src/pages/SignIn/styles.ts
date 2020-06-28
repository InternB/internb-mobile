import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  padding: 0 30px;
  background: #f5f5f5;

  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #333;
  margin: 64px 0 24px;
`;

export const Form = styled.View``;

export const ForgotPassword = styled.TouchableOpacity`
  margin-top: 20px;
`;

export const ForgotPasswordText = styled.Text`
  font-size: 16px;
  font-weight: 700;
`;

export const CreateAccountButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;

  background: #c5c5c5;
  flex-direction: row;
  align-self: flex-end;
  align-items: center;
  justify-content: center;

  border-top-width: 2px;
  border-top-color: #333;
  padding: 16px 0 ${16 + getBottomSpace()}px;
`;

export const CreateAccountButtonText = styled.Text`
  font-size: 18px;
  margin-left: 15px;
`;
