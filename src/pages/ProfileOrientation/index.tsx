import React from 'react';

import { Container, Body, OutOfBoundsFill } from './styles';

import Navbar from '../../components/Navbar';
import Header from '../../components/Header';

interface Props {
  navigation: any;
}

const ProfileOrientation: React.FC<Props> = ({ navigation }) => {
  return (
    <>
      <OutOfBoundsFill />
      <Container>
        <Header
          navigation={navigation}
          title="Informações de Orientação"
          showArrow
        />
        <Body />
        <Navbar currentTab={0} navigation={navigation} />
      </Container>
    </>
  );
};

export default ProfileOrientation;
