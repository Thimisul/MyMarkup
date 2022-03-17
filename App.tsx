import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
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

      <Container >
        <Bar></Bar>
        <ScrollView>
          <Spending />
        </ScrollView>
        <StatusBar style="auto" />
      </Container>
    </PaperProvider>
  );
}

const Container = styled.View`
  display: flex ;
  background-color: ${theme.colors.background};
  height: 100%;
  
`;