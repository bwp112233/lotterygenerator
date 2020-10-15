import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Screens from './Navigation/NavScreens';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <Screens />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

