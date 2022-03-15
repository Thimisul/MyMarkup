import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DefaultTheme, Headline, Provider as PaperProvider } from 'react-native-paper';
import styled from 'styled-components/native';
import Bar from './components/AppBar';
import { Spending } from './pages/Spending';



declare global {
  namespace ReactNativePaper {
    interface ThemeColors {
      myOwnColor: string;
    }

    interface Theme {
      myOwnProperty: boolean;
    }
  }
}

const theme = {
  ...DefaultTheme,
  // Specify custom property
  myOwnProperty: true,
  // Specify custom property in nested object
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    myOwnColor: '#BADA55',
  }
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      {/* <View style={styles.container}> */}
      <Bar></Bar>
      <Container theme={theme}>
        <Spending />
        <StatusBar style="auto" />
      </Container>
    </PaperProvider>
  );
}

interface ContainerProps {
  theme: ReactNativePaper.Theme;
}

const Container = styled.View<ContainerProps>`
  flex: 1;
  background-color: ${theme.colors.background};
  align-items: center;
  justify-content: center;
 
`;