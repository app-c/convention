import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import theme from "../../../themes/theme";

const { colors, fonts } = theme;
export const Container = styled.View`
   background-color: ${colors.gray[1]};
`;

export const Title = styled.Text`
   font-size: ${RFValue(16)}px;
   font-family: ${fonts.bold};
   margin-left: 20px;
   margin-bottom: 10px;
`;

export const BoxModal = styled.View`
   padding: 20px;
`;

export const BoxInput = styled.View`
   border-width: 1px;
   border-radius: 10px;
   width: 100%;
   height: 45px;
   border-color: ${colors.yellow[2]};
   padding: 0 20px;
   justify-content: center;
`;

export const Input = styled.TextInput``;

export const TitleButon = styled.Text`
   font-size: ${RFValue(16)}px;
   font-family: ${fonts.bold};
   color: ${colors.gray[2]};
`;

export const ButonConfirmar = styled.TouchableOpacity`
   width: 100px;
   height: 40px;
   border-radius: 10px;
   background-color: ${colors.yellow[2]};
   align-items: center;
   justify-content: center;
`;

export const ButonCancelar = styled.TouchableOpacity`
   width: 100px;
   height: 40px;
   border-radius: 10px;
   background-color: ${colors.yellow[2]};
   align-items: center;
   justify-content: center;
`;
