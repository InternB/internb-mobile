import React from 'react';

import { Text } from 'react-native';

import { Container, Body, OutOfBoundsFill } from './styles';

import Navbar from '../../components/Navbar';
import Header from '../../components/Header';

interface Props {
  navigation: any;
}

const Documentation: React.FC<Props> = ({ navigation }) => {
  return (
    <>
      <OutOfBoundsFill />
      <Container>
        <Header title="Documentação" />
        <Body>
          <Text style={{ fontSize: 30, fontWeight: 'bold' }}>
            Objetivos da página
          </Text>
          <Text style={{ fontSize: 14, textAlign: 'center' }}>
            Links para baixar arquivos
          </Text>
        </Body>
        <Navbar currentTab={4} navigation={navigation} />
      </Container>
    </>
  );
};

export default Documentation;
