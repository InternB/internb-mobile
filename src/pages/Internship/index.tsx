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
            Registrar informações sobre o estagio: grade horaria, plano de
            trabalho, fotos, duração e tipo de estagio.
          </Text>
        </Body>
        <Navbar currentTab={3} navigation={navigation} />
      </Container>
    </>
  );
};

export default Internship;
