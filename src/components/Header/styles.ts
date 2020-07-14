import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';

export const Background = styled.View`
  height: 14%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #2526a5;
`;

export const Title = styled.Text`
  flex: 14;
  font-weight: bold;
  font-family: sans-serif;
  color: #f5f5f5;
  font-size: 29px;
  text-align: center;
`;

export const BackButton = styled.TouchableOpacity`
  display: ${(props) => (props.show === true ? 'flex' : 'none')};
  flex: 1;
`;

export const ArrowBack = styled(Icon)`
  color: #f5f5f5;
  font-size: 29px;
`;
