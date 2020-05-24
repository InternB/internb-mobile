import React from 'react';
import {Text} from 'react-native';
import Background from '../components/LoginBackground';
import Title from '../components/Title';
import Container from '../components/Container';
import {Column} from '../components/Layout';

const LoginScreen = () => {
  return (
    <>
      <Background>
        <Column justifyContent={'space-evenly'} height={'100%'}>
          <Title>App Name</Title>
          <Container>
            <Column>
              <Text>lala</Text>
              <Text>lala</Text>
              <Text>lala</Text>
            </Column>
          </Container>
        </Column>
      </Background>
    </>
  );
};

export default LoginScreen;
