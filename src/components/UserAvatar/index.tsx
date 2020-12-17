import React, { useState } from 'react';
import { View } from 'react-native';
// import ImagePicker from 'react-native-image-picker';
import { Avatar, EditButton, ButtonLabel, LoadingIndicator } from './styles';

interface Props {
  editable?: boolean;
  url: string | undefined;
}

const UserAvatar: React.FC<Props> = ({ editable, url }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [source, setSource] = useState<string | undefined>(url);

  return (
    <View>
      <LoadingIndicator hide={!isLoading} />
      <Avatar
        hide={isLoading}
        source={{ uri: source }}
        onLoadStart={() => {
          setIsLoading(true);
        }}
        onLoadEnd={() => {
          setIsLoading(false);
        }}
      />
      {editable && (
        <EditButton
          onPress={() => {
            // abrir o image picker
          }}
        >
          <ButtonLabel>Editar</ButtonLabel>
        </EditButton>
      )}
    </View>
  );
};

export default UserAvatar;
