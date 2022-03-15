import React, { useRef } from 'react';
import { ScrollView } from 'react-native';
import { useTheme, Button, Title, Subheading, Divider } from 'react-native-paper';
import styled from 'styled-components/native';

import MoneyInput from '../../components/MoneyInput';

export const Spending = () => {

  const { colors } = useTheme();

  const [markup, setMarkup] = React.useState<number>(0);
  const [rent, setRent] = React.useState<number>(0);
  const [nEmployee, setNEmployee] = React.useState<number>(0);
  const [employee, setEmployee] = React.useState<number>(0);

  function handleCalculaMarkup() {
    setMarkup(rent + (nEmployee * employee));
    console.log("Seu Markup é " + markup);
  }

  return (
    <>
      <Container>
        <ScrollView>

          <Title>Fixo</Title>
          <MoneyInput label="Aluguel" setValueFather={setRent}></MoneyInput>
          <MoneyInput label="Luz" setValueFather={setRent}></MoneyInput>
          <MoneyInput label="Agua" setValueFather={setRent}></MoneyInput>
          <MoneyInput label="Internet" setValueFather={setRent}></MoneyInput>
          <Divider></Divider>

          <Title>Pessoal</Title>
          <MoneyInput notMoney={true} label="Numero de Funcionarios" setValueFather={setNEmployee}></MoneyInput>
          <MoneyInput label="Salario" setValueFather={setEmployee}></MoneyInput>
          <MoneyInput label="Fgts" setValueFather={setEmployee}></MoneyInput>
          <MoneyInput label="Ferias e Décimo" setValueFather={setEmployee}></MoneyInput>
          <Divider></Divider>

          <Title>Serviços</Title>
          <MoneyInput label="Sistema" setValueFather={setNEmployee}></MoneyInput>
          <MoneyInput label="Contabilidade" setValueFather={setEmployee}></MoneyInput>
          <MoneyInput label="Desinsetização" setValueFather={setEmployee}></MoneyInput>
          <Divider></Divider>

          <Title>Materiais</Title>
          <MoneyInput label="Limpeza" setValueFather={setNEmployee}></MoneyInput>
          <MoneyInput label="Escritório" setValueFather={setEmployee}></MoneyInput>
          <MoneyInput label="Higiene" setValueFather={setEmployee}></MoneyInput>
          <Divider></Divider>

          <Title>Operacional</Title>
          <MoneyInput label="Credito" setValueFather={setNEmployee}></MoneyInput>
          <MoneyInput label="Debito" setValueFather={setEmployee}></MoneyInput>
          <MoneyInput label="Dinheiro" setValueFather={setEmployee}></MoneyInput>
          <MoneyInput label="Taxa de Credito" setValueFather={setEmployee}></MoneyInput>
          <MoneyInput label="Taxa de Debito" setValueFather={setEmployee}></MoneyInput>
          <MoneyInput label="Taxa de Imposto" setValueFather={setEmployee}></MoneyInput>
          <Divider></Divider>

          <Title>Outros</Title>
          <MoneyInput label="Prolabore" setValueFather={setNEmployee}></MoneyInput>
          <MoneyInput label="Porcentagem Desejada" setValueFather={setEmployee}></MoneyInput>
          <Divider></Divider>

          <Button style={{ marginTop: 10 }} mode='outlined' onPress={() => handleCalculaMarkup()}>Calcular</Button>
        </ScrollView>
      </Container >

    </>
  );
}



const Container = styled.View`
  padding: 10px;
  width: 90%;
`;