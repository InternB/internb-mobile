import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Activity from '../pages/Activity';
import Dashboard from '../pages/Dashboard';
import Documentation from '../pages/Documentation';
import Internship from '../pages/Internship';
import Profile from '../pages/Profile';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AppRoutes: React.FC = () => (
  <Tab.Navigator
    initialRouteName="Home"
    screenOptions={{ tabBarVisible: false }}
  >
    <Tab.Screen name="Informações" component={Profile} />
    <Tab.Screen name="Atividades" component={Activity} />
    <Tab.Screen name="Home" component={Dashboard} />
    <Tab.Screen name="Estágio" component={Internship} />
    <Tab.Screen name="Documentação" component={Documentation} />
  </Tab.Navigator>
);

export default AppRoutes;
