import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import theme from "../../themes/theme";

type Props = {
   inativo: boolean;
};

export const Container = styled.View``;

export const BoxText = styled.View`
   flex: 1;
`;

export const Title = styled.Text`
   font-family: ${({ theme: h }) => h.fonts.hithB};
   font-size: ${RFValue(22)}px;
`;

export const Box = styled.TouchableOpacity<Props>`
   flex-direction: row;
   padding: 20px;
   background-color: ${({ theme: h, inativo }) =>
      inativo ? h.colors.yellow[2] : h.colors.gray[1]};
   margin-bottom: 10px;
`;

export const Linha = styled.View``;

export const BoxAvatar = styled.View`
   flex-direction: row;
   flex: 1;
`;

export const Avatar = styled.Image`
   width: ${RFValue(110)}px;
   height: ${RFValue(100)}px;
   border-radius: 16px;
   background-color: ${theme.colors.yellow[2]};
`;

export const ImageOfice = styled.Image`
   width: ${RFValue(50)}px;
   height: ${RFValue(50)}px;
   border-radius: ${RFValue(25)}px;
   top: ${RFValue(50)}px;
   right: ${RFValue(25)}px;
   background-color: ${({ theme: h }) => h.colors.gray[2]};
`;

export const ContainerIcon = styled.View`
   flex: 0.4;
`;
