import React from 'react';
import {StyleSheet } from 'react-native';
import HomeScreen from './HomeScreen';
import DetailScreen from './DetailScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from './styles/styles';



export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}
          options={{
            title: 'Home',
            headerTitle: 'Kauppalista',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: 'white',
            },
          }} />
        <Stack.Screen name="Todo" component={DetailScreen}
          options={{
            title: 'Todos',
            headerTitle: 'Add item',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: 'white'
            },
            headerTintColor: 'white'
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
