/* eslint-disable no-console */
import React, { useState, useCallback } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';

import { ScrollView } from 'react-native-gesture-handler';
import { RadioButton } from 'react-native-paper';

import api from '../../services/api';

import {
  Container,
  Logo,
  Form,
  RadioContainer,
  RadioTitle,
  RadioContent,
  BackButton,
  BackButtonText,
} from './styles';

import logoImg from '../../assets/images/logoUnB.png';

import Input from '../../components/Input';
import Button from '../../components/ActionButton';
import RadioInput from '../../components/InputRadio';

interface SignUpFormData {
  fullname: string;
  cpf: string;
  email: string;
  phone: string;
  password: string;
  passwordConfirmation: string;
  role: number;
}

const SignUpScreen: React.FC = () => {
  const { goBack } = useNavigation();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loading, setLoading] = useState(false);
  const [fullname, setFullname] = useState('');
  const [cpf, setCPF] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [role, setRole] = useState('0');

  const handleRegistration = useCallback(async () => {
    try {
      const data: SignUpFormData = {
        fullname,
        cpf,
        email,
        phone,
        password,
        passwordConfirmation,
        role: parseInt(role, 10),
      };

      const schema = Yup.object().shape({
        fullname: Yup.string().required('Nome é obrigatório'),
        cpf: Yup.string()
          .required('CPF é obrigatório')
          .length(11, 'CPF deve conter apenas números'),
        email: Yup.string()
          .email('E-mail inválido')
          .required('E-mail é obrigatório'),
        phone: Yup.string(),
        password: Yup.string()
          .required('Senha é obrigatória')
          .min(6, 'Senha deve ter no mínimo 6 caracteres')
          .max(12, 'Senha deve ter no máximo 12 caracteres'),
        passwordConfirmation: Yup.string().oneOf(
          [Yup.ref('password'), undefined],
          'Senhas devem ser iguais',
        ),
        role: Yup.number()
          .min(0, 'Papel deve estar entre 0 e 3')
          .max(3, 'Papel deve estar entre 0 e 3'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      // Remover depois
      delete data.passwordConfirmation;

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { data: user } = await api.post('users', data);
      goBack();
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        // Sinalizar nos campos!
        console.log('Validation Error');
      } else {
        // Alerta na tela!
        console.log(err);
      }
    }
  }, [
    fullname,
    cpf,
    email,
    phone,
    password,
    passwordConfirmation,
    role,
    goBack,
  ]);

  return (
    <ScrollView
      contentContainerStyle={{
        paddingBottom: 30,
        backgroundColor: '#f5f5f5',
      }}
    >
      <Container>
        <Logo source={logoImg} />

        <Form>
          <Input
            icon="user"
            label="Nome Completo"
            value={fullname}
            onChangeText={(value: string) => setFullname(value)}
          />
          <Input
            icon="archive"
            label="CPF"
            value={cpf}
            onChangeText={(value: string) => setCPF(value)}
          />
          <Input
            icon="mail"
            label="E-mail"
            value={email}
            onChangeText={(value: string) => setEmail(value)}
          />
          <Input
            icon="phone"
            label="Telefone"
            value={phone}
            onChangeText={(value: string) => setPhone(value)}
          />
          <View style={{ marginTop: 50 }}>
            <Input
              icon="lock"
              label="Senha"
              secureTextEntry
              value={password}
              onChangeText={(value: string) => setPassword(value)}
            />
            <Input
              icon="lock"
              label="Confirmar senha"
              secureTextEntry
              value={passwordConfirmation}
              onChangeText={(value: string) => setPasswordConfirmation(value)}
            />
          </View>

          <RadioContainer>
            <RadioTitle>Você é:</RadioTitle>
            <RadioButton.Group
              onValueChange={(value) => setRole(value)}
              value={role}
            >
              <RadioContent>
                <RadioInput value="0">Administrador</RadioInput>
                <RadioInput value="1">Orientador</RadioInput>
                <RadioInput value="2">Professor</RadioInput>
                <RadioInput value="3">Estudante</RadioInput>
              </RadioContent>
            </RadioButton.Group>
          </RadioContainer>

          <Button onPress={handleRegistration} isLoading={loading}>
            Cadastrar
          </Button>
        </Form>

        <BackButton onPress={() => goBack()}>
          <Icon name="arrow-left" size={20} color="#333" />
          <BackButtonText>Voltar</BackButtonText>
        </BackButton>
      </Container>
    </ScrollView>
  );
};

export default SignUpScreen;
