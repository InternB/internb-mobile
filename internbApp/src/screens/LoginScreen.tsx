import {NavigationStackProp} from 'react-navigation-stack';
import React, {useState} from 'react';
import Background from '../components/LoginBackground';
import Title from '../components/AppTitle';
import Container from '../components/Container';
import {Column, Row} from '../components/Layout';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import Logo from '../components/Logo';
import SignUpLink from '../components/SignUpLink';

interface Props {
  navigation: NavigationStackProp;
}

const LoginScreen: React.FC<Props> = ({navigation}) => {
  const [cpf, setCpf] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleClick = () => {
    console.log(`enviando CPF: ${cpf} e senha: ${password}`);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <>
      <Background>
        <Column justifyContent={'space-evenly'} height={'100%'}>
          <Row flex={1} alingItems="flex-end">
            <Title>App Name</Title>
          </Row>

          <Column flex={3} width="100%" justifyContent="center">
            <Container height="45%">
              <Column justifyContent="space-evenly" height="100%" width="100%">
                <FormInput label="CPF:" field={cpf} setField={setCpf} />
                <FormInput
                  label="Senha:"
                  isProtected={true}
                  field={password}
                  setField={setPassword}
                />
                <FormButton
                  buttonText="Entrar"
                  onPress={handleClick}
                  isLoading={loading}
                />
              </Column>
            </Container>
            <SignUpLink
              onPress={() => {
                navigation.navigate('Sign Up');
              }}
            />
          </Column>

          <Row flex={1} width="100%" justifyContent="space-around">
            <Logo />
            <Logo />
          </Row>
        </Column>
      </Background>
    </>
  );
};

export default LoginScreen;
