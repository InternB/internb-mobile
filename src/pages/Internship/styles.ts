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

export const BiggerContainer = styled.View`
  width: 90%;
  align-self: flex-start;
  margin: 0px 20px 18px 20px;
`;

export const Section = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin: 8px 0;
`;

export const Row = styled.View`
  display: flex;
  flex-direction: row;
  margin: 0 4px 0 0;
  align-items: flex-end;
`;

export const TitleText = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: #000000;
  margin: 0px 6px 0px 0px;
`;

export const LabelText = styled.Text`
  font-size: 12px;
  font-weight: 400;
  color: #999999;
  margin: 0px 6px 0px 0px;
`;

export const ContentText = styled.Text`
  font-size: 12px;
  font-weight: 400;
  color: #1c1e83;
  margin: 0px 6px 0px 0px;
`;
