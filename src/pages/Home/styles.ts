import {
   AntDesign,
   FontAwesome,
   FontAwesome5,
   Foundation,
   Ionicons,
   SimpleLineIcons,
} from "@expo/vector-icons";
import { Dimensions, Platform } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import theme from "../../themes/theme";

const { colors, fonts } = theme;
const { height, width } = Dimensions.get("screen");

export const Container = styled.View`
   flex: 1;
   background-color: ${colors.gray[1]};
   padding: ${width / 10.5}px 5px;
   padding-top: ${Platform.OS === `ios` ? getStatusBarHeight() : 20}px;
`;

export const Title = styled.Text`
   font-family: ${fonts.bold};
   font-size: ${RFValue(20)}px;
   margin-left: 15px;
   color: ${colors.green[2]};
`;

export const Box = styled.TouchableOpacity`
   flex-direction: row;
   padding: 10px;

   width: 100%;
   height: ${width * 0.12}px;
   align-items: center;
   /* background-color: red; */
   margin-bottom: ${RFPercentage(0.1)}px;
`;

export const Avatar = styled.Image`
   width: ${RFValue(130)}px;
   height: ${RFValue(130)}px;
   border-radius: ${RFValue(75)}px;
   align-self: center;
`;

export const BoxIco = styled.View`
   align-items: center;
   justify-content: center;
   background-color: ${theme.colors.green[2]};
   width: ${height * 0.15}px;
   height: ${height * 0.15}px;
   border-radius: ${RFValue(100)}px;
   align-self: center;
`;

export const TitleName = styled.Text`
   /* margin-top: 10px; */
   font-family: ${fonts.bold};
   font-size: ${RFValue(20)}px;
   align-self: center;
   color: ${theme.colors.green[3]};
`;

export const BoxPrice = styled.View.attrs({
   shadowColor: colors.green[3],
   shadowOffset: {
      width: 0,
      height: 3,
   },
   shadowOpacity: 0.27,
   shadowRadius: 4.65,

   elevation: 3,
})`
   width: ${width * 0.5}px;
   background-color: ${theme.colors.gray[1]};
   align-self: center;
   justify-content: center;
   align-items: center;
   border-radius: ${RFValue(10)}px;
   margin-top: ${RFValue(20)}px;
   margin-bottom: ${RFValue(15)}px;
   padding: 2px;
`;

export const TitlePrice = styled.Text`
   font-family: ${fonts.bold};
   font-size: ${RFValue(16)}px;
   color: ${theme.colors.green[3]};
`;

export const TitleP = styled.Text`
   font-family: ${fonts.bold};
   font-size: ${RFValue(12)}px;
   color: ${theme.colors.green[2]};
`;

export const ComprasText = styled.Text`
   font-family: ${fonts.bold};
   font-size: ${RFValue(14)}px;
   color: ${theme.colors.green[3]};
   top: ${RFValue(15)}px;
`;

export const Scroll = styled.ScrollView`
   padding: 20px 0;
`;

export const Line = styled.View.attrs({
   shadowColor: colors.gray[1],
   shadowOffset: {
      width: 0,
      height: 3,
   },
   shadowOpacity: 0.27,
   shadowRadius: 4.65,

   elevation: 6,
})`
   height: 2px;
   width: 80%;
   background-color: ${colors.gray[3]};
   align-self: center;
   margin-top: ${width / 29}px;
   margin-bottom: ${width / 20}px;
`;

export const IConSimple = styled(SimpleLineIcons)`
   font-size: ${width / 16}px;
`;

export const IconIoncic = styled(Ionicons)`
   font-size: ${width / 16}px;
`;

export const IconAnt = styled(AntDesign)`
   font-size: ${width / 16}px;
`;

export const IconFont = styled(FontAwesome5)`
   font-size: ${width / 16}px;
`;

export const IconFoundation = styled(Foundation)`
   font-size: ${width / 16}px;
`;

export const FontAwes = styled(FontAwesome)`
   font-size: ${width / 16}px;
`;
