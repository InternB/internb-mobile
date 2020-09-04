import styled, { css } from 'styled-components/native';

interface Props {
  active?: boolean;
}

export const SubjectBorder = styled.TouchableOpacity<Props>`
  position: relative;
  width: 85%;
  height: 45px;
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
          background-color: #2526a5;
          border-width: 1px;
          border-bottom-left-radius: 0;
          border-bottom-right-radius: 0;
        `
      : css`
          background-color: #ffffff;
          border-width: 2px;
        `};
`;

export const Title = styled.Text<Props>`
  font-weight: 400;
  font-size: 18px;
  ${(props) =>
    props.active === true
      ? css`
          color: #ffffff;
        `
      : css`
          color: #000000;
        `};
`;

export const SubjectInformation = styled.View<Props>`
  display: ${(props) => (props.active === true ? 'flex' : 'none')};
  border-style: solid;
  border-color: #2526a5;
  border-width: 1px;
  border-bottom-width: 4px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  width: 85%;
  position: relative;
  margin: -10px 0 10px 0;
`;

export const InformationRow = styled.View`
  flex-direction: row;
`;

export const InformationLabelText = styled.Text`
  font-size: 16px;
  color: #999999;
  font-weight: 300;
  align-self: flex-start;
  margin-left: 4%;
`;

export const InformationDataText = styled.Text`
  font-size: 18px;
  color: #333333;
  font-weight: 400;
  align-self: flex-start;
  margin-left: 4%;
`;

export const SubtitleText = styled.Text`
  font-size: 16px;
  color: #ffffff;
  font-weight: 400;
  align-self: flex-start;
  margin-left: 4%;
`;

export const SubtitleHeader = styled.View`
  width: 100%;
  height: 25px;
  justify-content: center;
  background-color: #2526a5;
`;

export const StudentListItem = styled.View`
  width: 100%;
  height: 30px;
  justify-content: center;
  background-color: #ffffff;
  border-style: solid;
  border-color: #2526a5;
  border-width: 1px;
  border-right-width: 0px;
  border-left-width: 0px;
`;
