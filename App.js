import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider as PaperProvider, Text } from 'react-native-paper';
import Navigation from './src/Navigation';
console.disableYellowBox = true;

export default function App() {
  return (
   <PaperProvider>
     <Navigation></Navigation>
   </PaperProvider>
  );
}

