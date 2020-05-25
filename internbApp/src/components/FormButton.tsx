import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from 'react-native';
import {Row} from './Layout';

interface Props {
  buttonText: string;
  onPress: any;
  isLoading?: boolean;
}

const FormButton: React.FC<Props> = ({
  buttonText,
  onPress,
  isLoading = false,
}) => {
  let buttonStyle = styles;

  if (isLoading === true) {
    buttonStyle = disabledButton;
  }

  return (
    <>
      <Row>
        <TouchableOpacity
          style={buttonStyle.button}
          onPress={onPress}
          disabled={isLoading}>
          <Text style={buttonStyle.text}>{buttonText}</Text>
        </TouchableOpacity>
        <ActivityIndicator animating={isLoading} color="#216621" />
      </Row>
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
    width: 100,
    height: 30,
    marginRight: 10,
    marginLeft: 10,
  },
  text: {
    fontWeight: 'bold',
    color: '#000000',
    letterSpacing: 0,
  },
});

const disabledButton = StyleSheet.create({
  button: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderColor: '#1c1e8366',
    borderWidth: 3,
    borderRadius: 10,
    width: 100,
    height: 30,
    marginRight: 10,
    marginLeft: 10,
  },
  text: {
    fontWeight: 'bold',
    color: '#000000',
    letterSpacing: 0,
    opacity: 0.4,
  },
});

export default FormButton;
