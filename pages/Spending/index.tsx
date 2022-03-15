import React from 'react';
import { Headline } from 'react-native-paper';
import styled from 'styled-components/native';
import { useTheme } from 'react-native-paper';


export const Spending = () => {

  const { colors } = useTheme();

  return (
    <Container>
      <Headline style={{ color: colors.text }}>Headline</Headline>
    </Container >
  );
}



const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #adff;
  justify-content: center;
  width: 100%;
`;