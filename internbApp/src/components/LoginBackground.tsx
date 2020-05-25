import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';

interface Props {}

const LoginBackground: React.FC<Props> = ({children}) => {
  return (
    <>
      <SafeAreaView style={styles.background}>{children}</SafeAreaView>
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
