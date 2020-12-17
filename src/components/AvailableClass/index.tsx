/* eslint-disable @typescript-eslint/no-explicit-any */
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
  enroledClasses?: Array<any>; // turmas
  navigation?: any;
}

interface ClassroomProps {
  isLastChild?: boolean; // só por questão de estilo, informe se é o último elemento da lista
  sign?: string;
  id?: string;
  navigation?: any;
  enroledClasses?: Array<any>;
}

const Classroom: React.FC<ClassroomProps> = ({
  isLastChild = false,
  sign = 'X',
  id = '',
  navigation,
  enroledClasses = [],
}) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [password, setPassword] = useState<string>('');
  const [enroled, setEnroled] = useState<Element>(<></>);
  const [errorMessage, setErrorMessage] = useState<string>('');

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
        .then(async () => {
          setPassword('');
          navigation.navigate('Perfil');
        })
        .catch((err) => {
          console.log(
            `\n${err}\ntoken: ${tk}\nclass_id: ${id}\npassword: ${password}\n`,
          );
        });
    });
  };

  useEffect(() => {
    setEnroled(
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
      </Row>,
    );
    for (let i = 0; i < enroledClasses.length; i += 1) {
      if (enroledClasses[i] === id) {
        setEnroled(
          <Row noSpace>
            <PasswordLabel>Já Matriculado</PasswordLabel>
          </Row>,
        );
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enroledClasses]);

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
        {enroled}
      </EnrolmentSection>
    </>
  );
};

const AvailableClass: React.FC<Props> = ({
  subjectName = 'Nome da Disciplina',
  subjectCode = 'CDD0001',
  classes = [],
  navigation,
  enroledClasses = [],
}) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [classrooms, setClassrooms] = useState<Array<Element>>([]);

  useEffect(() => {
    const auxClassrooms: Array<Element> = [];
    for (let i = 0; i < classes.length; i += 1) {
      if (i === classes.length - 1) {
        auxClassrooms.push(
          <Classroom
            navigation={navigation}
            isLastChild
            sign={classes[i].sign}
            id={classes[i].id}
            enroledClasses={enroledClasses}
          />,
        );
      } else {
        auxClassrooms.push(
          <Classroom
            navigation={navigation}
            sign={classes[i].sign}
            id={classes[i].id}
            enroledClasses={enroledClasses}
          />,
        );
      }
    }
    setClassrooms(auxClassrooms);
  }, [classes, navigation]);

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
