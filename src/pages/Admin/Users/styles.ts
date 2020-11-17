import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Title = styled.Text``;

export const UserCard = styled.View`
  width: 100%;
  flex-direction: row;

  padding: 20px;
  margin: 10px 0;
  border-radius: 4px;
  border: 1px solid black;
`;

export const UserAvatarContainer = styled.View`
  width: 80px;
  height: 80px;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  border-radius: 50px;
  background-color: white;
`;

export const UserAvatarImage = styled.Image`
  width: 78px;
  height: 78px;
  border-radius: 40px;
  align-items: center;
  justify-content: center;
`;

export const UserInfoContainer = styled.View`
  flex: 1;
  justify-content: center;
  padding: 10px;
`;

export const UserButtonsContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

interface ButtonProps {
  color: string;
}

export const UserButton = styled.TouchableOpacity<ButtonProps>`
  margin: 5px 10px;
  padding: 8px 16px;
  border-radius: 4px;
  border: 1px solid black;

  ${(props) =>
    props.color &&
    css`
      background: ${props.color};
    `}
`;

interface ButtonTextProps {
  disabled: boolean;
}

export const UserButtonText = styled.Text<ButtonTextProps>`
  color: #f5f5f5;

  ${(props) =>
    props.disabled &&
    css`
      color: #50555a;
    `}
`;
