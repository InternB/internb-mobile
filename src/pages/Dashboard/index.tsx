import React from 'react';

import { Text, TouchableOpacity } from 'react-native';

import { Container } from './styles';

import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <Container>
      <Text>Hello, Dashboard</Text>
      <TouchableOpacity
        onPress={async () => {
          await signOut();
        }}
        style={{
          marginTop: 10,
          borderColor: '#333',
          borderWidth: 1,
          borderRadius: 10,
          padding: 10,
        }}
      >
        <Text>Logout</Text>
      </TouchableOpacity>
    </Container>
  );
};

export default Dashboard;
