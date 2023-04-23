/* eslint-disable import/no-extraneous-dependencies */
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { Platform } from "react-native";
import { cor } from "../../themes/colors";

export const Container = styled.View`
   flex: 1;
   padding-top: ${Platform.OS === `ios` ? getStatusBarHeight() : 5}px;
   padding-bottom: 50px;
   background-color: ${cor.gray[3]};
`;

export const Header = styled.View`
   width: 100%;
   height: ${RFValue(80)}px;
   padding: 20px;
   flex-direction: row;

   align-items: center;
   margin-bottom: ${RFValue(32)}px;
`;

export const TextContainer = styled.View`
   margin-left: ${RFValue(40)}px;
`;

export const Title = styled.Text`
   font-size: ${RFValue(16)}px;
   color: ${cor.alert[1]};
`;

export const Avatar = styled.Image`
   width: ${RFValue(60)}px;
   height: ${RFValue(60)}px;
   border-radius: ${RFValue(30)}px;
`;

export const TitleName = styled.Text``;

export const LogOf = styled.TouchableOpacity`
   width: ${RFValue(100)}px;
   height: ${RFValue(35)}px;
   margin-left: ${RFValue(20)}px;
   background-color: ${cor.green[1]};

   align-items: center;
   justify-content: center;
   border-radius: ${RFValue(10)}px;
   margin-top: ${RFValue(24)}px;
`;

export const hs = styled.View`
   flex-direction: row;
`;

export const stack = styled.View``;
