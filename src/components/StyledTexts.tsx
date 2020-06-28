import React from 'react';
import {StyleSheet, Text} from 'react-native';

interface Props {
  size?: number;
  color?: string;
}

export const BodyText: React.FC<Props> = ({
  children,
  size = 14,
  color = '#000',
}) => {
  const styles = StyleSheet.create({
    bodyText: {
      fontSize: size,
      color: color,
      fontWeight: 'normal',
      textAlign: 'center',
    },
  });
  return (
    <>
      <Text style={styles.bodyText}>{children}</Text>
    </>
  );
};
