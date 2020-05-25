import React, {useState} from 'react';
import {SignUpBackground as Background} from '../components/LoginBackground';
import Title, {TitleHeader} from '../components/AppTitle';
import {Column, Row} from '../components/Layout';
import PageTitle from '../components/PageTitle';
import Container from '../components/Container';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';

const SignUpScreen = () => {
  const [nome, setNome] = useState<string>('');
  const [cpf, setCpf] = useState<string>('');
  const [telefone, setTelefone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [senha, setSenha] = useState<string>('');
  const [senhaConfirma, setSenhaConfirma] = useState<string>('');

  const [loading, setLoading] = useState<boolean>(false);

  const handleClick = () => {
    setLoading(true);
    console.log(
      `Cadastrando Nome: ${nome}, CPF: ${cpf}, Telefone: ${telefone}, E-mail: ${email}, Senha: ${senha}, Confirma Senha: ${senhaConfirma}`,
    );
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

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
                <FormInput
                  inlineLabel={true}
                  label="Nome"
                  field={nome}
                  setField={setNome}
                  isProtected={false}
                />
                <FormInput
                  inlineLabel={true}
                  label="CPF"
                  field={cpf}
                  setField={setCpf}
                  isProtected={false}
                />
                <FormInput
                  inlineLabel={true}
                  label="Telefone"
                  field={telefone}
                  setField={setTelefone}
                  isProtected={false}
                />
                <FormInput
                  inlineLabel={true}
                  label="E-mail"
                  field={email}
                  setField={setEmail}
                  isProtected={false}
                />
                <FormInput
                  inlineLabel={true}
                  label="Senha"
                  field={senha}
                  setField={setSenha}
                  isProtected={true}
                />
                <FormInput
                  inlineLabel={true}
                  label="Confirmar Senha"
                  field={senhaConfirma}
                  setField={setSenhaConfirma}
                  isProtected={true}
                />
                <FormButton
                  buttonText="Cadastrar"
                  onPress={handleClick}
                  isLoading={loading}
                />
              </Column>
            </Container>
          </Column>
        </Column>
      </Background>
    </>
  );
};

export default SignUpScreen;
