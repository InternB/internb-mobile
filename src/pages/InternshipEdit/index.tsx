import React from 'react';

import { Container, Body, OutOfBoundsFill } from './styles';

import Navbar from '../../components/Navbar';
import Header from '../../components/Header';
import InternshipEditTabs from '../../components/InternshipEditTabs';
import InputSelection from '../../components/InputSelection';

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  navigation: any;
}

const turmas = [
  { name: 'Turma X', value: 0 },
  { name: 'Turma Y', value: 1 },
  { name: 'Turma W', value: 2 },
  { name: 'Turma Z', value: 3 },
];

const InternshipEdit: React.FC<Props> = ({ navigation }) => {
  return (
    <>
      <OutOfBoundsFill />
      <Container>
        <Header navigation={navigation} title="Editar Estágio" showArrow />
        <InternshipEditTabs title="Turma X" />
        <Body>
          <InputSelection itemsList={turmas} startingSelectedValueIndex={0} />
        </Body>
        <Navbar currentTab={2} navigation={navigation} />
      </Container>
    </>
  );
};

export default InternshipEdit;
