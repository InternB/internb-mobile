import React from 'react';
import {View, StyleSheet} from 'react-native';

interface Props {}

const LoginBackground: React.FC<Props> = ({children}) => {
  return (
    <>
      <View style={styles.background}>{children}</View>
    </>
  );
};

const styles = StyleSheet.create({
  background: {
    position: 'relative',
    height: '100%',
    width: '100%',
    backgroundColor: '#1c1e83',
  },
});

export default LoginBackground;
