import { TouchableOpacity } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import theme from "../../themes/theme";

const { colors, fonts } = theme;

export const Container = styled.TouchableOpacity`
   background-color: ${colors.yellow[2]};
   width: ${RFValue(160)}px;
   height: ${RFValue(100)}px;
   border-radius: ${RFValue(10)}px;

   align-items: center;
   justify-content: center;
`;

export const Box = styled.View`
   background-color: ${colors.yellow[1]};
   align-items: center;
   justify-content: center;
   padding: 4px;
   border-radius: 6px;
   top: ${RFValue(20)}px;
`;

export const Title = styled.Text`
   color: ${colors.green[2]};
   font-family: ${fonts.bold};
   font-size: ${RFValue(16)}px;
`;

export const Image = styled.Image`
   width: 100px;
   height: 60px;
   opacity: 0.3;
   position: absolute;
   top: ${RFValue(6)}px;
`;
