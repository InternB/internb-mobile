import React, { useState } from 'react';
import { ActivityIndicator } from 'react-native';

import { Container, ScrollArea, OutOfBoundsFill, FixedArea } from './styles';

import Navbar from '../../components/Navbar';
import Header from '../../components/Header';
import { SubSectionTitle } from '../../components/Texts';
import Input from '../../components/Input';
import EnroledClass from '../../components/EnroledClass';
import AvailableClass from '../../components/AvailableClass';

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  navigation: any;
}

const Classes: React.FC<Props> = ({ navigation }) => {
  const [classroomName, setClassroomName] = useState<string>('');
  const [classroomSearch, setClassroomSearch] = useState<boolean>(false);
  const [loadingClassrooms, setLoadingClassrooms] = useState<boolean>(true);

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleClassroomSearch = () => {
    setLoadingClassrooms(true);
    // api.get... name contains classroomName...

    // simular acesso. MOCK:
    setTimeout(() => {
      setLoadingClassrooms(false);
    }, 1000);
  };

  return (
    <>
      <OutOfBoundsFill />
      <Container>
        <Header navigation={navigation} title="Turmas" showArrow />
        <FixedArea>
          <Input
            label="Procurar Disciplina"
            icon="search"
            value={classroomName}
            onChangeText={(value: string) => {
              setClassroomName(value);
              if (value.length > 2) {
                setClassroomSearch(true);
                handleClassroomSearch();
              } else {
                setClassroomSearch(false);
              }
            }}
          />
        </FixedArea>
        <ScrollArea>
          {!classroomSearch ? (
            <>
              <SubSectionTitle>Turmas Matriculadas</SubSectionTitle>
              {/* Lista de turmas ja matriculadas */}
              <EnroledClass />
              <EnroledClass
                classroomName="Sociedade e Informática - Turma B"
                professor="José Campos da Silva"
                subjectName="Sociedade e Informática"
                subjectCode="CIC9391"
              />
            </>
          ) : (
            <>
              {loadingClassrooms ? (
                <>
                  <SubSectionTitle>Turmas:</SubSectionTitle>
                  <ActivityIndicator style={{ marginTop: '10%' }} size={10} />
                </>
              ) : (
                <>
                  <SubSectionTitle>Turmas:</SubSectionTitle>
                  {/* Lista de turmas para se matricular */}
                  <AvailableClass
                    subjectName="Introdução à Ciência da Computação"
                    subjectCode="CIC1298"
                  />
                  <AvailableClass
                    subjectName="Autômatos e Computabilidade"
                    subjectCode="CIC9476"
                  />
                  <AvailableClass
                    subjectName="Software Básico"
                    subjectCode="CIC4590"
                  />
                  <AvailableClass
                    subjectName="Tópicos Avançados em Computação"
                    subjectCode="CIC3395"
                  />
                  <AvailableClass
                    subjectName="Estágio Obrigatório"
                    subjectCode="CIC1113"
                  />
                  <AvailableClass />
                  <AvailableClass />
                  <AvailableClass />
                  <AvailableClass />
                  <AvailableClass />
                  <AvailableClass />
                </>
              )}
            </>
          )}
        </ScrollArea>
        <Navbar currentTab={2} navigation={navigation} />
      </Container>
    </>
  );
};

export default Classes;
