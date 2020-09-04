import styled from 'styled-components/native';
// styled-components não suporta scroll view... tem q gambiarrar.. grr
// https://github.com/styled-components/styled-components/issues/785

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

export const FixedArea = styled.View`
  width: 80%;
  height: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ScrollArea = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    alignItems: 'center',
    // justifyContent: 'center',
  },
}))`
  width: 100%;
  display: flex;
`;
