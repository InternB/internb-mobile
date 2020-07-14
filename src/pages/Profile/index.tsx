import React from 'react';

import { Container, Body, OutOfBoundsFill, ButtonsArea } from './styles';

import Navbar from '../../components/Navbar';
import Header from '../../components/Header';
import AppButton from '../../components/AppButton';

interface Props {
  navigation: any;
}

const Profile: React.FC<Props> = ({ navigation }) => {
  return (
    <>
      <OutOfBoundsFill />
      <Container>
        <Header title="Informações" />
        <Body>
          <ButtonsArea>
            <AppButton
              onPress={() => navigation.navigate('Informações Pessoais')}
            >
              Informações Pessoais
            </AppButton>
            <AppButton
              onPress={() => navigation.navigate('Informações de Ensino')}
            >
              Informações de Ensino
            </AppButton>
            <AppButton
              onPress={() => navigation.navigate('Informações de Orientação')}
            >
              Informações de Orientação
            </AppButton>
          </ButtonsArea>
        </Body>
        <Navbar currentTab={0} navigation={navigation} />
      </Container>
    </>
  );
};

export default Profile;
