import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

interface Props {
  active?: boolean;
  isLastChild?: boolean;
}

interface LayoutProps {
  noSpace?: boolean;
}

export const SubjectBorder = styled.TouchableOpacity<Props>`
  position: relative;
  width: 85%;
  height: 45px;
  background-color: #ffffff;
  border-color: #2526a5;
  border-style: solid;
  border-radius: 12px;
  justify-content: center;
  align-items: flex-start;
  padding-left: 4%;
  margin: 10px 0;
  ${(props) =>
    props.active === true
      ? css`
          border-width: 1px;
          border-bottom-left-radius: 0;
          border-bottom-right-radius: 0;
          border-bottom-width: 0;
        `
      : css`
          border-width: 2px;
        `};
`;

export const Title = styled.Text<Props>`
  font-weight: 400;
  font-size: 18px;
  color: #000000;
  max-width: 70%;
`;

export const SubjectInformation = styled.View<Props>`
  display: ${(props) => (props.active === true ? 'flex' : 'none')};
  border-style: solid;
  border-color: #2526a5;
  border-width: 1px;
  border-top-width: 0;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  background-color: #ffffff;
  width: 85%;
  position: relative;
  margin: -10px 0 30px 0;
`;

export const Row = styled.View<LayoutProps>`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  ${(props) =>
    props.noSpace === true
      ? css`
          margin-left: 7%;
          justify-content: flex-start;
        `
      : css`
          width: 100%;
          justify-content: space-between;
        `};
`;

export const ProfessorName = styled.Text`
  font-size: 16px;
  color: #443db4aa;
  font-weight: 300;
  margin-right: 4%;
`;

export const PasswordLabel = styled.Text`
  font-size: 14px;
  color: #2526a5;
  font-weight: 500;
  align-self: flex-start;
`;

export const PasswordInput = styled.TextInput`
  background-color: #ffffff99;
  height: 20px;
  width: 45%;
  margin-left: 5px;
  border-style: solid;
  border-width: 1px;
  border-color: #2526a5;
  border-radius: 8px;
  padding-left: 3%;
  padding-top: 0;
  padding-bottom: 0;
  color: #443db4;
`;

export const SubjectCodeText = styled.Text`
  font-size: 18px;
  color: #bcbcbc;
  font-weight: 400;
  margin-right: 4%;
`;

export const ClassroomTitle = styled.Text`
  font-size: 16px;
  color: #2526a5;
  font-weight: 500;
  align-self: flex-start;
  margin-left: 4%;
`;

export const ClassroomListItem = styled.TouchableOpacity`
  width: 100%;
  height: 30px;
  justify-content: center;
  background-color: transparent;
  border-style: solid;
  border-color: #2526a5;
  border-width: 0;
  border-top-width: 1px;
`;

export const EnrolmentSection = styled.View<Props>`
  display: ${(props) => (props.active === true ? 'flex' : 'none')};
  width: 100%;
  min-height: 20px;
  justify-content: center;
  background-color: #e7e2ff;
  border-style: solid;
  border-color: #2526a5;
  border-width: 0;
  border-top-width: 1px;
  ${(props) =>
    props.isLastChild === true &&
    css`
      border-bottom-left-radius: 12px;
      border-bottom-right-radius: 12px;
    `};
`;

export const EnrollButton = styled(RectButton)`
  padding: 1px 8px;
  background: #ffffff;
  border-color: #2526a5;
  border-style: solid;
  border-width: 1px;
  border-radius: 8px;
  margin: 3px 5%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const EnrollButtonText = styled.Text`
  color: #2526a5;
  font-size: 12px;
  font-weight: 600;
`;
