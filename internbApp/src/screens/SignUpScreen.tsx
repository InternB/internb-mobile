import React from 'react';
import Background from '../components/LoginBackground';
import Title from '../components/Title';
import {Column, Row} from '../components/Layout';
// import Container from '../components/Container';
// import FormInput from '../components/FormInput';
// import FormButton from '../components/FormButton';
// import Logo from '../components/Logo';

const SignUpScreen = () => {
  return (
    <>
      <Background>
        <Column justifyContent={'space-evenly'} height={'100%'}>
          <Row flex={1} alingItems="center">
            <Title>Cadastro</Title>
          </Row>
        </Column>
      </Background>
    </>
  );
};

export default SignUpScreen;
