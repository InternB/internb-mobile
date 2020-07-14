import React from 'react';

import { Text } from 'react-native';

import { Container, Body, OutOfBoundsFill } from './styles';

import Navbar from '../../components/Navbar';
import Header from '../../components/Header';

interface Props {
  navigation: any;
}

const Activity: React.FC<Props> = ({ navigation }) => {
  return (
    <>
      <OutOfBoundsFill />
      <Container>
        <Header title="Atividades" />
        <Body>
          <Text style={{ fontSize: 30, fontWeight: 'bold' }}>
            Objetivos da página
          </Text>
          <Text style={{ fontSize: 14, textAlign: 'center' }}>
            Feed com as atividades que o aluno cumpriu
          </Text>
        </Body>
        <Navbar currentTab={1} navigation={navigation} />
      </Container>
    </>
  );
};

export default Activity;
