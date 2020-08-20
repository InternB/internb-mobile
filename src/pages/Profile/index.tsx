import React from 'react';

import { Container, Body, OutOfBoundsFill, ButtonsArea } from './styles';

import Navbar from '../../components/Navbar';
import Header from '../../components/Header';
import AppButton from '../../components/AppButton';

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  navigation: any;
}

const Profile: React.FC<Props> = ({ navigation }) => {
  return (
    <>
      <OutOfBoundsFill />
      <Container>
        <Header title="Perfil" />
        <Body>
          <ButtonsArea>
            <AppButton onPress={() => navigation.navigate('Perfil Pessoal')}>
              Perfil Pessoal
            </AppButton>
            <AppButton onPress={() => navigation.navigate('Documentação')}>
              Documentação
            </AppButton>
          </ButtonsArea>
        </Body>
        <Navbar currentTab={2} navigation={navigation} />
      </Container>
    </>
  );
};

export default Profile;
