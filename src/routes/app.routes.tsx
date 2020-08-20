import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Dashboard from '../pages/Dashboard';
import Internship from '../pages/Internship';
import ProfileMain from '../pages/Profile';
import ProfilePersonal from '../pages/ProfilePersonal';
import Documentation from '../pages/Documentation';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// nested navigators components
const NestedProfile: React.FC = () => (
  <Stack.Navigator
    initialRouteName="Perfil"
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name="Perfil" component={ProfileMain} />
    <Stack.Screen name="Perfil Pessoal" component={ProfilePersonal} />
    <Stack.Screen name="Documentação" component={Documentation} />
  </Stack.Navigator>
);

const AppRoutes: React.FC = () => (
  <Tab.Navigator
    initialRouteName="Home"
    screenOptions={{ tabBarVisible: false }}
  >
    <Tab.Screen name="Estágio" component={Internship} />
    <Tab.Screen name="Home" component={Dashboard} />
    <Tab.Screen name="Perfil" component={NestedProfile} />
  </Tab.Navigator>
);

export default AppRoutes;
