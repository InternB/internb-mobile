/* eslint-disable no-loop-func */
/* eslint-disable no-await-in-loop */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../../services/api';

import {
  Container,
  ScrollArea,
  OutOfBoundsFill,
  FixedArea,
  TitleArea,
} from './styles';

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

interface EnroledClass {
  id: string;
  assessment_id: string;
  begins_at: string;
  calendar_id: string;
  class_discipline_id: string;
  class_id: string;
  class_professor_id: string;
  compromise: string;
  contract_files: string;
  created_at: string;
  deleted_at: string;
  finishes_at: string;
  preceptor_id: string;
  realization_id: string;
  school_id: string;
  student_id: string;
  updated_at: string;
  work_plan: string;
}

const Classes: React.FC<Props> = ({ navigation }) => {
  const [classroomName, setClassroomName] = useState<string>('');
  const [classroomSearch, setClassroomSearch] = useState<boolean>(false);
  const [loadingEnroled, setLoadingEnroled] = useState<boolean>(true);
  const [loadingClassrooms, setLoadingClassrooms] = useState<boolean>(true);
  const [enroledClasses, setEnroledClasses] = useState<Array<Element>>([]);

  const handleClassroomSearch = async () => {
    setLoadingClassrooms(true);
  };

  // Carrega turmas matriculadas
  const getEnroledClasses = async () => {
    let internships: Array<EnroledClass> = [];
    const auxEnroledClasses: Array<Element> = [];

    setLoadingEnroled(true);
    AsyncStorage.getItem('@InternB:token').then(async (tk) => {
      const token = tk;
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      await api
        .get('/internships/student', config)
        .then(async (res) => {
          internships = res.data;
          for (let i = 0; i < internships.length; i += 1) {
            let name = 'Disciplina';
            let sign = 'X';
            const professor = 'Professor';
            const enroledStudents: Array<string> = [];
            // get nome disciplina
            await api.get('/disciplines', config).then((resp) => {
              for (let j = 0; j < resp.data.length; j += 1) {
                if (resp.data[j].id === internships[i].class_discipline_id) {
                  name = resp.data[j].name;
                  break;
                }
              }
            });
            // get sign class
            await api.get('/classes/discipline', config).then((resp) => {
              for (let j = 0; j < resp.data.length; j += 1) {
                if (resp.data[j].id === internships[i].class_id) {
                  sign = resp.data[j].sign;
                  break;
                }
              }
            });
            // get students in class
            await api.get('/internships/student', config).then((resp) => {
              for (let j = 0; j < resp.data.length; j += 1) {
                if (resp.data[j].class_id === internships[i].class_id) {
                  enroledStudents.push(resp.data[j].student_id);
                }
              }
            });
            // // get name professor (Como que pega se eu não for admin?)
            // await api.get('/users', config).then((resp) => {
            //   for (let j = 0; j < resp.data.length; j += 1) {
            //     if (resp.data[j].id === internships[i].class_professor_id) {
            //       professor = resp.data[j].name;
            //       break;
            //     }
            //   }
            // });
            auxEnroledClasses.push(
              <EnroledClass
                classroomName={`${name} - Turma ${sign}`}
                professor={professor}
                subjectName={name}
                subjectCode={internships[i].class_discipline_id}
                studentsList={enroledStudents}
              />,
            );
          }
        })
        .then(() => {
          setEnroledClasses(auxEnroledClasses);
          setLoadingEnroled(false);
        });
    });
  };

  useEffect(() => {
    getEnroledClasses();
  }, []);

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
              {loadingEnroled ? (
                <>
                  <TitleArea>
                    <SubSectionTitle>Turmas Matriculadas:</SubSectionTitle>
                  </TitleArea>
                  <ActivityIndicator style={{ marginTop: '10%' }} size={10} />
                </>
              ) : (
                <>
                  <TitleArea>
                    <SubSectionTitle>Turmas Matriculadas</SubSectionTitle>
                  </TitleArea>
                  {enroledClasses}
                </>
              )}
            </>
          ) : (
            <>
              {loadingClassrooms ? (
                <>
                  <TitleArea>
                    <SubSectionTitle>Turmas:</SubSectionTitle>
                  </TitleArea>
                  <ActivityIndicator style={{ marginTop: '10%' }} size={10} />
                </>
              ) : (
                <>
                  <TitleArea>
                    <SubSectionTitle>Turmas:</SubSectionTitle>
                  </TitleArea>
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
