import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { w } from "../../utils/size";

export const Container = styled.KeyboardAvoidingView`
   flex: 1;
   background-color: ${({ theme: h }) => h.colors.gray[1]};
   align-items: center;
   /* padding-bottom: 10px; */
`;

export const BoxLogo = styled.View`
   width: 200%;
   height: 50%;
   align-items: center;
   justify-content: center;
`;

export const BoxInput = styled.View`
   padding: 20px;
   align-items: center;
`;

export const Title = styled.Text`
   font-size: ${RFValue(16)}px;
   font-family: ${({ theme: h }) => h.fonts.boldI};
   color: ${({ theme: h }) => h.colors.gray[2]};
   margin-left: 10px;
`;

export const Logo = styled.Image`
   width: ${RFValue(w * 0.3)}px;
   height: ${RFValue(w * 0.25)}px;
   margin-top: ${RFValue(50)}px;
`;
