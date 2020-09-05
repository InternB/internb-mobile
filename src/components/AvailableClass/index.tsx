import React, { useState } from 'react';
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

interface Props {
  subjectName?: string; // nome da disciplina
  subjectCode?: string; // codigo da disciplina
}

interface ClassroomProps {
  isLastChild?: boolean; // só por questão de estilo, informe se é o último elemento da lista
}

const Classroom: React.FC<ClassroomProps> = ({ isLastChild = false }) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [password, setPassword] = useState<string>('');

  return (
    <>
      <ClassroomListItem
        onPress={() => {
          setExpanded(!expanded);
        }}
      >
        <Row>
          <ClassroomTitle>Turma A</ClassroomTitle>
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
          <EnrollButton>
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
}) => {
  const [isActive, setIsActive] = useState<boolean>(false);
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
      <SubjectInformation active={isActive}>
        <Classroom />
        <Classroom isLastChild />
      </SubjectInformation>
    </>
  );
};

export default AvailableClass;
