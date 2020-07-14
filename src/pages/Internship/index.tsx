import React from 'react';

import { Text } from 'react-native';

import { Container, Body, OutOfBoundsFill } from './styles';

import Navbar from '../../components/Navbar';
import Header from '../../components/Header';

interface Props {
  navigation: any;
}

const Internship: React.FC<Props> = ({ navigation }) => {
  return (
    <>
      <OutOfBoundsFill />
      <Container>
        <Header title="Estágio" />
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
        <Navbar currentTab={3} navigation={navigation} />
      </Container>
    </>
  );
};

export default Internship;
