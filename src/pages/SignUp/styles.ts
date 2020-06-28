import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 0 30px;
  background: #f5f5f5;

  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  width: 100px;
  height: 100px;
  margin: 50px 0;
`;

export const Form = styled.View`
  width: 100%;
  align-items: center;
`;

export const RadioContainer = styled.View`
  width: 100%;
  margin: 25px 0;
`;

export const RadioTitle = styled.Text`
  font-size: 21px;
  font-weight: 700;
  margin-bottom: 15px;
`;

export const RadioContent = styled.View`
  width: 100%;
`;

export const BackButton = styled.TouchableOpacity`
  width: 100%;
  margin-top: 30px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const BackButtonText = styled.Text`
  font-size: 16px;
  margin-left: 15px;
`;
