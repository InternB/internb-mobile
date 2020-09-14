import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

const Styles = {
  focusedColor: '#4d4bae',
  unfocusedColor: '#56557e',
  fontSize: 16,
};

interface InputProps {
  focus?: boolean;
  hasContent?: boolean;
}

export const Border = styled.View<InputProps>`
  border-width: 2px;
  border-color: ${(props) =>
    props.focus === true ? Styles.focusedColor : Styles.unfocusedColor};
  border-style: solid;
  width: 100%;
  height: 50px;
  padding: 0 16px;
  background: white;
  border-radius: 10px;
  margin-bottom: 8px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: flex-start;
  margin: 5px;
`;

export const Label = styled.Text<InputProps>`
  color: ${(props) =>
    props.focus === true ? Styles.focusedColor : Styles.unfocusedColor};
  font-size: ${(props) =>
    props.focus === true || props.hasContent === true
      ? `${Styles.fontSize * 0.66}px`
      : `${Styles.fontSize}px`};
  margin-top: ${(props) =>
    props.focus === true || props.hasContent === true ? '-10px' : '10px'};
  margin-left: 16px;
  text-align: justify;
  position: absolute;
  background-color: transparent;
  flex: 1;
`;

export const BorderHole = styled.Text<InputProps>`
  position: absolute;
  font-size: 16px;
  margin-top: ${(props) =>
    props.focus === true || props.hasContent === true ? '-2px' : '0px'};
  margin-left: 12px;
  background-color: white;
  color: transparent;
  flex: 1;
`;

export const TextField = styled.TextInput<{ editable?: boolean }>`
  flex: 9;
  color: ${(props) =>
    props.editable === false ? Styles.unfocusedColor : 'black'};
`;

export const Icon = styled(FeatherIcon)`
  flex: 1;
  align-self: center;
  color: ${Styles.unfocusedColor};
`;
