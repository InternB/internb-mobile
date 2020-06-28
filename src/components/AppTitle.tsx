import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const Title: React.FC = ({children}) => {
  return (
    <>
      <Text style={styles.title}>{children}</Text>
    </>
  );
};

export const TitleHeader: React.FC = ({children}) => {
  return (
    <>
      <View style={styles.header}>{children}</View>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    color: '#ffffff',
    fontSize: 50,
    fontWeight: 'bold',
  },
  header: {
    width: '100%',
    height: '10%',
    backgroundColor: '#7e7eb2',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
});

export default Title;
