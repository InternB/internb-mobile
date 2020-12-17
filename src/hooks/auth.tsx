/* eslint-disable camelcase */

import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import api from '../services/api';

interface SignInCredentials {
  email: string;
  password: string;
}

export interface User {
  id: string;
  fullname: string;
  email?: string;
  cpf: string;
  phone: string;
  old_password?: string;
  new_password?: string;
  avatar_url?: string;
}

interface AuthContextState {
  user: User;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
  update(user: User): Promise<void>;
  loading: boolean;
}

interface AuthState {
  token: string;
  user: User;
}

const AuthContext = createContext<AuthContextState>({} as AuthContextState);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>({} as AuthState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStoragedData(): Promise<void> {
      const [token, user] = await AsyncStorage.multiGet([
        '@InternB:token',
        '@InternB:user',
      ]);

      if (token[1] && user[1]) {
        api.defaults.headers.authorization = `Bearer ${token[1]}`;

        setData({ token: token[1], user: JSON.parse(user[1]) });
      }

      setLoading(false);
    }

    loadStoragedData();
  }, []);

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    await AsyncStorage.multiSet([
      ['@InternB:token', token],
      ['@InternB:user', JSON.stringify(user)],
    ]);

    api.defaults.headers.authorization = `Bearer ${token}`;

    setData({ token, user });
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove(['@InternB:token', '@InternB:user']);

    setData({} as AuthState);
  }, []);

  const update = useCallback(
    async ({
      fullname,
      email,
      phone,
      old_password,
      new_password,
      cpf,
    }: User) => {
      let user;
      const response = await api.put('profiles', {
        fullname,
        email,
        phone,
        cpf,
        old_password,
        new_password,
      });

      const { token } = data;

      await AsyncStorage.multiSet([
        ['@InternB:token', token],
        ['@InternB:user', JSON.stringify(response.data)],
      ]);

      setData({ token, user: response.data });
    },
    [data],
  );

  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signOut, loading, update }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextState {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used with an AuthProvider');
  }

  return context;
}
