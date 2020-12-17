import React from 'react';

import { AuthProvider } from './auth';
import { StorageProvider } from './storage';

const AppProvider: React.FC = ({ children }) => {
  return (
    <AuthProvider>
      <StorageProvider>{children}</StorageProvider>
    </AuthProvider>
  );
};

export default AppProvider;
