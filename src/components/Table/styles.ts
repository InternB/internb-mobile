import styled from 'styled-components/native';

export const TableHeader = styled.View<{ showHeader?: boolean }>`
  width: 100%;
  padding: 10px 10px;
  background-color: #2526a5;
  display: ${(props) => (props.showHeader === true ? 'flex' : 'none')};
`;

export const TableTitle = styled.Text`
  font-size: 16px;
  font-weight: 400;
  color: #ffffff;
`;

export const TableContentText = styled.Text`
  font-size: 14px;
  font-weight: 400;
  color: #56557e;
`;

export const TableBody = styled.ScrollView.attrs(() => ({
  nestedScrollEnabled: true,
}))`
  width: 100%;
  max-height: 184px;
  border-width: 1px;
  border-color: #56557e;
  border-style: solid;
`;

export const TableRow = styled.View<{ index: number }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 8px 10px;
  border-bottom-width: 1px;
  border-color: #56557e;
  border-style: solid;
  background-color: ${(props) =>
    props.index % 2 === 0 ? '#ffffff' : '#e7e2ff'};
`;
