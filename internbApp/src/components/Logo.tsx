import React from 'react';
import {Image, StyleSheet} from 'react-native';
import LogoUnB from '../assets/images/logoUnB.png';

const Logo: React.FC = () => {
  return (
    <>
      <Image source={LogoUnB} style={styles.img} />
    </>
  );
};

const styles = StyleSheet.create({
  img: {
    height: 80,
    width: 80,
  },
});

export default Logo;
