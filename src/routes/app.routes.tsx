import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Activity from '../pages/Activity';
import Dashboard from '../pages/Dashboard';
import Documentation from '../pages/Documentation';
import Internship from '../pages/Internship';
import Profile from '../pages/Profile';
import ProfilePersonal from '../pages/ProfilePersonal';
import ProfileSchool from '../pages/ProfileSchool';
import ProfileOrientation from '../pages/ProfileOrientation';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// nested navigators components
const NestedProfile: React.FC = () => (
  <Stack.Navigator
    initialRouteName="Informações"
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name="Informações" component={Profile} />
    <Stack.Screen name="Informações Pessoais" component={ProfilePersonal} />
    <Stack.Screen name="Informações de Ensino" component={ProfileSchool} />
    <Stack.Screen
      name="Informações de Orientação"
      component={ProfileOrientation}
    />
  </Stack.Navigator>
);

const AppRoutes: React.FC = () => (
  <Tab.Navigator
    initialRouteName="Home"
    screenOptions={{ tabBarVisible: false }}
  >
    <Tab.Screen name="Informações" component={NestedProfile} />
    <Tab.Screen name="Atividades" component={Activity} />
    <Tab.Screen name="Home" component={Dashboard} />
    <Tab.Screen name="Estágio" component={Internship} />
    <Tab.Screen name="Documentação" component={Documentation} />
  </Tab.Navigator>
);

export default AppRoutes;
