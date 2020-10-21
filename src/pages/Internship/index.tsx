import React, { useState, useEffect } from 'react';

import {
  Container,
  Body,
  OutOfBoundsFill,
  BiggerContainer,
  ContentText,
  LabelText,
  Row,
  Section,
  TitleText,
} from './styles';

import Navbar from '../../components/Navbar';
import Header from '../../components/Header';
import NavigationTabs from '../../components/NavigationTabs';
import Table from '../../components/Table';
import Schedule from '../../components/Schedule';
import { SubSectionTitle } from '../../components/Texts';

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
      schedule: {
        monday: [false, false, true, true, true, false, false],
        tuesday: [false, true, true, true, false, false, false],
        wednesday: [false, false, true, true, true, false, false],
        thursday: [false, true, true, true, false, false, false],
        friday: [false, false, true, true, true, false, false],
        saturday: [false, false, false, false, false, false, false],
        sunday: [false, false, false, false, false, false, false],
      },
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
      schedule: {
        monday: [false, false, false, false, false, false, false],
        tuesday: [false, false, false, false, false, false, false],
        wednesday: [false, false, false, false, false, false, false],
        thursday: [false, false, false, false, false, false, false],
        friday: [false, false, false, false, false, false, false],
        saturday: [false, false, false, false, false, false, false],
        sunday: [false, false, false, false, false, false, false],
      },
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
        <NavigationTabs
          tabs={tabs}
          showTitle={false}
          tabSelection={tabSelection}
          setTabSelection={setTabSelection}
        />
        <Body>
          <BiggerContainer>
            <Section>
              <Row>
                <TitleText>Discente:</TitleText>
                <ContentText>Nome_Completo_Aluno</ContentText>
              </Row>
              <Row>
                <Row>
                  <LabelText>CPF:</LabelText>
                  <ContentText>123456789_10</ContentText>
                </Row>
                <Row>
                  <LabelText>Matrícula:</LabelText>
                  <ContentText>20_0123456</ContentText>
                </Row>
              </Row>
              <Row>
                <LabelText>Telefone:</LabelText>
                <ContentText>123546789</ContentText>
              </Row>
              <Row>
                <LabelText>E-mail:</LabelText>
                <ContentText>aluno_aluno_com_br</ContentText>
              </Row>
              <Row>
                <LabelText>Código da Turma:</LabelText>
                <ContentText>12345</ContentText>
              </Row>
            </Section>
            <Section>
              <Row>
                <TitleText>Tipo de estágio:</TitleText>
                <ContentText>{internships[0].type}</ContentText>
              </Row>
            </Section>
            <Section>
              <Row>
                <TitleText>Escola:</TitleText>
                <ContentText>{internships[0].school.name}</ContentText>
              </Row>
              <Row>
                <LabelText>CEP:</LabelText>
                <ContentText>{internships[0].school.cep}</ContentText>
              </Row>
              <Row>
                <LabelText>Endereço:</LabelText>
                <ContentText>{internships[0].school.address}</ContentText>
              </Row>
              <Row>
                <LabelText>Telefone:</LabelText>
                <ContentText>{internships[0].school.phone}</ContentText>
              </Row>
              <Row>
                <LabelText>E-mail:</LabelText>
                <ContentText>{internships[0].school.mail}</ContentText>
              </Row>
            </Section>
            <Section>
              <Row>
                <TitleText>Professor Preceptor:</TitleText>
                <ContentText>{internships[0].professor.name}</ContentText>
              </Row>
              <Row>
                <LabelText>E-mail:</LabelText>
                <ContentText>{internships[0].professor.mail}</ContentText>
              </Row>
              <Row>
                <LabelText>Telefone:</LabelText>
                <ContentText>{internships[0].professor.phone}</ContentText>
              </Row>
            </Section>
            <Section>
              <Row>
                <Row>
                  <TitleText>Início do estágio:</TitleText>
                  <LabelText>{internships[0].start}</LabelText>
                </Row>
                <Row>
                  <TitleText>Fim do estágio:</TitleText>
                  <LabelText>{internships[0].end}</LabelText>
                </Row>
              </Row>
            </Section>
            <Schedule data={internships[0].schedule} />
            <SubSectionTitle>Imagens</SubSectionTitle>
            {/* Imagens component */}
            <SubSectionTitle>Plano de Aula</SubSectionTitle>
            {/* Plano de aula component */}
            <SubSectionTitle>Registro de Atividades</SubSectionTitle>
            <Table
              data={[{}, {}, {}, {}, {}, {}]}
              showHeader={false}
              isClickable
            />
          </BiggerContainer>
        </Body>
        <Navbar currentTab={0} navigation={navigation} />
      </Container>
    </>
  );
};

export default Internship;
