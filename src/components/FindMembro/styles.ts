import { FontAwesome } from "@expo/vector-icons";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import theme from "../../themes/theme";
import { w } from "../../utils/size";

const { colors, fonts } = theme;
export const Container = styled.View`
   background-color: ${colors.gray[2]};
   width: 100%;
   padding: 10px;
   border-radius: 8px;
   margin-bottom: ${RFValue(12)}px;
`;

export const Title = styled.Text`
   font-size: ${RFValue(13)}px;
   font-family: ${fonts.bold};
   color: ${colors.yellow[2]};
`;

export const content = styled.View`
   margin-left: ${w * 0.04}px;
   align-items: flex-start;
   justify-content: center;
`;

export const TitleName = styled.Text`
   font-size: ${RFValue(16)}px;
   font-family: ${fonts.heigI};
   color: ${colors.yellow[2]};
`;

export const Avatar = styled.Image`
   width: ${RFValue(50)}px;
   height: ${RFValue(50)}px;
   border-radius: ${RFValue(25)}px;
   background-color: ${colors.yellow[2]};
`;

export const MapView = styled.TouchableOpacity`
   width: ${w * 0.3}px;
   min-height: ${RFPercentage(5)}px;
   background-color: ${colors.yellow[2]};
   flex-direction: row;
   padding: 5px;
   align-items: center;
   justify-content: center;
   border-radius: ${RFValue(15)}px;
   margin-top: ${RFValue(16)}px;
   margin-bottom: ${RFValue(16)}px;
`;

export const boxH = styled.View`
   flex-direction: row;
   align-items: center;
   justify-content: space-between;

   width: ${w * 0.3}px;
`;

export const star = styled(FontAwesome)`
   color: ${theme.colors.yellow[2]};
   font-size: ${RFValue(18)}px;
`;

export const boxV = styled.View``;

export const TitleMaps = styled.Text`
   font-size: ${RFValue(12)}px;
   font-family: ${fonts.hithB};
   color: ${colors.green[2]};
   margin-left: 5px;
`;

export const Box = styled.TouchableOpacity`
   width: ${RFPercentage(10.5)}px;
   height: ${RFPercentage(6)}px;
   background-color: ${colors.gray[3]};
   align-items: center;
   justify-content: center;
   border-radius: 10px;
   margin-top: 8px;
`;

export const TitleSocial = styled.Text`
   font-size: ${RFValue(10)}px;
   font-family: ${fonts.hithB};
   color: ${colors.green[2]};
`;
