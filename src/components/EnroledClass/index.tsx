import React, { useState, useEffect } from 'react';
import {
  SubjectBorder,
  Title,
  InformationDataText,
  InformationLabelText,
  InformationRow,
  StudentListItem,
  SubjectInformation,
  SubtitleHeader,
  SubtitleText,
} from './styles';

interface Props {
  subjectName?: string; // nome da disciplina
  subjectCode?: string; // codigo da disciplina
  classroomName?: string; // turma
  professor?: string; // nome do professor
  studentsList?: Array<string>; // lista de ids dos estudantes matriculados
}

const EnroledClass: React.FC<Props> = ({
  subjectName = 'Nome da Disciplina',
  subjectCode = 'CDD0001',
  classroomName = 'Turma A',
  professor = 'Nome Completo do Professor',
  studentsList = [],
}) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [enroledStudents, setEnroledStudents] = useState<Array<Element>>([]);

  useEffect(() => {
    const name = 'Nome Completo do Aluno';
    const auxEnroledStudents: Array<Element> = [];
    for (let i = 0; i < studentsList.length; i += 1) {
      // como que pega o nome do Aluno sem ser admin?
      // await api.get('/users');
      auxEnroledStudents.push(
        <StudentListItem>
          <InformationDataText>{name}</InformationDataText>
        </StudentListItem>,
      );
    }
    setEnroledStudents(auxEnroledStudents);
  }, [studentsList]);

  return (
    <>
      <SubjectBorder
        active={isActive}
        onPress={() => {
          setIsActive(!isActive);
        }}
      >
        <Title active={isActive}>{classroomName}</Title>
      </SubjectBorder>
      <SubjectInformation active={isActive}>
        <InformationRow>
          <InformationLabelText>Professor: </InformationLabelText>
          <InformationDataText>{professor}</InformationDataText>
        </InformationRow>
        <InformationRow>
          <InformationLabelText>Disciplina: </InformationLabelText>
          <InformationDataText>{subjectName}</InformationDataText>
        </InformationRow>
        <InformationRow>
          <InformationLabelText>Código da disciplina: </InformationLabelText>
          <InformationDataText>{subjectCode}</InformationDataText>
        </InformationRow>
        <SubtitleHeader>
          <SubtitleText>Alunos</SubtitleText>
        </SubtitleHeader>

        {enroledStudents}
      </SubjectInformation>
    </>
  );
};

export default EnroledClass;
