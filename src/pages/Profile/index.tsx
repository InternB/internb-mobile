import React from 'react';

import {
  Container,
  Body,
  OutOfBoundsFill,
  ButtonsArea,
  ProfileArea,
  NameText,
  InfoText,
} from './styles';

import Navbar from '../../components/Navbar';
import Header from '../../components/Header';
import Avatar from '../../components/UserAvatar';
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
          <ProfileArea>
            <Avatar />
            <NameText>Nome Completo do Aluno</NameText>
            <InfoText>Curso X</InfoText>
            <InfoText>00/0000000</InfoText>
          </ProfileArea>
          <ButtonsArea>
            <AppButton onPress={() => navigation.navigate('Perfil Pessoal')}>
              Perfil Pessoal
            </AppButton>
            <AppButton onPress={() => navigation.navigate('Documentação')}>
              Turmas
            </AppButton>
            <AppButton onPress={() => navigation.navigate('Documentação')}>
              Documentação
            </AppButton>
            <AppButton onPress={() => navigation.navigate('Documentação')}>
              Estágio
            </AppButton>
          </ButtonsArea>
        </Body>
        <Navbar currentTab={2} navigation={navigation} />
      </Container>
    </>
  );
};

export default Profile;
