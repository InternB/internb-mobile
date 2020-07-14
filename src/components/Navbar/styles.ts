import styled, { css } from 'styled-components/native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const Background = styled.View`
  height: 10%;
  width: 100%;
  border-top-color: #b6b6b6;
  border-top-width: 2px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const TabButton = styled.TouchableOpacity`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IconEntypo = styled(EntypoIcon)`
  ${(props) => {
    if (props.selected === true) {
      return css`
        font-size: 34px;
        color: #1c1e83;
      `;
    }
    return css`
      font-size: 22px;
      color: #b6b6b6;
    `;
  }}
`;
export const IconFeather = styled(FeatherIcon)`
  ${(props) => {
    if (props.selected === true) {
      return css`
        font-size: 34px;
        color: #1c1e83;
      `;
    }
    return css`
      font-size: 22px;
      color: #b6b6b6;
    `;
  }}
`;
