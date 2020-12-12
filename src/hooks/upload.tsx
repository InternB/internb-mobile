import React, { createContext, useCallback, useContext } from 'react';
import storage from '@react-native-firebase/storage';
import { launchImageLibrary } from 'react-native-image-picker';
import fs from 'react-native-fs';

interface UploadContextState {
  upload(dir: string, filename: string): Promise<void>;
}

const UploadContext = createContext<UploadContextState>(
  {} as UploadContextState,
);

export const UploadProvider: React.FC = ({ children }) => {
  const upload = useCallback(
    async (dir: string, filename: string): Promise<void> => {
      // TODO
      const reference = storage().ref('black-t-shirt-sm.png');
      launchImageLibrary({ mediaType: 'photo' }, async (response) => {
        if (response.uri) {
          try {
            const data = await fs.readFile(response.uri!, 'base64');
            await reference.putString(data, 'base64');
          } catch (e) {
            console.log(e);
          }
        }
      });

      console.log(dir, filename);
    },
    [],
  );

  return (
    <UploadContext.Provider value={{ upload }}>
      {children}
    </UploadContext.Provider>
  );
};

export function useUpload(): UploadContextState {
  return useContext(UploadContext);
}
