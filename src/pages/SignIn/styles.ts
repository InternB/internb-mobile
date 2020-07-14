import styled from 'styled-components/native';

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

export const Form = styled.View`
  width: 100%;
`;

export const ForgotPassword = styled.TouchableOpacity`
  margin-top: 20px;
`;

export const ForgotPasswordText = styled.Text`
  font-size: 16px;
  font-weight: 700;
`;

export const OrText = styled.Text`
  margin: 15px 0;
  font-size: 16px;
`;

export const CreateAccountButton = styled.TouchableOpacity`
  flex-direction: row;
`;

export const CreateAccountButtonText = styled.Text`
  font-size: 16px;
  font-weight: 700;
  margin-right: 15px;
`;
