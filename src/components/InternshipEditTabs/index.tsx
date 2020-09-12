import React, { useState } from 'react';
import { Container, Tab, TabTitle, TabsArea, Title, TitleArea } from './styles';

interface Props {
  title: string;
}

const InternshipEditTabs: React.FC<Props> = ({ title = 'Título' }) => {
  const [tabSelection, setTabSelection] = useState([true, false, false, false]);

  return (
    <>
      <Container>
        <TitleArea>
          <Title>{title}</Title>
        </TitleArea>
        <TabsArea>
          <Tab
            isActive={tabSelection[0]}
            onPress={() => {
              setTabSelection([true, false, false, false]);
            }}
          >
            <TabTitle isActive={tabSelection[0]}>
              Informações de estágio
            </TabTitle>
          </Tab>
          <Tab
            isActive={tabSelection[1]}
            onPress={() => {
              setTabSelection([false, true, false, false]);
            }}
          >
            <TabTitle isActive={tabSelection[1]}>Grade Horária</TabTitle>
          </Tab>
          <Tab
            isActive={tabSelection[2]}
            onPress={() => {
              setTabSelection([false, false, true, false]);
            }}
          >
            <TabTitle isActive={tabSelection[2]}>Plano de Trabalho</TabTitle>
          </Tab>
          <Tab
            isActive={tabSelection[3]}
            onPress={() => {
              setTabSelection([false, false, false, true]);
            }}
          >
            <TabTitle isActive={tabSelection[3]}>Registro</TabTitle>
          </Tab>
        </TabsArea>
      </Container>
    </>
  );
};

export default InternshipEditTabs;
