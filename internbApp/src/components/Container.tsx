import React from 'react';
import {View, StyleSheet} from 'react-native';

interface Props {
  width?: number | string | undefined;
  height?: number | string | undefined;
}

const Container: React.FC<Props> = ({children, width, height}) => {
  const container = StyleSheet.create({
    container: {
      width: width || '80%',
      height: height || '25%',
      backgroundColor: '#ffffff',
      borderColor: '#000',
      borderWidth: 1,
      borderStyle: 'solid',
      borderRadius: 20,
      position: 'relative',
    },
  });

  return (
    <>
      <View style={container.container}>{children}</View>
    </>
  );
};

export default Container;
