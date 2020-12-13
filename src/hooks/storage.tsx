/* eslint-disable camelcase */

import 'react-native-get-random-values';
import React, { createContext, useCallback, useContext } from 'react';
import storage from '@react-native-firebase/storage';
import { v4 } from 'uuid';

import api from '../services/api';

interface UploadFileOptions {
  internship_id: string;
  file: string;
  storageFolder: 'compromises' | 'work-plans' | 'avatars';
  extension: string;
}

interface UploadContractsOptions {
  internship_id: string;
  data: {
    first_copy: string;
    second_copy: string;
    third_copy: string;
    extensions: string[];
  };
}

interface DownloadOptions {
  storageFolder: string;
  filenames: string | string[];
}

interface StorageContextState {
  uploadFile(uploadOptions: UploadFileOptions): Promise<void>;
  uploadContracts(uploadOptions: UploadContractsOptions): Promise<void>;
  downloadFiles(downloadOptions: DownloadOptions): Promise<string | string[]>;
}

const StorageContext = createContext<StorageContextState>(
  {} as StorageContextState,
);

export const StorageProvider: React.FC = ({ children }) => {
  const uploadFile = useCallback(
    async ({
      internship_id,
      file,
      storageFolder,
      extension,
    }: UploadFileOptions): Promise<void> => {
      const filename = v4();

      const ref = storage().ref(`${storageFolder}/${filename}.${extension}`);

      try {
        await ref.putString(file, 'base64');

        if (storageFolder !== 'avatars') {
          await api.patch(`internships/upload/${storageFolder}`, {
            internship_id,
            [storageFolder]: filename,
          });
        } else {
          await api.patch(`profiles/`, {
            avatar: filename,
          });
        }
      } catch (err) {
        console.log(err);
      }
    },
    [],
  );

  const uploadContracts = useCallback(
    async ({ internship_id, data }: UploadContractsOptions) => {
      const first_filename = v4();
      const second_filename = v4();
      const third_filename = v4();

      const first_ref = storage().ref(
        `contracts/${first_filename}.${data.extensions[0]}`,
      );
      const second_ref = storage().ref(
        `contracts/${second_filename}.${data.extensions[1]}`,
      );
      const third_ref = storage().ref(
        `contracts/${third_filename}.${data.extensions[2]}`,
      );

      try {
        await first_ref.putString(data.first_copy, 'base64');
        await second_ref.putString(data.second_copy, 'base64');
        await third_ref.putString(data.third_copy, 'base64');

        await api.patch('internships/upload/contracts', {
          internship_id,
          first_copy: first_filename,
          second_copy: second_filename,
          third_copy: third_filename,
        });
      } catch (err) {
        console.log(err);
      }
    },
    [],
  );

  const downloadFiles = useCallback(
    async ({ storageFolder, filenames }: DownloadOptions) => {
      if (typeof filenames === 'string') {
        const url = await storage()
          .ref(`${storageFolder}/${filenames}`)
          .getDownloadURL();

        return url;
      }

      const urls: string[] = [];

      filenames.forEach(async (filename) => {
        const url = await storage()
          .ref(`${storageFolder}/${filename}`)
          .getDownloadURL();
        urls.push(url);
      });

      return urls;
    },
    [],
  );

  return (
    <StorageContext.Provider
      value={{ uploadFile, uploadContracts, downloadFiles }}
    >
      {children}
    </StorageContext.Provider>
  );
};

export function useStorage(): StorageContextState {
  return useContext(StorageContext);
}
