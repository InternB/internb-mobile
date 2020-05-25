import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

interface Props {
  buttonText: string;
  onPress: any;
}

const FormButton: React.FC<Props> = ({buttonText, onPress}) => {
  return (
    <>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{buttonText}</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderColor: '#1c1e83',
    borderWidth: 3,
    borderRadius: 10,
    width: '25%',
    height: 25,
  },
  text: {
    fontWeight: 'bold',
    color: '#000000',
    letterSpacing: 1,
  },
});

export default FormButton;
