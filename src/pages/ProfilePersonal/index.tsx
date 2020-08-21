import React, { useState } from 'react';

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
  const [name, setName] = useState<string>('');
  const [cpf] = useState<string>('123.456.789-10');
  const [email, setEmail] = useState<string>('');
  const [matricula, setMatricula] = useState<string>('');
  const [phone, setPhone] = useState<string>('');

  return (
    <>
      <OutOfBoundsFill />
      <Container>
        <Header navigation={navigation} title="Perfil Pessoal" showArrow />
        <Body>
          <Avatar editable />
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
            />
            <Input
              label="Telefone"
              value={phone}
              onChangeText={(value: string) => {
                setPhone(value);
              }}
            />
          </FormArea>
          <Button>Atualizar Informações</Button>
        </Body>
        <Navbar currentTab={2} navigation={navigation} />
      </Container>
    </>
  );
};

export default ProfilePersonal;
