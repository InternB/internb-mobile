import React from 'react';
import { View } from 'react-native';
import avatarImg from '../../assets/images/mocked_img.jpg';
import { Avatar, EditButton, ButtonLabel } from './styles';

interface Props {
  editable?: boolean;
}

const UserAvatar: React.FC<Props> = ({ editable }) => {
  return (
    <View>
      <Avatar source={avatarImg} />
      {editable && (
        <EditButton>
          <ButtonLabel>Editar</ButtonLabel>
        </EditButton>
      )}
    </View>
  );
};

export default UserAvatar;
