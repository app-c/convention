/* eslint-disable react/require-default-props */
import React from "react";
import { View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import theme from "../../themes/theme";
import {
   ButtonConcelar,
   ButtonConfirmar,
   ContainerMessage,
   Text,
   TextButton,
} from "./styles";

interface Props {
   nome: string;
   valor?: number;
   confirmar: () => void;
   rejeitar: () => void;
}

export function MessageComponent({ nome, valor, confirmar, rejeitar }: Props) {
   return (
      <View>
         <ContainerMessage
            style={{
               shadowColor: theme.colors.gray[2],
               shadowOffset: {
                  width: 0,
                  height: 4,
               },
               shadowOpacity: 1,
               shadowRadius: 4.65,

               elevation: 5,
            }}
         >
            <Text>
               {nome} acabou de consumir seu produto ou serviço no valor de R$
               {valor}
            </Text>

            <View
               style={{
                  top: RFValue(40),
                  flexDirection: "row",
                  width: "100%",
                  justifyContent: "space-between",
               }}
            >
               <ButtonConcelar onPress={rejeitar}>
                  <TextButton>Rejeitar</TextButton>
               </ButtonConcelar>

               <ButtonConfirmar onPress={confirmar}>
                  <TextButton>Confirmar</TextButton>
               </ButtonConfirmar>
            </View>
         </ContainerMessage>
      </View>
   );
}
