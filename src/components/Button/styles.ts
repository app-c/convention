import styled from "styled-components/native";
import { cor } from "../../themes/colors";
import { w } from "../../utils/size";

export const Container = styled.TouchableOpacity`
   background-color: ${cor.green[2]};
   padding: 10px 10px;

   width: ${w * 0.3}px;

   margin: 20px 0;
   align-self: center;
   border-radius: 5px;

   align-items: center;
   justify-content: center;
`;

export const title = styled.Text`
   color: ${(h) => h.theme.colors.gray[1]};
`;
