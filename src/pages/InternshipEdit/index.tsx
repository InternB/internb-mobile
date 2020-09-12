import React from 'react';

import { Container, Body, OutOfBoundsFill } from './styles';

import Navbar from '../../components/Navbar';
import Header from '../../components/Header';
import InternshipEditTabs from '../../components/InternshipEditTabs';

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  navigation: any;
}

const InternshipEdit: React.FC<Props> = ({ navigation }) => {
  return (
    <>
      <OutOfBoundsFill />
      <Container>
        <Header navigation={navigation} title="Editar Estágio" showArrow />
        <InternshipEditTabs title="Turma X" />
        <Body />
        <Navbar currentTab={2} navigation={navigation} />
      </Container>
    </>
  );
};

export default InternshipEdit;
