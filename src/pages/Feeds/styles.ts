import { FlatList } from "react-native";
import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Res } from ".";

export const Container = styled.View`
   background-color: ${({ theme: h }) => h.colors.gray[1]};
   flex: 1;
`;

export const BoxInfo = styled.View`
   padding: 20px;
`;

export const Title = styled.Text`
   font-family: ${({ theme: h }) => h.fonts.hithB};
   color: ${({ theme: h }) => h.colors.green[2]};
   margin-left: ${RFValue(70)}px;
`;

export const BoxPost = styled.View`
   padding: 10px;
   margin-top: 32px;
   border-radius: ${RFValue(10)}px;
   background-color: ${({ theme: h }) => h.colors.gray[1]};
   align-self: center;

   border-top-color: ${({ theme: h }) => h.colors.gray[1]};
   border-right-color: ${({ theme: h }) => h.colors.gray[1]};
   border-left-color: ${({ theme: h }) => h.colors.gray[1]};
   border-width: 1px;
`;

export const HeaderPost = styled.View`
   flex-direction: row;
   align-items: center;
   width: 100%;
   height: 60px;
`;

export const BoxAvatarPost = styled.View`
   height: ${RFValue(40)}px;
   width: ${RFValue(40)}px;
   border-radius: 20px;
   background-color: ${({ theme: h }) => h.colors.gray[3]};

   align-items: center;
   justify-content: center;
`;

export const AvatarPost = styled.Image``;

export const BoxImagePost = styled.View`
   align-items: center;
   justify-content: center;
   align-self: center;
`;

export const ImagePost = styled.Image`
   /* width: ${RFValue(350)}px;
   height: ${RFValue(150)}px; */
   border-radius: 10px;
`;

export const LikePost = styled.TouchableOpacity`
   width: 50px;
   height: 50px;
   align-items: center;
   justify-content: center;
`;

export const TextPost = styled.Text`
   font-family: ${({ theme: h }) => h.fonts.bold};
   font-size: ${RFValue(16)}px;
`;

export const ButonPost = styled.TouchableOpacity`
   position: absolute;
   width: ${RFValue(50)}px;
   height: ${RFValue(50)}px;
   border-radius: ${RFValue(30)}px;
   background-color: ${({ theme: h }) => h.colors.gray[2]};
   align-items: center;
   justify-content: center;
   top: ${RFValue(550)}px;
   right: ${RFValue(25)}px;
   align-self: flex-end;
`;
