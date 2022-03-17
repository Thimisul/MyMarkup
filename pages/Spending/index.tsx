import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { useTheme, Button, Title, Subheading, Divider, Portal, Modal, ActivityIndicator } from 'react-native-paper';
import styled from 'styled-components/native';

import MoneyInput from '../../components/MoneyInput';

export const Spending = () => {

  const { colors } = useTheme();
  const [visible, setVisible] = React.useState(false);

  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: colors.background, padding: 50 };

  const [markup, setMarkup] = useState<number>(0);
  const [rent, setRent] = useState<number>(0);
  const [light, setLight] = useState<number>(0);
  const [water, setWater] = useState<number>(0);
  const [gas, setGas] = useState<number>(0);
  const [internet, setInternet] = useState<number>(0);
  const [nEmployee, setNEmployee] = useState<number>(0);
  const [wage, setWage] = useState<number>(0);
  const [fgts, setFgts] = useState<number>(0);
  //const [vacation, setVacation] = React.useState<number>(0);
  const [system, setSystem] = useState<number>(0);
  const [accounting, setAccounting] = useState<number>(0);
  const [disinsection, setDisinsection] = useState<number>(0);
  const [clean, setClean] = useState<number>(0);
  const [desk, setDesk] = useState<number>(0);
  const [hygiene, setHygiene] = useState<number>(0);
  const [credit, setCredit] = useState<number>(0);
  const [debit, setDebit] = useState<number>(0);
  const [money, setMoney] = useState<number>(0);
  const [txCredit, setTxCredit] = useState<number>(0);
  const [txDebit, setTxDebit] = useState<number>(0);
  const [tax, setTax] = useState<number>(0);
  const [workOut, setWorkOut] = useState<number>(0);
  const [txDesired, setTxDesired] = useState<number>(0);

  function handleCalculateMarkup() {
    setVisible(true);

    let txfx = rent + light + water + internet + gas
      + ((nEmployee * wage) + (nEmployee * (wage * 2.3)) / 12) + fgts
      + system + accounting + disinsection
      + clean + desk + hygiene + workOut;
    let txfxPercent = (txfx * 100) / (money + debit + credit)
    console.log("Taxa fixa Porcentagem " + txfxPercent)

    setMarkup(100 /
      (100 - (txfxPercent + handleCalculateVariable() + txDesired)));
    console.log("Seu Markup é " + markup);

  }

  function handleCalculateVariable() {
    console.log("Credito = " + credit);
    console.log("Debito = " + debit);

    let creditPercent = (credit * 100) / (credit + debit);
    console.log("Porcentagem do credito = " + creditPercent);
    let debitPercent = 100 - creditPercent;
    console.log("Porcentagem do debito = " + debitPercent);

    let vic = (txCredit / 100) * credit
    console.log("Valor imposto de credito = " + vic);

    let vid = (txDebit / 100) * debit
    console.log("Valor imposto de debito = " + vid);


    let PercentTotal = (((vic + vid) * 100) / (credit + debit)) + tax;
    console.log("\nPorcentagem total: " + PercentTotal)

    return PercentTotal;
  }

  return (
    <>
      <Container>

        <Title>Fixo</Title>
        <MoneyInput label="Aluguel" setValueFather={setRent}></MoneyInput>
        <MoneyInput label="Luz" setValueFather={setLight}></MoneyInput>
        <MoneyInput label="Água" setValueFather={setWater}></MoneyInput>
        <MoneyInput label="Gás" setValueFather={setGas}></MoneyInput>
        <MoneyInput label="Internet" setValueFather={setInternet}></MoneyInput>
        <Divider></Divider>

        <Title>Pessoal</Title>
        <MoneyInput type='number' label="Número de Funcionários" setValueFather={setNEmployee}></MoneyInput>
        <MoneyInput label="Salário" setValueFather={setWage}></MoneyInput>
        <MoneyInput label="Fgts" setValueFather={setFgts}></MoneyInput>

        <Divider></Divider>

        <Title>Serviços</Title>
        <MoneyInput label="Sistema" setValueFather={setSystem}></MoneyInput>
        <MoneyInput label="Contabilidade" setValueFather={setAccounting}></MoneyInput>
        <MoneyInput label="Desinsetização" setValueFather={setDisinsection}></MoneyInput>
        <Divider></Divider>

        <Title>Materiais</Title>
        <MoneyInput label="Limpeza" setValueFather={setClean}></MoneyInput>
        <MoneyInput label="Escritório" setValueFather={setDesk}></MoneyInput>
        <MoneyInput label="Higiene" setValueFather={setHygiene}></MoneyInput>
        <Divider></Divider>

        <Title>Operacional</Title>
        <MoneyInput label="Crédito" setValueFather={setCredit}></MoneyInput>
        <MoneyInput label="Débito" setValueFather={setDebit}></MoneyInput>
        <MoneyInput label="Dinheiro" setValueFather={setMoney}></MoneyInput>
        <MoneyInput type='percent' label="Taxa de Crédito" setValueFather={setTxCredit}></MoneyInput>
        <MoneyInput type='percent' label="Taxa de Débito" setValueFather={setTxDebit}></MoneyInput>
        <MoneyInput type='percent' label="Taxa de Imposto" setValueFather={setTax}></MoneyInput>
        <Divider></Divider>

        <Title >Outros</Title>
        <MoneyInput label="Prolabore" setValueFather={setWorkOut}></MoneyInput>
        <MoneyInput type='percent' label="Porcentagem Desejada" setValueFather={setTxDesired}></MoneyInput>
        <Divider></Divider>

        <Button style={{ marginTop: 20, marginBottom: 80, width: '90%' }} mode='contained' onPress={() => handleCalculateMarkup()}>Calcular</Button>

      </Container >

      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
          {markup == 0 ? <ActivityIndicator animating={true} /> :
            <>
              <TextModal>Seu Markup é:</TextModal>
              <TextMarkup colors={colors}>{markup}</TextMarkup>
            </>}
          <Button style={{ marginTop: 20 }} mode='contained' onPress={() => hideModal()}>OK</Button>

        </Modal>
      </Portal>


    </>
  );
}

const Container = styled.View`
  flex: 1;
  flex-direction: column ;
  align-items: center ;
  padding-top: 10px ;
  margin-bottom: 40px ;
  width: 100%;
`;

interface TextProps {
  colors: ReactNativePaper.ThemeColors
}

const TextModal = styled.Text`
  align-self: center;
`;

const TextMarkup = styled.Text<TextProps>`
  font-size: 50px;
  align-self: center;
  color: #860ab8
`;