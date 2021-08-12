import React from 'react';
import { Text } from 'react-native';
import { Provider as PaperProvider, DefaultTheme, Banner } from 'react-native-paper';
import Navigation from './src/Navigation';
console.disableYellowBox = true;

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#fc8803',
    accent: '#f1c40f',
  },
};

export default function App() {
  return (
   <PaperProvider theme ={theme}>
      <Banner style = {{paddingTop: 20}}
      visible={true}
      actions={[
      ]}>
      <Text>Clout</Text>
    </Banner>
     <Navigation></Navigation>
   </PaperProvider>
  );
}

