/* eslint-disable no-await-in-loop */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { ActivityIndicator } from 'react-native';
import api from '../../services/api';

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
import ImagesComponent from '../../components/ImagesComponent';
import { SubSectionTitle } from '../../components/Texts';

interface Props {
  navigation: any;
}

interface InternshipData {
  classroom: string;
  type: string;
  school: {
    name: string;
    cep: string;
    address: string;
    phone: string;
    mail: string;
  };
  professor: {
    name: string;
    mail: string;
    phone: string;
  };
  start: string;
  end: string;
  schedule: {
    monday: Array<boolean>;
    tuesday: Array<boolean>;
    wednesday: Array<boolean>;
    thursday: Array<boolean>;
    friday: Array<boolean>;
    saturday: Array<boolean>;
    sunday: Array<boolean>;
  };
}

const Internship: React.FC<Props> = ({ navigation }) => {
  // Layout variables
  const [tabs, setTabs] = useState<string[]>([]);
  const [tabSelection, setTabSelection] = useState<boolean[]>([]);
  const [tabIndex, setTabIndex] = useState<number>(0);
  const [loadingInternship, setLoadingInternship] = useState<boolean>(true);

  // data variables
  const [internships, setInternships] = useState<Array<InternshipData>>([
    {
      classroom: '',
      type: '',
      school: {
        name: '',
        cep: '',
        address: '',
        phone: '',
        mail: '',
      },
      professor: {
        name: '',
        mail: '',
        phone: '',
      },
      start: '',
      end: '',
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

  // get internships  **ainda falta os dados de escola e carga horaria e atividades e plano de ensino.
  const getInternships = async () => {
    setLoadingInternship(true);
    const auxInternship: InternshipData = {
      classroom: '',
      type: '',
      school: {
        name: '',
        cep: '',
        address: '',
        phone: '',
        mail: '',
      },
      professor: {
        name: '',
        mail: '',
        phone: '',
      },
      start: '',
      end: '',
      schedule: {
        monday: [false, false, false, false, false, false, false],
        tuesday: [false, false, false, false, false, false, false],
        wednesday: [false, false, false, false, false, false, false],
        thursday: [false, false, false, false, false, false, false],
        friday: [false, false, false, false, false, false, false],
        saturday: [false, false, false, false, false, false, false],
        sunday: [false, false, false, false, false, false, false],
      },
    };
    const auxInternshipsArray: Array<InternshipData> = [];

    AsyncStorage.getItem('@InternB:token').then(async (tk) => {
      const token = tk;
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      await api
        .get('/internships/student', config)
        .then(async (res) => {
          for (let i = 0; i < res.data.length; i += 1) {
            let name = '';
            let sign = '';
            // get nome disciplina
            await api.get('/disciplines', config).then((resp) => {
              for (let j = 0; j < resp.data.length; j += 1) {
                if (resp.data[j].id === res.data[i].class_discipline_id) {
                  name = resp.data[j].name;
                  break;
                }
              }
            });
            // get sign class
            await api.get('/classes/discipline', config).then((resp) => {
              for (let j = 0; j < resp.data.length; j += 1) {
                if (resp.data[j].id === res.data[i].class_id) {
                  sign = resp.data[j].sign;
                  break;
                }
              }
            });
            auxInternship.classroom = `${name} - ${sign}`;

            auxInternshipsArray.push(auxInternship);
          }
        })
        .then(() => {
          setInternships(auxInternshipsArray);
          setLoadingInternship(false);
        });
    });
  };

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

  // load tab content
  useEffect(() => {
    for (let i = 0; i < tabSelection.length; i += 1) {
      if (tabSelection[i] === true) {
        setTabIndex(i);
      }
    }
    // setTabContent(internships[tabIndex]);
  }, [tabIndex, tabSelection]);

  useEffect(() => {
    getInternships();
  }, []);

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
                <ContentText>{internships[tabIndex].type}</ContentText>
              </Row>
            </Section>
            <Section>
              <Row>
                <TitleText>Escola:</TitleText>
                <ContentText>{internships[tabIndex].school.name}</ContentText>
              </Row>
              <Row>
                <LabelText>CEP:</LabelText>
                <ContentText>{internships[tabIndex].school.cep}</ContentText>
              </Row>
              <Row>
                <LabelText>Endereço:</LabelText>
                <ContentText>
                  {internships[tabIndex].school.address}
                </ContentText>
              </Row>
              <Row>
                <LabelText>Telefone:</LabelText>
                <ContentText>{internships[tabIndex].school.phone}</ContentText>
              </Row>
              <Row>
                <LabelText>E-mail:</LabelText>
                <ContentText>{internships[tabIndex].school.mail}</ContentText>
              </Row>
            </Section>
            <Section>
              <Row>
                <TitleText>Professor Preceptor:</TitleText>
                <ContentText>
                  {internships[tabIndex].professor.name}
                </ContentText>
              </Row>
              <Row>
                <LabelText>E-mail:</LabelText>
                <ContentText>
                  {internships[tabIndex].professor.mail}
                </ContentText>
              </Row>
              <Row>
                <LabelText>Telefone:</LabelText>
                <ContentText>
                  {internships[tabIndex].professor.phone}
                </ContentText>
              </Row>
            </Section>
            <Section>
              <Row>
                <Row>
                  <TitleText>Início do estágio:</TitleText>
                  <LabelText>{internships[tabIndex].start}</LabelText>
                </Row>
                <Row>
                  <TitleText>Fim do estágio:</TitleText>
                  <LabelText>{internships[tabIndex].end}</LabelText>
                </Row>
              </Row>
            </Section>
            <Section></Section>
            <Section>
              <SubSectionTitle>Imagens</SubSectionTitle>
              <ImagesComponent data={[0, 0, 0, 0, 0]} />
            </Section>
            <Section>
              <SubSectionTitle>Plano de Aula</SubSectionTitle>
              {/* Plano de aula component */}
            </Section>
            <Section>
              <SubSectionTitle>Registro de Atividades</SubSectionTitle>
              <Table
                data={[{}, {}, {}, {}, {}, {}]}
                showHeader={false}
                isClickable
              />
            </Section>
          </BiggerContainer>
        </Body>
        <Navbar currentTab={0} navigation={navigation} />
      </Container>
    </>
  );
};

export default Internship;
