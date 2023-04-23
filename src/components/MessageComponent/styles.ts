import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const ContainerMessage = styled.View`
   width: 100%;
   height: ${RFValue(150)}px;
   background-color: ${({ theme: h }) => h.colors.gray[3]};
   border-radius: ${RFValue(12)}px;
   margin-bottom: 16px;
   /* flex-direction: row; */

   /* justify-content: space-between; */
   padding: 20px;
`;

export const Text = styled.Text`
   color: ${({ theme: h }) => h.colors.green[1]};
   font-family: ${({ theme: h }) => h.fonts.bold};
`;

export const ButtonConfirmar = styled.TouchableOpacity`
   width: ${RFValue(100)}px;
   height: ${RFValue(35)}px;
   background-color: ${({ theme: h }) => h.colors.green[2]};
   border-radius: 10px;
   align-items: center;
   justify-content: center;
`;

export const ButtonConcelar = styled.TouchableOpacity`
   width: ${RFValue(100)}px;
   height: ${RFValue(35)}px;
   background-color: ${({ theme: h }) => h.colors.alert[2]};
   border-radius: 10px;
   align-items: center;
   justify-content: center;
`;

export const TextButton = styled.Text`
   color: ${({ theme: h }) => h.colors.green[1]};
   font-family: ${({ theme: h }) => h.fonts.bold};
`;
