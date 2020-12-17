import styled from 'styled-components/native';

interface TabProps {
  isActive: boolean;
}

export const Container = styled.View`
  align-self: flex-start;
  width: 100%;
  flex-direction: column;
`;

export const TitleArea = styled.View<{ showTitle?: boolean }>`
  display: ${(props) => (props.showTitle === false ? 'none' : 'flex')};
  width: 100%;
  height: 30px;
  background-color: #1c1e83;
  justify-content: center;
  align-items: center;
  border-top-width: 2px;
  border-top-color: #4d4bae;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #ffffff;
  font-weight: 500;
`;

export const TabsArea = styled.ScrollView.attrs(() => ({
  horizontal: true,
  bounces: false,
  contentContainerStyle: { flexGrow: 1 },
  showsHorizontalScrollIndicator: false,
}))`
  border-style: solid;
  border-bottom-width: 2px;
  border-color: #4d4bae;
`;

export const Tab = styled.TouchableOpacity<TabProps>`
  flex: 1;
  min-width: 90px;
  max-width: 160px;
  border-style: solid;
  border-top-width: 2px;
  border-bottom-width: 0px;
  border-right-width: 1px;
  border-color: #4d4bae;
  justify-content: center;
  align-items: center;
  padding: 15px 8px;
  background-color: ${(props) =>
    props.isActive === true ? '#1c1e83' : 'transparent'};
`;

export const TabTitle = styled.Text<TabProps>`
  font-size: 12px;
  color: ${(props) => (props.isActive === true ? '#ffffff' : '#4d4bae')};
  font-weight: 500;
`;
