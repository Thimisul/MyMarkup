import * as React from 'react';
import { TextInputMask } from 'react-native-masked-text';
import { Appbar, TextInput } from 'react-native-paper';
import styled from 'styled-components/native'

type moneyProps = {
  notMoney?: boolean,
  label: string
  setValueFather: React.Dispatch<React.SetStateAction<number>>,
};


const MoneyInput = ({ notMoney, ...props }: moneyProps) => {
  if (notMoney) {
    return (
      <TextInput
        label={props.label}
        mode='outlined'
        onChangeText={(text: string) => {
          props.setValueFather(parseFloat(text)
          )
        }}
        keyboardType='number-pad'
      />
    )
  } else {
    return (
      <TextInput
        label={props.label}
        mode='outlined'
        render={(props: any) => (
          <TextInputMask
            {...props}
            type={'money'}
            options={{
              precision: 2,
              separator: ',',
              delimiter: '.',
              unit: 'R$',
              suffixUnit: ''
            }}
          />
        )}
        onChangeText={(text: string) => {
          props.setValueFather(parseFloat(text.replace("R$", "").replace(".", "").replace(",", "."))
          )
        }}
        keyboardType='number-pad'
      />

    );
  };
}
export default MoneyInput;


