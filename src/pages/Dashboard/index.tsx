import React from 'react';

import { Container, Body } from './styles';

import Navbar from '../../components/Navbar';

const Dashboard: React.FC = () => {
  return (
    <>
      <Container>
        <Body />
        <Navbar currentTab={2} />
      </Container>
    </>
  );
};

export default Dashboard;
