import * as React from 'react';
import { Appbar } from 'react-native-paper';
import styled from 'styled-components/native'

const Bar = () => {

  return (
    <Appbar.Header>
      <Appbar.Content title="MyMarkup" subtitle="Preencher com valor mensal ou média dos ultimos 3 meses" />
    </Appbar.Header>
  );
};

export default Bar;

