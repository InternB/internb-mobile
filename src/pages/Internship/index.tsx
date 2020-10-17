import React, { useState, useEffect } from 'react';

import { Container, Body, OutOfBoundsFill } from './styles';

import Navbar from '../../components/Navbar';
import Header from '../../components/Header';
import InternshipEditTabs from '../../components/NavigationTabs';

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  navigation: any;
}

const Internship: React.FC<Props> = ({ navigation }) => {
  // Layout variables
  const [tabs, setTabs] = useState<string[]>([]);
  const [tabSelection, setTabSelection] = useState<boolean[]>([]);

  // mocked up data variables (will be removed when connected to DB)
  const [internships] = useState([
    {
      classroom: 'Turma A',
      type: 'Individual',
      school: {
        name: 'Escola 1',
        cep: '72.475-010',
        address: 'SQS 912',
        phone: '(61) 9 1234-5678',
        mail: 'escola@escola.com',
      },
      professor: {
        name: 'Henrique',
        mail: 'henrique@escola.com',
        phone: '(61) 9 8765-4321',
      },
      start: '10/03/2020',
      end: '31/12/2020',
    },
    {
      classroom: 'Turma B',
      type: 'Dupla',
      school: {
        name: 'Escola 2',
        cep: '75.278-030',
        address: 'SQN 410',
        phone: '(61) 9 1234-5678',
        mail: 'escola@escola.com',
      },
      professor: {
        name: 'Bruno',
        mail: 'bruno@escola.com',
        phone: '(61) 9 8765-4321',
      },
      start: '12/04/2020',
      end: '31/12/2020',
    },
  ]);

  // populate tabs
  useEffect(() => {
    const tabSelectionAux: boolean[] = [];
    const tabsAux: string[] = [];
    for (let i = 0; i < internships.length; i += 1) {
      tabsAux.push(internships[i].classroom);
      tabSelectionAux.push(false);
    }
    tabSelectionAux[0] = true;

    setTabs(tabsAux);
    setTabSelection(tabSelectionAux);
  }, [internships]);

  return (
    <>
      <OutOfBoundsFill />
      <Container>
        <Header title="Estágio" />
        <Body>
          <InternshipEditTabs
            tabs={tabs}
            showTitle={false}
            tabSelection={tabSelection}
            setTabSelection={setTabSelection}
          />
        </Body>
        <Navbar currentTab={0} navigation={navigation} />
      </Container>
    </>
  );
};

export default Internship;
