import React, { useState, useCallback } from 'react';
import { View, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import * as Yup from 'yup';

import {
  Container,
  Title,
  Form,
  ForgotPassword,
  ForgotPasswordText,
  OrText,
  CreateAccountButton,
  CreateAccountButtonText,
} from './styles';

import api from '../../services/api';
import { useAuth } from '../../hooks/auth';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/images/logoUnB.png';

interface SignInFormData {
  email: string;
  password: string;
}

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const { navigate } = useNavigation();
  const { signIn } = useAuth();

  const handleLogin = useCallback(async () => {
    try {
      setLoading(true);

      const data: SignInFormData = {
        email,
        password,
      };

      const schema = Yup.object().shape({
        email: Yup.string()
          .email('Digite um e-mail válido')
          .required('E-mail obrigatório'),
        password: Yup.string().min(6, 'Senha obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await signIn({ email, password });
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        // Sinalizar nos campos!
        console.log('Validation Error!');
      } else {
        // Alerta na tela!
        console.log(err);
      }
    } finally {
      setLoading(false);
    }
  }, [email, password, setLoading]);

  return (
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
          placeholder="E-mail"
        />
        <Input
          icon="lock"
          value={password}
          onChangeText={(value) => setPassword(value)}
          placeholder="Senha"
          secureTextEntry
        />

        <Button onPress={handleLogin} isLoading={!loading}>
          Entrar
        </Button>
      </Form>

      <ForgotPassword>
        <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
      </ForgotPassword>

      <OrText>ou</OrText>

      <CreateAccountButton onPress={() => navigate('SignUp')}>
        <CreateAccountButtonText>Criar conta</CreateAccountButtonText>
        <Icon name="log-in" size={20} color="#333" />
      </CreateAccountButton>
    </Container>
  );
};

export default LoginScreen;
