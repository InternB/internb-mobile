/* eslint-disable camelcase */

import React, { useEffect, useState, useCallback } from 'react';
import { FlatList, ActivityIndicator } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Container,
  Title,
  UserCard,
  UserAvatarContainer,
  UserAvatarImage,
  UserInfoContainer,
  UserButtonsContainer,
  UserButton,
  UserButtonText,
} from './styles';
import api from '../../../services/api';

interface IUsers {
  id: string;
  role: number;
  created_at: string;
  updated_at: string;
  deleted_at: string;
  active: boolean;
  cpf: string;
  email: string;
  fullname: string;
  phone: string;
  avatar_url: string;
}

const defaultAvatar = 'http://localhost:3333/images/profiles/default.png';

const Users: React.FC = () => {
  const [users, setUsers] = useState<IUsers[]>([]);

  useEffect(() => {
    async function fetchUsers(): Promise<void> {
      const response = await api.get<IUsers[]>('/users', {
        headers: {
          authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjowLCJpYXQiOjE2MDQxNzk5NDgsImV4cCI6MTYwNDI2NjM0OCwic3ViIjoiNDQ5M2FiZmMtNmRiOS00Nzk3LWEzODEtMDU3OGUyM2E0NGZiIn0.CDiXv-2RzvD_DZuL361CBtNpRCFMpG471R7GWIKCKkw',
        },
      });

      setUsers(response.data);
    }

    fetchUsers();
  }, []);

  const handleUserActivation = useCallback(async (id: string) => {
    // TODO
    console.log(id);
  }, []);

  const handleUserDelete = useCallback(async (id: string) => {
    // TODO
    console.log(id);
  }, []);

  return (
    <Container>
      <Title>Hello, Users Page!</Title>

      {!users && <ActivityIndicator size="large" color="#007715" />}
      {users && (
        <FlatList
          data={users}
          renderItem={({ item }) => (
            <UserCard>
              <UserAvatarContainer>
                {item.avatar_url !== defaultAvatar && (
                  <UserAvatarImage
                    source={{ uri: item.avatar_url, width: 80, height: 80 }}
                  />
                )}
                {item.avatar_url === defaultAvatar && (
                  <MaterialIcon name="account" size={50} color="#007715" />
                )}
              </UserAvatarContainer>
              <UserInfoContainer>
                <Title>{item.fullname}</Title>
                <UserButtonsContainer>
                  <UserButton
                    disabled={item.active}
                    color="#007715"
                    onPress={() => handleUserActivation(item.id)}
                  >
                    <UserButtonText disabled={item.active}>
                      Ativar
                    </UserButtonText>
                  </UserButton>
                  <UserButton
                    disabled={!!item.deleted_at}
                    color="#FF3535"
                    onPress={() => handleUserDelete(item.id)}
                  >
                    <UserButtonText disabled={!!item.deleted_at}>
                      Deletar
                    </UserButtonText>
                  </UserButton>
                </UserButtonsContainer>
              </UserInfoContainer>
            </UserCard>
          )}
          keyExtractor={(item) => item.id}
        />
      )}
    </Container>
  );
};

export default Users;
