import React, { useState, useCallback } from 'react';
import { View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {
  Container,
  Title,
  Form,
  ForgotPassword,
  ForgotPasswordText,
  CreateAccountButton,
  CreateAccountButtonText,
} from './styles';

import api from '../../services/api';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/images/logoUnB.png';

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  // const [loading, setLoading] = useState<boolean>(false);

  const handleLogin = useCallback(async () => {
    try {
      await api.post('sessions', {
        email,
        password,
      });
    } catch (err) {
      console.log(err);
    }
  }, [email, password]);

  return (
    <>
      <Container>
        <Image source={logoImg} style={{ width: 100, height: 100 }} />

        <View>
          <Title>Faça seu Login</Title>
        </View>

        <Form>
          <Input
            icon="mail"
            value={email}
            onChangeText={(value) => setEmail(value)}
          />
          <Input
            icon="lock"
            value={password}
            onChangeText={(value) => setPassword(value)}
            secureTextEntry
          />

          <Button onPress={handleLogin}>Entrar</Button>
        </Form>

        <ForgotPassword>
          <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
        </ForgotPassword>
      </Container>

      <CreateAccountButton>
        <Icon name="log-in" size={20} color="#333" />
        <CreateAccountButtonText>Criar conta</CreateAccountButtonText>
      </CreateAccountButton>
    </>
  );
};

export default LoginScreen;
