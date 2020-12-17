import styled from 'styled-components/native';

interface Props {
  hide?: boolean;
}

export const LoadingIndicator = styled.ActivityIndicator<Props>`
  display: ${(props) => (props.hide ? 'none' : 'flex')};
`;

export const Avatar = styled.Image<Props>`
  display: ${(props) => (props.hide ? 'none' : 'flex')};
  margin-top: 35px;
  margin-bottom: 5px;
  width: 120px;
  height: 120px;
  border-radius: 100px;
`;

export const EditButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 0;
  width: 120px;
  height: 30px;
  background-color: #8789d5aa;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonLabel = styled.Text`
  color: #404040;
`;
