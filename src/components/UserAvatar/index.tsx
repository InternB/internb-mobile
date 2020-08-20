import React from 'react';
import avatarImg from '../../assets/images/mocked_img.jpg';
import { Avatar } from './styles';

const UserAvatar: React.FC = () => {
  return (
    <>
      <Avatar source={avatarImg} />
    </>
  );
};

export default UserAvatar;
