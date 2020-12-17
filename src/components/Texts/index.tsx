import React from 'react';
import { SectionTitleStyle, SubSectionTitleStyle } from './styles';

interface Props {
  children?: unknown;
}

export const SectionTitle: React.FC<Props> = ({ children }) => {
  return (
    <>
      <SectionTitleStyle>{children}</SectionTitleStyle>
    </>
  );
};

export const SubSectionTitle: React.FC<Props> = ({ children }) => {
  return (
    <>
      <SubSectionTitleStyle>{children}</SubSectionTitleStyle>
    </>
  );
};
