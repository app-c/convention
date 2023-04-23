/* eslint-disable import/no-extraneous-dependencies */
import styled from "styled-components/native";
import { Dimensions } from "react-native";

interface Props {
   color: string;
}

const w = Dimensions.get("screen").fontScale;

export const title = styled.Text<Props>`
   font-size: ${w * 24}px;
`;
