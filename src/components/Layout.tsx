import React from 'react';
import {View, StyleSheet} from 'react-native';

interface Props {
  justifyContent?:
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | undefined;

  alingItems?:
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'stretch'
    | 'baseline'
    | undefined;

  width?: number | string | undefined;
  height?: number | string | undefined;
  flex?: number | undefined;
  debug?: boolean;
}

export const Column: React.FC<Props> = ({
  children,
  width = undefined,
  height = undefined,
  justifyContent = 'flex-start',
  alingItems = 'center',
  flex = undefined,
  debug = false,
}) => {
  let backgroundColor: string | undefined;

  if (debug === true) {
    backgroundColor = 'red';
  }
  // custom style based on props given
  const column = StyleSheet.create({
    column: {
      width: width,
      height: height,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: justifyContent,
      alignItems: alingItems,
      flex: flex,
      backgroundColor: backgroundColor,
    },
  });

  return (
    <>
      <View style={column.column}>{children}</View>
    </>
  );
};

export const Row: React.FC<Props> = ({
  children,
  width = undefined,
  height = undefined,
  justifyContent = 'flex-start',
  alingItems = 'center',
  flex = undefined,
  debug = false,
}) => {
  let backgroundColor: string | undefined;

  if (debug === true) {
    backgroundColor = 'red';
  }
  // custom style based on props given
  const row = StyleSheet.create({
    row: {
      width: width,
      height: height,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: justifyContent,
      alignItems: alingItems,
      flex: flex,
      backgroundColor: backgroundColor,
    },
  });

  return (
    <>
      <View style={row.row}>{children}</View>
    </>
  );
};
