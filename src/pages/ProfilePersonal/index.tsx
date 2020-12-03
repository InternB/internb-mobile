/* eslint-disable no-console */
import React, { useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { useAuth, User } from '../../hooks/auth';

import { Container, Body, OutOfBoundsFill, FormArea } from './styles';

import Navbar from '../../components/Navbar';
import Header from '../../components/Header';
import Avatar from '../../components/UserAvatar';
import Input from '../../components/Input';
import Button from '../../components/ActionButton';

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  navigation: any;
}

const ProfilePersonal: React.FC<Props> = ({ navigation }) => {
  const currentUser = useAuth().user;
  const [name, setName] = useState<string>(currentUser.fullname);
  const [cpf] = useState<string>(
    currentUser.cpf.replace(
      /(\d{3})(\d{3})(\d{3})(\d{2})/,
      (
        regex: string,
        argumento1: string,
        argumento2: string,
        argumento3: string,
        argumento4: string,
      ) => {
        return `${argumento1}.${argumento2}.${argumento3}-${argumento4}`;
      },
    ),
  );
  const [email, setEmail] = useState<string | undefined>(currentUser.email);
  const [matricula, setMatricula] = useState<string>('');
  const [phone, setPhone] = useState<string>(currentUser.phone);
  const [loading, setLoading] = useState<boolean>(false);
  const { update } = useAuth();

  const handleUpdate = async (): Promise<void> => {
    setLoading(true);

    let user: User;

    // O back não deixa atualizar as infos se mandar o mesmo email. Caso não mude email, não vamos enviar email.
    if (email === currentUser.email) {
      user = { fullname: name, phone, cpf, id: currentUser.id };
    } else {
      user = { fullname: name, email, phone, cpf, id: currentUser.id };
    }

    try {
      // atualizar dados
      await update(user);
    } catch (err) {
      console.log(err);
    } finally {
      AsyncStorage.setItem('@InternB:user', JSON.stringify(user));
      setLoading(false);
    }
  };

  return (
    <>
      <OutOfBoundsFill />
      <Container>
        <Header navigation={navigation} title="Perfil Pessoal" showArrow />
        <Body>
          <Avatar editable url={currentUser.avatar_url} />
          <FormArea>
            <Input
              label="Nome"
              value={name}
              onChangeText={(value: string) => {
                setName(value);
              }}
            />
            <Input
              label="E-mail"
              value={email}
              onChangeText={(value: string) => {
                setEmail(value);
              }}
            />
            <Input label="CPF" value={cpf} editable={false} />
            <Input
              label="Matrícula"
              value={matricula}
              onChangeText={(value: string) => {
                setMatricula(value);
              }}
              placeholder="Somente números"
            />
            <Input
              label="Telefone"
              value={phone}
              onChangeText={(value: string) => {
                setPhone(value);
              }}
            />
          </FormArea>
          <Button onPress={handleUpdate} isLoading={loading}>
            Atualizar Informações
          </Button>
        </Body>
        <Navbar currentTab={2} navigation={navigation} />
      </Container>
    </>
  );
};

export default ProfilePersonal;
