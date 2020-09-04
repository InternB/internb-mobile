import React, { useState } from 'react';
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
}

const EnroledClass: React.FC<Props> = ({
  subjectName = 'Nome da Disciplina',
  subjectCode = 'CDD0001',
  classroomName = 'Turma A',
  professor = 'Nome Completo do Professor',
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

        <StudentListItem>
          <InformationDataText>Nome Completo do Aluno</InformationDataText>
        </StudentListItem>
        <StudentListItem>
          <InformationDataText>Nome Completo do Aluno</InformationDataText>
        </StudentListItem>
        <StudentListItem>
          <InformationDataText>Nome Completo do Aluno</InformationDataText>
        </StudentListItem>
        <StudentListItem>
          <InformationDataText>Nome Completo do Aluno</InformationDataText>
        </StudentListItem>
        <StudentListItem>
          <InformationDataText>Nome Completo do Aluno</InformationDataText>
        </StudentListItem>
      </SubjectInformation>
    </>
  );
};

export default EnroledClass;
