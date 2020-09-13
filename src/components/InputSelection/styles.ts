import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const Border = styled.View`
  border-width: 2px;
  border-color: #4d4bae;
  border-style: solid;
  width: 100%;
  height: 50px;
  background: white;
  border-radius: 10px;
  margin-bottom: 10px;
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

export const ContentText = styled.Text`
  font-size: 16px;
  color: #000000;
`;

export const ListBackground = styled.ScrollView<{ expanded: boolean }>`
  display: ${(props) => (props.expanded === true ? 'flex' : 'none')};
  position: relative;
  width: 90%;
  align-self: center;
  max-height: 200px;
  background-color: #ffffff;
  margin-top: -11px;
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
`;

export const IconContainer = styled.TouchableOpacity`
  flex: 1;
  border-left-width: 2px;
  border-left-color: #4d4bae;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled(FeatherIcon)`
  color: #4d4bae;
`;
