import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {Row} from './Layout';

interface Props {
  id: number;
  numberOfInputs: number;
  size?: number;
  selected?: boolean;
  label?: string;
  onPress: any;
  flex?: number | undefined;
}

const FormRadioInput: React.FC<Props> = ({
  id,
  selected = false,
  size = 16,
  label = '',
  onPress,
  numberOfInputs,
  flex = undefined,
}) => {
  const styles = StyleSheet.create({
    button: {
      height: size,
      width: size,
      borderRadius: size / 2,
      borderWidth: 2,
      borderColor: '#1c1e83',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonFill: {
      height: size / 2,
      width: size / 2,
      borderRadius: size / 4,
      backgroundColor: '#1c1e83',
    },
    label: {
      color: '#000',
      fontSize: size,
      marginLeft: 10,
    },
  });

  return (
    <>
      <TouchableOpacity
        style={{flex: flex}}
        onPress={() => {
          let newValuesArray: Array<boolean> = [];
          for (let i = 0; i < numberOfInputs; i++) {
            newValuesArray.push(false);
          }
          newValuesArray[id] = true;
          onPress(newValuesArray);
        }}>
        <Row>
          <View style={styles.button}>
            {selected ? <View style={styles.buttonFill} /> : null}
          </View>
          <Text style={styles.label}>{label}</Text>
        </Row>
      </TouchableOpacity>
    </>
  );
};

export default FormRadioInput;
