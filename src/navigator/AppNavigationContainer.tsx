import React from 'react';
import { NavigationContainer, RouteProp } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AddTicket, Home } from '../containers';
import { Icon } from 'native-base';

type RootStackParamList = {
  Home: {
    shouldReload: boolean;
  };
  AddTicket: undefined;
};

export type HomePropNavigation = RouteProp<RootStackParamList, 'Home'>;

const Tab = createBottomTabNavigator<RootStackParamList>();

const AppNavigationContainer = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarIcon: ({ focused }) => (
            <Icon name="home" type="Feather" style={{ fontSize: 15, color: focused ? 'red' : 'black' }} />
          ),
        }}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="AddTicket" component={AddTicket} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigationContainer;
