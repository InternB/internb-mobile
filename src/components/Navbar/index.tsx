/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';

import { Background, TabButton, IconEntypo, IconFeather } from './styles';

interface Props {
  currentTab: number;
}

const Navbar: React.FC<Props> = ({ currentTab }) => {
  const [tabIndexes, setTabIndexes] = useState<Array<boolean>>([
    false,
    false,
    false,
    false,
    false,
  ]);

  useEffect(() => {
    const indexes = [false, false, false, false, false];
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
        <TabButton>
          <IconFeather name="user" selected={tabIndexes[0]} />
        </TabButton>
        <TabButton>
          <IconEntypo name="list" selected={tabIndexes[1]} />
        </TabButton>
        <TabButton>
          <IconEntypo name="home" selected={tabIndexes[2]} />
        </TabButton>
        <TabButton>
          <IconEntypo name="briefcase" selected={tabIndexes[3]} />
        </TabButton>
        <TabButton>
          <IconFeather name="file" selected={tabIndexes[4]} />
        </TabButton>
      </Background>
    </>
  );
};

export default Navbar;
