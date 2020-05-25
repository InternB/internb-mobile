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

export const SignUpBackground: React.FC<Props> = ({children}) => {
  return (
    <>
      <SafeAreaView style={styles.safeAreaBackground} />
      <SafeAreaView style={styles.background}>{children}</SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  background: {
    position: 'relative',
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: '#1c1e83',
  },
  safeAreaBackground: {
    flex: 0,
    backgroundColor: '#7E7EB2',
  },
});

export default LoginBackground;
