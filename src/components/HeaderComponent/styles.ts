import { Platform } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import theme from "../../themes/theme";

export const Container = styled.View``;
const { colors, fonts } = theme;

interface ProsHeader {
   type: string;
}

export const Header = styled.View<ProsHeader>`
   width: 100%;
   align-items: center;
   justify-content: space-between;
   padding: 0 25px 20px 25px;
   padding-top: ${Platform.OS === `ios` ? getStatusBarHeight() : 35}px;

   flex-direction: row;

   ${({ theme, type }) =>
      type === "tipo1" &&
      css`
         background-color: ${theme.colors.gray[3]};
      `}

   ${({ theme, type }) =>
      type === "tipo2" &&
      css`
         background-color: ${theme.colors.yellow[2]};
      `}
`;

export const TitleHeader = styled.Text<ProsHeader>`
   color: ${({ type }) =>
      type === "tipo2" ? colors.yellow[2] : colors.green[2]};
   font-family: ${fonts.hithB};
   font-size: ${RFValue(16)}px;
`;

export const BoxAvatar = styled.TouchableOpacity`
   width: ${RFValue(50)}px;
   height: ${RFValue(50)}px;
   border-radius: ${RFValue(30)}px;
   align-items: center;
   justify-content: center;

   background-color: ${({ theme: h }) => h.colors.gray[1]};
`;

export const Avatar = styled.Image`
   width: ${RFValue(50)}px;
   height: ${RFValue(50)}px;
   border-radius: ${RFValue(30)}px;
`;

export const Title = styled.Text`
   font-family: ${({ theme: h }) => h.fonts.hithB};
   color: ${({ theme: h }) => h.colors.yellow[2]};
   margin-left: ${RFValue(20)}px;
   font-size: ${RFValue(22)}px;
`;

export const Circle = styled.View`
   width: ${RFValue(20)}px;
   height: ${RFValue(20)}px;
   border-radius: 15px;
   background-color: ${({ theme: h }) => h.colors.gray[1]};
   align-items: center;
   justify-content: center;
`;

export const TextCircli = styled.Text`
   font-family: ${({ theme: h }) => h.fonts.hithB};
   color: ${({ theme: h }) => h.colors.text};
   font-size: ${RFValue(12)}px;
`;

export const BoxMail = styled.TouchableOpacity``;
