import React from 'react';

import { Container, Body, OutOfBoundsFill } from './styles';

import Navbar from '../../components/Navbar';
import Header from '../../components/Header';

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  navigation: any;
}

const Documentation: React.FC<Props> = ({ navigation }) => {
  return (
    <>
      <OutOfBoundsFill />
      <Container>
        <Header navigation={navigation} title="Documentação" showArrow />
        <Body />
        <Navbar currentTab={2} navigation={navigation} />
      </Container>
    </>
  );
};

export default Documentation;
