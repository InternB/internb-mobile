import React, {useState} from 'react';
import Background from '../components/LoginBackground';
import Title from '../components/Title';
import Container from '../components/Container';
import {Column} from '../components/Layout';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';

const LoginScreen = () => {
  const [cpf, setCpf] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const test = () => {
    console.log(`enviando CPF: ${cpf} e senha: ${password}`);
  };

  return (
    <>
      <Background>
        <Column justifyContent={'space-evenly'} height={'100%'}>
          <Title>App Name</Title>
          <Container>
            <Column justifyContent="space-evenly" height="100%" width="100%">
              <FormInput label="CPF:" field={cpf} setField={setCpf} />
              <FormInput
                label="Senha:"
                isProtected={true}
                field={password}
                setField={setPassword}
              />
              <FormButton buttonText="Entrar" onPress={test} />
            </Column>
          </Container>
        </Column>
      </Background>
    </>
  );
};

export default LoginScreen;
