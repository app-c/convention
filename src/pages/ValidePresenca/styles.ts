import styled from "styled-components/native";
import theme from "../../themes/theme";

const { colors, fonts } = theme;
export const Container = styled.View``;

export const Title = styled.Text`
   font-family: ${fonts.hithB};
   font-size: 20px;
   color: ${colors.text};
`;

export const Box = styled.View`
   background-color: ${colors.gray[1]};
   width: 100%;
   height: 100px;
   align-items: center;
   justify-content: center;
`;

export const ButtonValidar = styled.TouchableOpacity`
   width: 70%;
   height: 40px;
   background-color: ${colors.yellow[1]};
   align-self: center;
   align-items: center;
   justify-content: center;
   border-radius: 10px;
   margin-top: 25px;
`;

export const TextButtonValidar = styled.Text`
   font-family: ${fonts.hithB};
   font-size: 20px;
   color: ${colors.green[2]};
`;
