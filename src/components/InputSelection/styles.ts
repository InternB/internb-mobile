import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface Props {
  isDisabled?: boolean;
}

export const Border = styled.View<Props>`
  border-width: 2px;
  border-color: ${(props) =>
    props.isDisabled === true ? '#666666' : '#4d4bae'};
  border-style: solid;
  background-color: ${(props) =>
    props.isDisabled === true ? '#33333344' : '#ffffff'};
  width: 100%;
  height: 50px;
  border-radius: 10px;
  margin-top: 6px;
  margin-bottom: 8px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: flex-start;
`;

export const ContentField = styled.View`
  flex: 10;
  align-items: flex-start;
  justify-content: center;
  padding-left: 5px;
`;

export const ContentText = styled.Text<Props>`
  font-size: 16px;
  color: ${(props) => (props.isDisabled === true ? '#666666' : '#000000')};
`;

export const ListBackground = styled.ScrollView.attrs(() => ({
  nestedScrollEnabled: true,
}))<{ expanded: boolean }>`
  display: ${(props) => (props.expanded === true ? 'flex' : 'none')};
  position: relative;
  width: 90%;
  align-self: center;
  max-height: 200px;
  background-color: #ffffff;
  margin-top: -9px;
  margin-bottom: 10px;
  border-color: #4d4bae;
  border-width: 1px;
`;

export const ListItem = styled.TouchableOpacity<{ selected?: boolean }>`
  width: 100%;
  height: 40px;
  margin: 5px 10px;
  background-color: ${(props) =>
    props.selected === true ? '#56557e' : '#ffffff'};
  align-items: flex-start;
  justify-content: center;
  padding-left: 5px;
  border-top-width: 1px;
  border-top-color: #56557e;
`;

export const IconContainer = styled.TouchableOpacity<Props>`
  flex: 1;
  border-left-width: 2px;
  border-left-color: ${(props) =>
    props.isDisabled === true ? '#666666' : '#4d4bae'};
  align-items: center;
  justify-content: center;
`;

export const Icon = styled(FeatherIcon)<Props>`
  color: ${(props) => (props.isDisabled === true ? '#666666' : '#4d4bae')};
`;
