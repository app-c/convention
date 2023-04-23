import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

interface Props {
   isError: boolean;
   isFocus: boolean;
}
export const Box = styled.View<Props>`
   padding: 5px 10px;
   background-color: ${({ theme: h }) => h.colors.gray[2]};

   width: ${RFValue(270)}px;
   height: ${RFValue(40)}px;
   border-width: 2px;
   justify-content: center;
   margin-bottom: 30px;
   flex-direction: row;
   border-radius: ${RFValue(10)}px;
   border-top-color: transparent;
   border-left-color: transparent;
   border-right-color: transparent;
   border-bottom-color: ${({ theme: h }) => h.colors.yellow[1]};

   ${({ theme, isError }) =>
      isError &&
      css`
         border-top-color: transparent;
         border-left-color: transparent;
         border-right-color: transparent;
         border-bottom-color: ${({ theme: h }) => h.colors.yellow[1]};
         border-width: 2px;
      `}

   ${({ theme, isFocus }) =>
      isFocus &&
      css`
         border-top-color: transparent;
         border-left-color: transparent;
         border-right-color: transparent;
         border-bottom-color: ${({ theme: h }) => h.colors.yellow[1]};
         border-width: 2px;
      `}
`;

export const Container = styled.TextInput`
   flex: 1;
   font-family: ${({ theme: h }) => h.fonts.bold};
   font-size: ${RFValue(16)}px;
   color: ${({ theme: h }) => h.colors.text};
`;

export const Icon = styled(Feather)`
   margin-right: 14px;
   align-self: center;
`;
