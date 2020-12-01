import React, { useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { useAuth, User } from '../../hooks/auth';

import { Container, Body, OutOfBoundsFill, FormArea } from './styles';

import Navbar from '../../components/Navbar';
import Header from '../../components/Header';
import Avatar from '../../components/UserAvatar';
import Input from '../../components/Input';
import Button from '../../components/ActionButton';
import api from '../../services/api';

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
      (regex, argumento1, argumento2, argumento3, argumento4) => {
        return `${argumento1}.${argumento2}.${argumento3}-${argumento4}`;
      },
    ),
  );
  const [email, setEmail] = useState<string>(currentUser.email);
  const [matricula, setMatricula] = useState<string>(currentUser.cpf);
  const [phone, setPhone] = useState<string>(currentUser.phone);
  const [loading, setLoading] = useState<boolean>(false);
  let token: string | null;

  AsyncStorage.getItem('@InternB:token').then((tk) => {
    token = tk;
  });

  const handleUpdate = async (): Promise<void> => {
    setLoading(true);
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    let data = {};
    let user: User = currentUser;

    // O back não deixa atualizar as infos se mandar o mesmo email. Caso não mude email, não vamos enviar email.
    if (email === currentUser.email) {
      data = { fullname: name, email, phone };
    } else {
      data = { fullname: name, email, phone };
    }

    try {
      // atualizar dados
      await api.put('/profiles', data, config).then((res) => {
        user = res.data;
        // atualizar imagem (se tiver imagem nova pra atualizar, senao ignora)
      });
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
