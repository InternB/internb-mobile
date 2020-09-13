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
  padding-top: 30px;
`;

export const SelectionInputsContainer = styled.View`
  width: 60%;
  align-self: flex-start;
  margin: 0px 0px 10px 25px;
`;
