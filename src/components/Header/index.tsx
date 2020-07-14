/* eslint-disable no-console */
import React from 'react';

import { Background, ArrowBack, Title, BackButton } from './styles';

interface Props {
  title: string;
  showArrow?: boolean;
  navigation?: any;
}

const Header: React.FC<Props> = ({ title, showArrow = false, navigation }) => {
  return (
    <>
      <Background>
        <BackButton show={showArrow} onPress={() => navigation.goBack()}>
          <ArrowBack name="chevron-left" />
        </BackButton>

        <Title>{title}</Title>
      </Background>
    </>
  );
};

export default Header;
