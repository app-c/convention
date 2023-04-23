import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import theme from "../../themes/theme";

const { colors, fonts } = theme;

export const Container = styled.View`
   background-color: ${colors.gray[1]};

   flex-direction: row;
   padding: 15px;
   margin-top: 25px;
   width: 100%;
`;

export const AvatarMembro = styled.Image`
   width: ${RFValue(80)}px;
   height: ${RFValue(80)}px;
   border-radius: ${RFValue(40)}px;
   background-color: ${colors.yellow[2]};
`;

export const Title = styled.Text`
   font-family: ${fonts.bold};
   font-size: ${RFValue(26)}px;
   margin-left: ${RFValue(40)}px;
`;

export const TitleData = styled.Text`
   font-family: ${fonts.bold};
   font-size: ${RFValue(18)}px;
   margin-left: ${RFValue(40)}px;
`;

interface PropsButton {
   type: "1" | "2";
}

export const BoxButton = styled.View`
   flex-direction: row;
   justify-content: space-between;
   margin-top: 16px;
`;

export const TitleButton = styled.Text`
   font-family: ${fonts.bold};
   font-size: ${RFValue(14)}px;
   color: ${colors.gray[2]};
`;

export const ButtonPresensa = styled.TouchableOpacity<PropsButton>`
   width: ${RFValue(80)}px;
   height: ${RFValue(30)}px;
   border-radius: ${RFValue(10)}px;
   background-color: ${({ type }) =>
      type === "1" ? colors.yellow[2] : colors.yellow[2]};
   align-items: center;
   justify-content: center;
`;
