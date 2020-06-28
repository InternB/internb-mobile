import React from 'react';
import {StyleSheet, Text} from 'react-native';

interface Props {
  color?: string | undefined;
}

const PageTitle: React.FC<Props> = ({color = '#000', children}) => {
  const styles = StyleSheet.create({
    title: {
      color: color,
      fontSize: 35,
    },
  });

  return (
    <>
      <Text style={styles.title}>{children}</Text>
    </>
  );
};

export default PageTitle;
