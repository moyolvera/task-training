import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

type RootStackParamList = {
  Home: undefined;
  Dashboard: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type DashboardScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Dashboard'>;

const HomeScreen = ({ navigation }: { navigation: HomeScreenNavigationProp }) => {
  return (
    <View style={styles.wrapper}>
      <Text>Home Screen</Text>
      <Button title="To dashboard" onPress={() => navigation.navigate('Dashboard')} />
    </View>
  );
};

const Dashboard = ({ navigation }: { navigation: DashboardScreenNavigationProp }) => {
  return (
    <View style={styles.wrapper}>
      <Text>Dashboard</Text>
      <Button title="To home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

const Stack = createStackNavigator<RootStackParamList>();

function AppNavigationContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigationContainer;
