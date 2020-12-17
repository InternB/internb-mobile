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
    justifyContent: 'center',
    flexGrow: 1,
  },
}))`
  width: 100%;
  display: flex;
`;

export const ProfileArea = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 2;
  align-items: center;
  justify-content: center;
  margin: 20px;
`;

export const NameText = styled.Text`
  color: #2526a5;
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  margin: 3px;
`;

export const InfoText = styled.Text`
  color: #2526a5;
  font-size: 18px;
  font-weight: 300;
  text-align: center;
  margin: 1px;
`;

export const ButtonsArea = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 3;
  align-items: center;
  justify-content: space-evenly;
`;
