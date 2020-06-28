import React, { useState, useEffect } from 'react';
import { SignUpBackground as Background } from '../components/LoginBackground';
import Title, { TitleHeader } from '../components/AppTitle';
import { Column, Row } from '../components/Layout';
import PageTitle from '../components/PageTitle';
import Container from '../components/Container';
import FormInput from '../components/Input';
import FormRadioInput from '../components/FormRadioInput';
import FormButton from '../components/Button';
import { BodyText } from '../components/StyledTexts';

const SignUpScreen = () => {
  // Variaveis para backend
  const [nome, setNome] = useState<string>('');
  const [cpf, setCpf] = useState<string>('');
  const [telefone, setTelefone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [senha, setSenha] = useState<string>('');
  const [senhaConfirma, setSenhaConfirma] = useState<string>('');
  const [perfil, setPerfil] = useState<number>(0);

  // Variaveis para controle de render
  const [tipoPerfil, setTipoPerfil] = useState<Array<boolean>>([
    true,
    false,
    false,
    false,
  ]);

  const [loading, setLoading] = useState<boolean>(false);

  const handleClick = () => {
    setLoading(true);
    console.log(
      `Cadastrando Nome: ${nome}, CPF: ${cpf}, Telefone: ${telefone}, E-mail: ${email}, Senha: ${senha}, Confirma Senha: ${senhaConfirma}, Tipo Perfil: ${perfil}`,
    );
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  useEffect(() => {
    for (let index = 0; index < tipoPerfil.length; index++) {
      if (tipoPerfil[index] === true) {
        setPerfil(index);
      }
    }
  }, [tipoPerfil]);

  return (
    <>
      <Background>
        <TitleHeader>
          <Title>App Name</Title>
        </TitleHeader>
        <Column height={'90%'} alingItems="center">
          <Row width={'90%'} flex={1}>
            <PageTitle color="#fff">Cadastro</PageTitle>
          </Row>

          <Column width="90%" justifyContent="center" flex={5}>
            <Container width="100%" height="90%">
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
                <Column
                  height="25%"
                  width="100%"
                  justifyContent="space-evenly"
                  alingItems="center">
                  <BodyText size={14}>
                    Selecione o perfil de usuário apropriado:
                  </BodyText>
                  <Row width="65%" justifyContent="space-evenly">
                    <FormRadioInput
                      id={0}
                      numberOfInputs={tipoPerfil.length}
                      selected={tipoPerfil[0]}
                      onPress={setTipoPerfil}
                      size={14}
                      label="Docente UnB"
                      flex={4}
                    />
                    <FormRadioInput
                      id={1}
                      numberOfInputs={tipoPerfil.length}
                      selected={tipoPerfil[1]}
                      onPress={setTipoPerfil}
                      size={14}
                      label="Preceptor"
                      flex={3}
                    />
                  </Row>
                  <Row width="65%" justifyContent="space-around">
                    <FormRadioInput
                      id={2}
                      numberOfInputs={tipoPerfil.length}
                      selected={tipoPerfil[2]}
                      onPress={setTipoPerfil}
                      size={14}
                      label="Discente"
                      flex={4}
                    />
                    <FormRadioInput
                      id={3}
                      numberOfInputs={tipoPerfil.length}
                      selected={tipoPerfil[3]}
                      onPress={setTipoPerfil}
                      size={14}
                      label="Administrador"
                      flex={3}
                    />
                  </Row>
                </Column>
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

          <Row width="80%" flex={2}>
            <BodyText size={16} color="#fff">
              A solicitação da sua inscrição será enviada para um administrador
              do sistema para avaliação.
            </BodyText>
          </Row>
        </Column>
      </Background>
    </>
  );
};

export default SignUpScreen;
