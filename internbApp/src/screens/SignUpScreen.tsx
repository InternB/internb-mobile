import React from 'react';
import {SignUpBackground as Background} from '../components/LoginBackground';
import Title, {TitleHeader} from '../components/AppTitle';
import {Column, Row} from '../components/Layout';
import PageTitle from '../components/PageTitle';
import Container from '../components/Container';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import Logo from '../components/Logo';

const SignUpScreen = () => {
  return (
    <>
      <Background>
        <TitleHeader>
          <Title>App Name</Title>
        </TitleHeader>
        <Column
          height={'90%'}
          justifyContent="space-evenly"
          alingItems="center">
          <Row width={'90%'}>
            <PageTitle color="#fff">Cadastro</PageTitle>
          </Row>

          <Column width="90%">
            <Container width="100%" height="70%">
              <Column height="100%" justifyContent="space-evenly">
                <FormInput inlineLabel={true} label="Nome" />
                <FormInput inlineLabel={true} label="CPF" />
                <FormInput inlineLabel={true} label="Telefone" />
                <FormInput inlineLabel={true} label="E-mail" />
                <FormInput inlineLabel={true} label="Senha" />
                <FormInput inlineLabel={true} label="Confirmar Senha" />
                <FormButton buttonText="Cadastrar" onPress={() => {}} />
              </Column>
            </Container>
          </Column>
        </Column>
      </Background>
    </>
  );
};

export default SignUpScreen;
