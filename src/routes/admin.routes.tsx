import React from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
// import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import Users from '../pages/Admin/Users';

const AdminTab = createBottomTabNavigator();

interface TabBarIconProps {
  focused: boolean;
  size: number;
  color: string;
}

interface INavigation {
  [key: string]: {
    outline: string;
    focused: string;
  };
}

const Navigation: INavigation = {
  Usuários: {
    focused: 'account-multiple',
    outline: 'account-multiple-outline',
  },
  Home: {
    focused: 'home',
    outline: 'home-outline',
  },
  Perfil: {
    focused: 'account',
    outline: 'account-outline',
  },
};

const AdminRoutes: React.FC = () => {
  return (
    <AdminTab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }: TabBarIconProps) => {
          const iconName = focused
            ? Navigation[route.name].focused
            : Navigation[route.name].outline;

          return <MaterialIcon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#007715',
        inactiveTintColor: 'gray',
      }}
    >
      <AdminTab.Screen name="Usuários" component={Users} />
      <AdminTab.Screen name="Home" component={Dashboard} />
      <AdminTab.Screen name="Perfil" component={Profile} />
    </AdminTab.Navigator>
  );
};

export default AdminRoutes;
