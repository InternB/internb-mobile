import React from 'react';
import {StyleSheet, Text, TextInput} from 'react-native';
import {Row} from './Layout';

interface Props {
  label: string;
  field?: string;
  setField?: any;
  isProtected?: boolean;
  inlineLabel?: boolean;
}

const FormInput: React.FC<Props> = ({
  label,
  field = '',
  setField,
  isProtected = false,
  inlineLabel = false,
}) => {
  if (inlineLabel === true) {
    return (
      <>
        <Row justifyContent="space-evenly" width="90%">
          <TextInput
            style={styles.input}
            value={field}
            onChangeText={(text) => setField(text)}
            secureTextEntry={isProtected}
            placeholder={label}
          />
        </Row>
      </>
    );
  } else {
    return (
      <>
        <Row justifyContent="space-evenly" width="90%">
          <Text style={styles.label}>{label}</Text>
          <TextInput
            style={styles.input}
            value={field}
            onChangeText={(text) => setField(text)}
            secureTextEntry={isProtected}
          />
        </Row>
      </>
    );
  }
};

const styles = StyleSheet.create({
  label: {
    flex: 1,
    fontSize: 20,
  },
  input: {
    flex: 3,
    borderColor: '#1c1e83',
    borderWidth: 1,
    borderRadius: 5,
    height: 20,
    paddingLeft: '5%',
    fontSize: 14,
  },
});

export default FormInput;
