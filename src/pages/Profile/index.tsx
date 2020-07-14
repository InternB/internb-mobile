import React from 'react';

import { Text } from 'react-native';

import { Container, Body, OutOfBoundsFill } from './styles';

import Navbar from '../../components/Navbar';
import Header from '../../components/Header';

interface Props {
  navigation: any;
}

const Profile: React.FC<Props> = ({ navigation }) => {
  return (
    <>
      <OutOfBoundsFill />
      <Container>
        <Header title="Informações" />
        <Body></Body>
        <Navbar currentTab={0} navigation={navigation} />
      </Container>
    </>
  );
};

export default Profile;
