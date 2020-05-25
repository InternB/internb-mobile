import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Row} from './Layout';

interface Props {
  onPress: any;
}

const SignUpLink: React.FC<Props> = ({onPress}) => {
  return (
    <Row>
      <Text style={styles.text}>Não tem uma conta?</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.link}> Cadastre-se.</Text>
      </TouchableOpacity>
    </Row>
  );
};

const styles = StyleSheet.create({
  text: {
    marginTop: 40,
    fontSize: 16,
    color: '#000',
  },
  link: {
    marginTop: 40,
    fontSize: 16,
    color: '#fff',
    textDecorationLine: 'underline',
  },
});

export default SignUpLink;
