import styled from 'styled-components/native';

// Em telas curvas e telas vazadas no topo (iphone x), preenche o espaço com cor
export const OutOfBoundsFill = styled.SafeAreaView`
  flex: 0;
  background-color: #2526a5;
`;

export const Container = styled.SafeAreaView`
  position: relative;
  flex: 1;
  background: #f5f5f5;
  align-items: center;
  justify-content: center;
`;

export const Body = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    alignItems: 'center',
  },
}))`
  width: 100%;
  display: flex;
  padding: 30px 0px;
`;

export const SelectionInputsContainer = styled.View`
  width: 55%;
  align-self: flex-start;
  min-height: 10px;
  margin: 0px 0px 15px 25px;
`;

export const Row = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: flex-start;
  align-items: flex-end;
`;

export const TextButton = styled.TouchableOpacity`
  flex-shrink: 1;
`;

export const TextLink = styled.Text`
  color: #333333;
  opacity: 0.6;
  text-decoration: underline;
  font-size: 12px;
  padding-bottom: 25px;
  padding-left: 15px;
`;
