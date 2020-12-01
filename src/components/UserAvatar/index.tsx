import React, { useState } from 'react';
import { View } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { Image } from 'react-native-paper/lib/typescript/src/components/Avatar/Avatar';
import { Avatar, EditButton, ButtonLabel, LoadingIndicator } from './styles';

interface Props {
  editable?: boolean;
  url: string;
}

const UserAvatar: React.FC<Props> = ({ editable, url }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [source, setSource] = useState<string>(url);

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
            ImagePicker.showImagePicker({ mediaType: 'photo' }, (res) => {
              if (res.didCancel) {
                setSource(url);
              } else {
                setSource(res.uri);
              }
            });
          }}
        >
          <ButtonLabel>Editar</ButtonLabel>
        </EditButton>
      )}
    </View>
  );
};

export default UserAvatar;
