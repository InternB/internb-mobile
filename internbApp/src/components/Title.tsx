import React from 'react';
import {Text, StyleSheet} from 'react-native';

const Title: React.FC = ({children}) => {
  return (
    <>
      <Text style={styles.title}>{children}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    color: '#ffffff',
    fontSize: 50,
    fontWeight: 'bold',
  },
});

export default Title;
