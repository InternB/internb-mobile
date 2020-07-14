/* eslint-disable no-console */
import React from 'react';

import { Background, ArrowBack, Title, BackButton } from './styles';

interface Props {
  title: string;
  showArrow?: boolean;
}

const Header: React.FC<Props> = ({ title, showArrow = false }) => {
  return (
    <>
      <Background>
        <BackButton show={showArrow}>
          <ArrowBack name="chevron-left" />
        </BackButton>

        <Title>{title}</Title>
      </Background>
    </>
  );
};

export default Header;
