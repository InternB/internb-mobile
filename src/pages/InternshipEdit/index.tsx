import React, { useState, useEffect } from 'react';
import { RadioButton } from 'react-native-paper';
import { Text } from 'react-native';

import {
  Container,
  Body,
  OutOfBoundsFill,
  SelectionInputsContainer,
  Row,
  TextLink,
  TextButton,
  BiggerContainer,
} from './styles';

import Navbar from '../../components/Navbar';
import Header from '../../components/Header';
import NavigationTabs from '../../components/NavigationTabs';
import InputSelection from '../../components/InputSelection';
import RadioInput from '../../components/InputRadio';
import Input from '../../components/Input';
import { SubSectionTitle } from '../../components/Texts';
import ActionButton from '../../components/ActionButton';
import Table from '../../components/Table';

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  navigation: any;
}

const classrooms = [
  { name: 'Turma X', value: 0 },
  { name: 'Turma Y', value: 1 },
  { name: 'Turma W', value: 2 },
  { name: 'Turma Z', value: 3 },
];

const pairs = [
  { name: 'Fulano', value: 4 },
  { name: 'Beutrano', value: 6 },
];

const others = [
  { name: '', value: 7 },
  { name: 'PIBIC', value: 8 },
  { name: 'Monitoria', value: 9 },
];

const schools = [
  { name: 'Sigma', value: 10 },
  { name: 'Marista', value: 11 },
  { name: 'Colégio Militar', value: 12 },
  { name: 'Santo Antônio', value: 13 },
];

const preceptors = [
  { name: 'Henrique', value: 14 },
  { name: 'Antônio', value: 15 },
  { name: 'Jorge', value: 16 },
  { name: 'Edna', value: 17 },
  { name: 'Mariana', value: 18 },
  { name: 'Roberto', value: 19 },
];

