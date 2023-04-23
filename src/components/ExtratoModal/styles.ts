import styled from "styled-components/native";
import theme from "../../themes/theme";

const { fonts, colors } = theme;

export const Container = styled.View`
   padding: 20px;
`;

export const Box = styled.View`
   flex-direction: row;
   align-items: center;
   margin-bottom: 5px;
`;

export const Title = styled.Text`
   font-family: ${fonts.bold};
   font-size: 18px;
   color: ${colors.yellow[2]};
   margin-left: 20px;
`;
