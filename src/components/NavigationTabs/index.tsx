import React, { useEffect, useState } from 'react';
import { Container, Tab, TabTitle, TabsArea, Title, TitleArea } from './styles';

interface Props {
  title?: string;
  showTitle?: boolean;
  tabs: string[];
  tabSelection: boolean[];
  setTabSelection: React.Dispatch<React.SetStateAction<boolean[]>>;
}

const InternshipEditTabs: React.FC<Props> = ({
  title = 'Título',
  showTitle = true,
  tabs,
  tabSelection,
  setTabSelection,
}) => {
  const [tabsJSX, setTabsJSX] = useState<JSX.Element[]>([]);
  useEffect(() => {
    const tabsAux = [];
    for (let i = 0; i < tabs.length; i += 1) {
      tabsAux.push(
        <Tab
          isActive={tabSelection[i]}
          onPress={() => {
            const aux = [];
            for (let j = 0; j < tabSelection.length; j += 1) {
              aux.push(false);
            }
            aux[i] = true;
            setTabSelection(aux);
          }}
        >
          <TabTitle isActive={tabSelection[i]}>{tabs[i]}</TabTitle>
        </Tab>,
      );
    }
    setTabsJSX(tabsAux);
  }, [setTabSelection, tabSelection, tabs]);

  return (
    <>
      <Container>
        <TitleArea showTitle={showTitle}>
          <Title>{title}</Title>
        </TitleArea>
        <TabsArea>{tabsJSX}</TabsArea>
      </Container>
    </>
  );
};

export default InternshipEditTabs;