const InternshipEdit: React.FC<Props> = ({ navigation }) => {
  // Layout variables
  const tabs = [
    'Informações de estágio',
    'Grade Horária',
    'Plano de Trabalho',
    'Registro',
  ];
  const [tabSelection, setTabSelection] = useState([true, false, false, false]);
  const [
    selectionInputsDisabledStatus,
    setSelectionInputDisabledStatus,
  ] = useState([true, true]);
  const [tabContent, setTabContent] = useState(<></>);

  // selection inputs variables
  const [classroomIndex, setClassroomIndex] = useState(0);
  const [pairIndex, setPairIndex] = useState(0);
  const [otherIndex, setOtherIndex] = useState(0);
  const [schoolIndex, setSchoolIndex] = useState(0);
  const [preceptorIndex, setPreceptorIndex] = useState(0);

  // data values variables
  const [internshipType, setInternshipType] = useState('individual');
  const [internshipStart, setInternshipStart] = useState('');
  const [internshipEnd, setInternshipEnd] = useState('');
  const [monday, setMonday] = useState('');
  const [tuesday, setTuesday] = useState('');
  const [wednesday, setWednesday] = useState('');
  const [thursday, setThursday] = useState('');
  const [friday, setFriday] = useState('');
  const [saturday, setSaturday] = useState('');
  const [sunday, setSunday] = useState('');

  // disable selection inputs accordingly
  useEffect(() => {
    if (internshipType === 'outros') {
      setSelectionInputDisabledStatus([true, false]);
    } else if (internshipType === 'dupla') {
      setSelectionInputDisabledStatus([false, true]);
    } else {
      setSelectionInputDisabledStatus([true, true]);
    }
  }, [internshipType]);

  // render the correct tab content
  useEffect(() => {
    // informações de estágio
    if (tabSelection[0]) {
      setTabContent(
        <>
          <SelectionInputsContainer>
            <SubSectionTitle>Selecione sua turma</SubSectionTitle>
            <InputSelection
              itemsList={classrooms}
              index={classroomIndex}
              setIndex={setClassroomIndex}
            />
          </SelectionInputsContainer>
          <SelectionInputsContainer>
            <RadioButton.Group
              onValueChange={(value) => setInternshipType(value)}
              value={internshipType}
            >
              <SubSectionTitle>Tipo de estágio</SubSectionTitle>
              <RadioInput value="individual">Individual</RadioInput>
              <RadioInput value="dupla">Dupla</RadioInput>
              <InputSelection
                disabled={selectionInputsDisabledStatus[0]}
                itemsList={pairs}
                index={pairIndex}
                setIndex={setPairIndex}
              />
              <RadioInput value="outros">Outros</RadioInput>
              <InputSelection
                disabled={selectionInputsDisabledStatus[1]}
                itemsList={others}
                index={otherIndex}
                setIndex={setOtherIndex}
              />
            </RadioButton.Group>
          </SelectionInputsContainer>
          <Row>
            <SelectionInputsContainer>
              <SubSectionTitle>Selecione sua escola</SubSectionTitle>
              <InputSelection
                itemsList={schools}
                index={schoolIndex}
                setIndex={setSchoolIndex}
              />
            </SelectionInputsContainer>
            <TextButton>
              <TextLink>Não achei minha escola</TextLink>
            </TextButton>
          </Row>
          <Row>
            <SelectionInputsContainer>
              <SubSectionTitle>Professor Preceptor</SubSectionTitle>
              <InputSelection
                itemsList={preceptors}
                index={preceptorIndex}
                setIndex={setPreceptorIndex}
              />
            </SelectionInputsContainer>
            <TextButton>
              <TextLink>Não achei meu professor</TextLink>
            </TextButton>
          </Row>
          <ActionButton>Enviar</ActionButton>
        </>,
      );
      // grade horária
    } else if (tabSelection[1]) {
      setTabContent(
        <>
          <SelectionInputsContainer>
            <SubSectionTitle>Previsão de duração de estágio</SubSectionTitle>
            <Input
              label="Início do estágio"
              value={internshipStart}
              onChangeText={(value: string) => {
                setInternshipStart(value);
              }}
            />
            <Input
              label="Fim do estágio"
              value={internshipEnd}
              onChangeText={(value: string) => {
                setInternshipEnd(value);
              }}
            />
          </SelectionInputsContainer>
          <SelectionInputsContainer>
            <SubSectionTitle>Horário do estágio</SubSectionTitle>
            <Input
              label="Segunda"
              value={monday}
              onChangeText={(value: string) => {
                setMonday(value);
              }}
            />
            <Input
              label="Terça"
              value={tuesday}
              onChangeText={(value: string) => {
                setTuesday(value);
              }}
            />
            <Input
              label="Quarta"
              value={wednesday}
              onChangeText={(value: string) => {
                setWednesday(value);
              }}
            />
            <Input
              label="Quinta"
              value={thursday}
              onChangeText={(value: string) => {
                setThursday(value);
              }}
            />
            <Input
              label="Sexta"
              value={friday}
              onChangeText={(value: string) => {
                setFriday(value);
              }}
            />
            <Input
              label="Sábado"
              value={saturday}
              onChangeText={(value: string) => {
                setSaturday(value);
              }}
            />
            <Input
              label="Domingo"
              value={sunday}
              onChangeText={(value: string) => {
                setSunday(value);
              }}
            />
          </SelectionInputsContainer>
          <ActionButton>Enviar</ActionButton>
        </>,
      );
      // plano de trabalho
    } else if (tabSelection[2]) {
      setTabContent(
        <>
          <Text>Plano de trabalho</Text>
        </>,
      );
      // registro
    } else {
      setTabContent(
        <>
          <SelectionInputsContainer>
            <Input label="Data" />
            <Input label="Horário" />
            <Input label="Turma" />
          </SelectionInputsContainer>
          <BiggerContainer>
            <Input label="Atividades" multiline textAlignVertical="top" />
          </BiggerContainer>

          <ActionButton>Enviar</ActionButton>

          <BiggerContainer>
            <Table data={[{}, {}, {}, {}, {}, {}, {}, {}]} />
          </BiggerContainer>
        </>,
      );
    }
  }, [
    tabSelection,
    classroomIndex,
    internshipType,
    selectionInputsDisabledStatus,
    pairIndex,
    otherIndex,
    schoolIndex,
    preceptorIndex,
    internshipStart,
    internshipEnd,
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday,
    sunday,
  ]);

  return (
    <>
      <OutOfBoundsFill />
      <Container>
        <Header navigation={navigation} title="Editar Estágio" showArrow />
        <NavigationTabs
          tabs={tabs}
          title={classrooms[classroomIndex].name}
          tabSelection={tabSelection}
          setTabSelection={setTabSelection}
        />
        <Body>
          {tabContent}
          <SelectionInputsContainer style={{ paddingBottom: 30 }} />
        </Body>
        <Navbar currentTab={2} navigation={navigation} />
      </Container>
    </>
  );
};

export default InternshipEdit;
