import { Feather } from "@expo/vector-icons";
import { RFValue, RFPercentage } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { TextInputMask } from "react-native-masked-text";
import theme from "../../themes/theme";
import { w } from "../../utils/size";

const { colors, fonts } = theme;

export const BoxHeader = styled.View.attrs({
   shadowColor: "#000",
   shadowOffset: {
      width: 0,
      height: 2,
   },
   shadowOpacity: 0.23,
   shadowRadius: 2.62,

   elevation: 4,
})`
   width: 100%;
   height: ${RFPercentage(8)}px;
   background-color: ${colors.gray[2]};
   align-items: center;
   justify-content: space-between;
   padding: 8px 25px;
   flex-direction: row;
`;

export const Container = styled.View`
   /* padding: 20px 20px 30px 20px; */
   background-color: ${({ theme: h }) => h.colors.gray[1]};
   flex: 1;
`;

export const Box = styled.View`
   background-color: ${colors.gray[1]};
   align-items: center;
   flex-direction: row;
   justify-content: center;
   margin-top: ${RFValue(32)}px;
`;

export const BoxCamera = styled.TouchableOpacity`
   width: ${RFPercentage(7)}px;
   height: ${RFPercentage(7)}px;
   background-color: ${colors.yellow[2]};
   align-items: center;
   justify-content: center;
   border-radius: ${RFValue(25)}px;
   top: ${RFValue(-50)}px;
   right: ${RFValue(20)}px;
`;

export const Camera = styled(Feather)`
   font-size: ${RFValue(25)}px;
   color: ${colors.gray[1]};
`;

export const Avatar = styled.Image`
   width: ${RFPercentage(22)}px;
   height: ${RFPercentage(22)}px;
   background-color: ${colors.yellow[2]};
   border-radius: ${RFValue(80)}px;
   align-self: center;
`;

export const TitleHeader = styled.Text`
   color: ${colors.yellow[2]};
   font-family: ${fonts.hithB};
   font-size: ${RFValue(16)}px;
`;

export const BoxFormularios = styled.View.attrs({
   shadowColor: "#000",
   shadowOffset: {
      width: 0,
      height: 2,
   },
   shadowOpacity: 0.23,
   shadowRadius: 2.62,
   elevation: 4,
})`
   background-color: ${colors.gray[2]};
   width: ${w / 1.12}px;
   /* height: ${RFPercentage(55)}px; */
   top: ${RFPercentage(1)}px;
   align-self: center;
   border-radius: 15px;
   align-items: center;
   margin-bottom: 15px;

   padding: ${RFValue(40)}px 10px;
`;

export const BoxInput = styled.View`
   /* border-width: 2px;
    border-top-color: ${colors.gray[2]};
    border-right-color: ${colors.gray[2]};
    border-left-color: ${colors.gray[2]};
    border-bottom-color: ${colors.yellow[2]};
    border-radius: 10px; */
   justify-content: center;
   padding: 0 20px;

   width: ${RFPercentage(40)}px;
   /* margin-bottom: 18px; */
`;

export const InpuMask = styled(TextInputMask)`
   font-family: ${fonts.bold};
   font-size: ${RFValue(14)}px;
   color: ${colors.green[2]};
`;

export const BoxTogle = styled.TouchableOpacity`
   border-width: 2px;
   border-top-color: ${colors.gray[2]};
   border-right-color: ${colors.gray[2]};
   border-left-color: ${colors.gray[2]};
   border-bottom-color: ${colors.yellow[2]};
   justify-content: center;
   padding: 0 10px;

   width: ${RFPercentage(25)}px;
   align-items: center;
   flex-direction: row;
   justify-content: space-between;
`;

export const TextTogle = styled.Text`
   font-family: ${fonts.bold};
   font-size: ${RFValue(14)}px;
   color: ${colors.green[2]};
`;

export const BoxButton = styled.TouchableOpacity`
   width: ${RFPercentage(40)}px;
   height: ${RFPercentage(7)}px;
   background-color: ${colors.yellow[2]};
   align-self: center;
   align-items: center;
   justify-content: center;
   border-radius: 15px;
   /* top: ${RFPercentage(-15)}px; */
`;

export const BoxLogo = styled.View`
   width: ${RFPercentage(20)}px;
   height: ${RFPercentage(20)}px;
   background-color: ${colors.gray[2]};
   border-radius: 15px;
   margin-left: ${RFValue(20)}px;
   margin-top: ${RFValue(15)}px;
   align-items: center;
   justify-content: center;
`;

export const LogoImage = styled.Image`
   width: ${RFPercentage(20)}px;
   height: ${RFPercentage(20)}px;
   position: absolute;
   border-radius: 15px;
`;

export const TitleButton = styled.Text`
   font-family: ${fonts.tenor};
   font-size: ${RFValue(24)}px;
   color: ${colors.green[2]};
`;

export const BoxLink = styled.View`
   width: 100%;

   margin-bottom: 20px;
`;

export const BoxIconLink = styled.View`
   margin: 0 15px;
`;
