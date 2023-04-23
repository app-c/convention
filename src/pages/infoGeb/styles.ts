import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import theme from "../../themes/theme";

const { colors, fonts } = theme;
export const Container = styled.View`
   background-color: ${colors.gray[1]};
   flex: 1;
   padding: 20px;
`;

export const Title = styled.Text`
   color: ${colors.text};
   font-family: ${fonts.bold};
   font-size: ${RFValue(18)}px;
   margin-top: ${RFValue(25)}px;
`;
