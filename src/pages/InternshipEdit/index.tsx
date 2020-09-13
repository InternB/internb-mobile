import React, { useState } from 'react';

import {
  Container,
  Body,
  OutOfBoundsFill,
  SelectionInputsContainer,
} from './styles';

import Navbar from '../../components/Navbar';
import Header from '../../components/Header';
import InternshipEditTabs from '../../components/InternshipEditTabs';
import InputSelection from '../../components/InputSelection';
import { SubSectionTitle } from '../../components/Texts';

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
  const [classroomIndex, setClassroomIndex] = useState(0);
  const [pairIndex, setPairIndex] = useState(0);
  const [otherIndex, setOtherIndex] = useState(0);
  const [schoolIndex, setSchoolIndex] = useState(0);
  const [preceptorIndex, setPreceptorIndex] = useState(0);
  return (
    <>
      <OutOfBoundsFill />
      <Container>
        <Header navigation={navigation} title="Editar Estágio" showArrow />
        <InternshipEditTabs title={classrooms[classroomIndex].name} />
        <Body>
          <SelectionInputsContainer>
            <SubSectionTitle>Selecione sua turma</SubSectionTitle>
            <InputSelection
              itemsList={classrooms}
              index={classroomIndex}
              setIndex={setClassroomIndex}
            />
          </SelectionInputsContainer>
          <SelectionInputsContainer>
            <SubSectionTitle>Tipo de estágio</SubSectionTitle>
            <InputSelection
              itemsList={pairs}
              index={pairIndex}
              setIndex={setPairIndex}
            />
            <InputSelection
              itemsList={others}
              index={otherIndex}
              setIndex={setOtherIndex}
            />
          </SelectionInputsContainer>
          <SelectionInputsContainer>
            <SubSectionTitle>Selecione sua escola</SubSectionTitle>
            <InputSelection
              itemsList={schools}
              index={schoolIndex}
              setIndex={setSchoolIndex}
            />
          </SelectionInputsContainer>
          <SelectionInputsContainer>
            <SubSectionTitle>Professor Preceptor</SubSectionTitle>
            <InputSelection
              itemsList={preceptors}
              index={preceptorIndex}
              setIndex={setPreceptorIndex}
            />
          </SelectionInputsContainer>
        </Body>
        <Navbar currentTab={2} navigation={navigation} />
      </Container>
    </>
  );
};

export default InternshipEdit;
