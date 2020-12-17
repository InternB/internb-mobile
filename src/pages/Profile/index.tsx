import React, { useEffect, useState } from 'react';

import {
  Container,
  Body,
  OutOfBoundsFill,
  ButtonsArea,
  ProfileArea,
  NameText,
  InfoText,
} from './styles';

import { useAuth, User } from '../../hooks/auth';

import Navbar from '../../components/Navbar';
import Header from '../../components/Header';
import Avatar from '../../components/UserAvatar';
import AppButton from '../../components/NavigationButton';

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  navigation: any;
}

const Profile: React.FC<Props> = ({ navigation }) => {
  const { signOut } = useAuth();
  const [role, setRole] = useState<string>('');
  const currentUser: User = useAuth().user;

  // define role name
  useEffect(() => {
    switch (currentUser.role) {
      case 0:
        setRole('Administrador');
        break;
      case 1:
        setRole('Professor');
        break;
      case 2:
        setRole('Preceptor');
        break;
      case 3:
        setRole('Estudante');
        break;

      default:
        break;
    }
  }, [currentUser]);

  return (
    <>
      <OutOfBoundsFill />
      <Container>
        <Header title="Perfil" />
        <Body>
          <ProfileArea>
            <Avatar url={currentUser.avatar_url} />
            <NameText>{currentUser.fullname}</NameText>
            <InfoText>{role}</InfoText>
            <InfoText>{currentUser.cpf}</InfoText>
          </ProfileArea>
          <ButtonsArea>
            <AppButton onPress={() => navigation.navigate('Perfil Pessoal')}>
              Perfil Pessoal
            </AppButton>
            <AppButton onPress={() => navigation.navigate('Turmas')}>
              Turmas
            </AppButton>
            <AppButton onPress={() => navigation.navigate('Documentação')}>
              Documentação
            </AppButton>
            <AppButton onPress={() => navigation.navigate('Editar Estágio')}>
              Estágio
            </AppButton>
            <AppButton onPress={() => signOut()}>Sair da Conta</AppButton>
          </ButtonsArea>
        </Body>
        <Navbar currentTab={2} navigation={navigation} />
      </Container>
    </>
  );
};

export default Profile;
