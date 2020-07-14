import React from 'react';

import { Container, Body, OutOfBoundsFill } from './styles';

import Navbar from '../../components/Navbar';
import Header from '../../components/Header';

interface Props {
  navigation: any;
}

const ProfileSchool: React.FC<Props> = ({ navigation }) => {
  return (
    <>
      <OutOfBoundsFill />
      <Container>
        <Header title="Informações de Ensino" showArrow />
        <Body />
        <Navbar currentTab={0} navigation={navigation} />
      </Container>
    </>
  );
};

export default ProfileSchool;
