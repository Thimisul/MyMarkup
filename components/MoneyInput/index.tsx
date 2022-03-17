import * as React from 'react';
import { TextInputMask } from 'react-native-masked-text';
import { TextInput } from 'react-native-paper';
import styled from 'styled-components/native';

type moneyProps = {
  type?: 'percent' | 'number',
  notMoney?: boolean,
  label: string,
  setValueFather: React.Dispatch<React.SetStateAction<number>>,
};


// const MoneyInput = ({ notMoney, ...props }: moneyProps) => {
//   if (notMoney) {
//     return (
//       <Container>
//         <TextInput
//           autoComplete={''}
//           label={props.label}
//           mode='outlined'
//           onChangeText={(text: string) => {
//             props.setValueFather(parseFloat(text)
//             )
//           }}
//           keyboardType='number-pad'
//         />
//       </Container>
//     )
//   } else {
//     return (
//       <Container>
//         <TextInput
//           autoComplete={''}
//           label={props.label}
//           mode='outlined'
//           render={(props: any) => (
//             <TextInputMask
//               {...props}
//               type={'money'}
//               options={{
//                 precision: 2,
//                 separator: ',',
//                 delimiter: '.',
//                 unit: 'R$',
//                 suffixUnit: ''
//               }}
//             />
//           )}
//           onChangeText={(text: string) => {
//             props.setValueFather(parseFloat(text.replace("R$", "").replace(".", "").replace(",", "."))
//             )
//           }}
//           keyboardType='number-pad'
//         />
//       </Container>

//     );
//   };
// }


const MoneyInput = ({ type, ...props }: moneyProps) => {
  switch (type) {
    case 'number':
      return (
        <Container>
          <TextInput
            autoComplete={''}
            label={props.label}
            mode='outlined'
            onChangeText={(text: string) => {
              props.setValueFather(parseFloat(text)
              )
            }}
            keyboardType='number-pad'
          />
        </Container>
      )
    case 'percent':
      return (
        <Container>
          <TextInput
            autoComplete={''}
            label={props.label}
            mode='outlined'
            onChangeText={(text: string) => {
              props.setValueFather(parseInt(text))
            }}
            keyboardType='number-pad'
            right={<TextInput.Affix text="%" />}
          />
        </Container>
      );

    default:
      return (
        <Container>
          <TextInput
            autoComplete={''}
            label={props.label}
            mode='outlined'
            render={(props: any) => (
              <TextInputMask
                {...props}
                type={'money'}
                // includeRawValueInChangeText={true}
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
        </Container>

      );
  }

}
export default MoneyInput;


const Container = styled.View`
  width: 90%;
 
`;