/* eslint-disable no-use-before-define */
/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable no-await-in-loop */
import AsyncStorage from '@react-native-community/async-storage';
import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import {
  SubjectBorder,
  Title,
  SubjectCodeText,
  ProfessorName,
  Row,
  ClassroomListItem,
  EnrolmentSection,
  SubjectInformation,
  ClassroomTitle,
  EnrollButton,
  EnrollButtonText,
  PasswordInput,
  PasswordLabel,
} from './styles';

export interface ClassroomType {
  id?: string;
  professor_id?: string;
  professor?: string;
  discipline_id?: string;
  sign?: string;
}

interface Props {
  subjectName?: string; // nome da disciplina
  subjectCode?: string; // codigo da disciplina
  classes?: Array<ClassroomProps>; // turmas
}

interface ClassroomProps {
  isLastChild?: boolean; // só por questão de estilo, informe se é o último elemento da lista
  sign?: string;
  id?: string;
}

const Classroom: React.FC<ClassroomProps> = ({
  isLastChild = false,
  sign = 'X',
  id = '',
}) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [password, setPassword] = useState<string>('');

  const handleClassroomSignup = () => {
    AsyncStorage.getItem('@InternB:token').then(async (tk) => {
      const token = tk;
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      await api
        .post('/internships', { class_id: id, password }, config)
        .then(async (res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(
            `\n${err}\ntoken: ${tk}\nclass_id: ${id}\npassword: ${password}\n`,
          );
        });
    });
  };

  return (
    <>
      <ClassroomListItem
        onPress={() => {
          setExpanded(!expanded);
        }}
      >
        <Row>
          <ClassroomTitle>{`Turma ${sign}`}</ClassroomTitle>
          <ProfessorName>Nome do Professor</ProfessorName>
        </Row>
      </ClassroomListItem>
      <EnrolmentSection active={expanded} isLastChild={isLastChild}>
        <Row>
          <Row noSpace>
            <PasswordLabel>Senha:</PasswordLabel>
            <PasswordInput
              value={password}
              onChangeText={(value: string) => {
                setPassword(value);
              }}
            />
          </Row>
          <EnrollButton
            onPress={() => {
              handleClassroomSignup();
            }}
          >
            <EnrollButtonText>Matricular</EnrollButtonText>
          </EnrollButton>
        </Row>
      </EnrolmentSection>
    </>
  );
};

const AvailableClass: React.FC<Props> = ({
  subjectName = 'Nome da Disciplina',
  subjectCode = 'CDD0001',
  classes = [],
}) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [classrooms, setClassrooms] = useState<Array<Element>>([]);

  useEffect(() => {
    const auxClassrooms: Array<Element> = [];
    for (let i = 0; i < classes.length; i += 1) {
      if (i === classes.length - 1) {
        auxClassrooms.push(
          <Classroom isLastChild sign={classes[i].sign} id={classes[i].id} />,
        );
      } else {
        auxClassrooms.push(
          <Classroom sign={classes[i].sign} id={classes[i].id} />,
        );
      }
    }
    setClassrooms(auxClassrooms);
  }, [classes]);

  return (
    <>
      <SubjectBorder
        active={isActive}
        onPress={() => {
          setIsActive(!isActive);
        }}
      >
        <Row>
          <Title active={isActive}>{subjectName}</Title>
          <SubjectCodeText>{subjectCode}</SubjectCodeText>
        </Row>
      </SubjectBorder>
      <SubjectInformation active={isActive}>{classrooms}</SubjectInformation>
    </>
  );
};

export default AvailableClass;
