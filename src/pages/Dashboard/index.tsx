import React from 'react';

import { Text } from 'react-native';

import { Container, Body, OutOfBoundsFill } from './styles';

import Navbar from '../../components/Navbar';
import Header from '../../components/Header';

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  navigation: any;
}

const Dashboard: React.FC<Props> = ({ navigation }) => {
  return (
    <>
      <OutOfBoundsFill />
      <Container>
        <Header title="Home" />
        <Body>
          <Text style={{ fontSize: 30, fontWeight: 'bold' }}>
            Objetivos da página
          </Text>
          <Text style={{ fontSize: 14, textAlign: 'center' }}>
            Notícias sobre o App (publicadas pelo admin no estilo de um CMS
            simples); Orientações de uso (talvez só da primeira vez/enquanto não
            completar o tutorial);
          </Text>
        </Body>
      </Container>
    </>
  );
};

export default Dashboard;
