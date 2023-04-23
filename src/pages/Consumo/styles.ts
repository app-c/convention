import { FlatList } from "react-native";
import { RFValue, RFPercentage } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { Prop } from ".";
import theme from "../../themes/theme";

const { colors, fonts } = theme;

interface PropsFiltro {
   filtro: boolean;
}

interface PropsTyps {
   type: boolean;
}

export const Container = styled.View`
   flex: 1;
   background-color: ${({ theme: h }) => h.colors.gray[1]};
`;

export const BoxTotal = styled.View`
   width: 100%;
   height: ${RFValue(80)}px;
   background-color: ${({ theme: h }) => h.colors.yellow[1]};
   justify-content: center;
   padding: 0 20px;
`;

export const Text = styled.Text`
   font-size: ${RFValue(20)}px;
   font-family: ${({ theme: h }) => h.fonts.hithB};
   color: ${({ theme: h }) => h.colors.gray[2]};
`;

export const BoxFiltros = styled.View`
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
   padding: 5px 20px;
   margin-bottom: ${RFValue(16)}px;
`;

export const TextFiltro = styled.Text<PropsFiltro>`
   font-size: ${RFValue(14)}px;
   font-family: ${fonts.bold};
   color: ${({ filtro }) => (filtro ? colors.gray[2] : colors.text)};
`;

export const BoxFiltroTouch = styled.TouchableOpacity<PropsFiltro>`
   background-color: ${({ filtro }) =>
      filtro ? colors.yellow[1] : colors.gray[1]};
   border-radius: 10px;
   align-items: center;
   justify-content: center;

   width: ${RFValue(70)}px;
   padding: 2px;

   border-width: 1px;
   border-color: ${colors.yellow[1]};
`;

export const BoxTypeTransaction = styled.View`
   flex-direction: row;
   align-items: center;
   padding: 5px 10px;
   /* background-color: red; */
   height: 70px;
   width: 100%;
`;

export const TextTypeTransaction = styled.Text<PropsTyps>`
   font-size: ${RFValue(14)}px;
   font-family: ${({ theme: h }) => h.fonts.bold};
   color: ${({ type }) => (type ? colors.gray[2] : colors.text)};
`;

export const BoxTypeTransactionTouch = styled.TouchableOpacity<PropsTyps>`
   background-color: ${({ type }) =>
      type ? colors.yellow[2] : colors.gray[1]};
   /* width: ${RFPercentage(8)}px;
    height: ${RFPercentage(3)}px; */

   border-radius: ${RFValue(10)}px;

   align-items: center;
   justify-content: center;

   border-width: 1px;
   border-color: ${colors.yellow[2]};
   margin-left: ${RFValue(15)}px;
   padding: 3px ${RFValue(6)}px;
`;
