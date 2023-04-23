import styled from "styled-components/native";
import { cor } from "../../themes/colors";
import { t, w } from "../../utils/size";

export const Container = styled.View`
   background-color: ${cor.green[2]};

   width: 100%;
   padding: 10px;
   border-radius: 10px;
`;

export const title = styled.Text`
   font-size: ${t + 20}px;
   color: ${cor.text[3]};

   margin-bottom: 8px;
`;

export const box = styled.View``;

export const content = styled.View`
   flex-direction: row;
   justify-content: space-between;
`;

export const subTitle = styled.Text`
   font-size: ${t + 16}px;
   color: ${cor.text[3]};

   margin-bottom: 8px;
`;
