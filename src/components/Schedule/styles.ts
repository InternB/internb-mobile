import styled from 'styled-components/native';
import IconImport from 'react-native-vector-icons/Feather';

export const HeaderCell = styled.View`
  flex: 1;
  padding: 8px 3px;
  background-color: #1c1e83;
  border-color: #4d4bae;
  border-width: 1px;
  border-style: solid;
`;

export const HeaderText = styled.Text`
  color: #ffffff;
  font-weight: 400;
  font-size: 12px;
  text-align: center;
`;

export const Cell = styled.View<{ colorIndex: number; isSelected?: boolean }>`
  flex: 1;
  height: 30px;
  background-color: ${(props) =>
    props.colorIndex % 2 === 0 ? '#ffffff' : '#e7e2ff'};
  border-color: #4d4bae;
  border-width: 1px;
  border-style: solid;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled(IconImport)<{ isSelected?: boolean }>`
  display: ${(props) => (props.isSelected === true ? 'flex' : 'none')};
  font-size: 18px;
`;

export const CellText = styled.Text`
  color: #999999;
  font-weight: 400;
  font-size: 10px;
  text-align: center;
`;

export const Row = styled.View`
  flex-direction: row;
  width: 100%;
`;
