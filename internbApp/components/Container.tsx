import React from 'react';
import {View, StyleSheet} from 'react-native';

interface Props {}

const Container: React.FC<Props> = ({children}) => {
  return (
    <>
      <View style={styles.container}>{children}</View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '80%',
    backgroundColor: '#ffffff',
    borderColor: '#000',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 20,
    position: 'relative',
  },
});

export default Container;
