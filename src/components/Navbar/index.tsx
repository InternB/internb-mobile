/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';

import {
  Background,
  TabButton,
  IconEntypo,
  IconFeather,
  ButtonLabel,
} from './styles';

interface Props {
  currentTab: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  navigation: any;
}

const Navbar: React.FC<Props> = ({ currentTab, navigation }) => {
  const [tabIndexes, setTabIndexes] = useState<Array<boolean>>([
    false,
    false,
    false,
  ]);

  useEffect(() => {
    const indexes = [false, false, false];
    try {
      indexes[currentTab] = true;
      setTabIndexes(indexes);
    } catch (err) {
      console.log('Possibly out of bounds');
    }
  }, [currentTab]);

  return (
    <>
      <Background>
        <TabButton onPress={() => navigation.navigate('Estágio')}>
          <IconEntypo name="briefcase" selected={tabIndexes[0]} />
          <ButtonLabel selected={tabIndexes[0]}>Estágio</ButtonLabel>
        </TabButton>
        <TabButton onPress={() => navigation.navigate('Home')}>
          <IconEntypo name="home" selected={tabIndexes[1]} />
          <ButtonLabel selected={tabIndexes[1]}>Home</ButtonLabel>
        </TabButton>
        <TabButton onPress={() => navigation.navigate('Perfil')}>
          <IconFeather name="user" selected={tabIndexes[2]} />
          <ButtonLabel selected={tabIndexes[2]}>Perfil</ButtonLabel>
        </TabButton>
      </Background>
    </>
  );
};

export default Navbar;
