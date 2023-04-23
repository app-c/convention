/* eslint-disable react/require-default-props */
import React from "react";
import { cor } from "../../themes/colors";
import * as S from "./styles";

interface Props {
   t: string;
   color?: string;
}

export function Title({ t, color = cor.text[1] }: Props) {
   return <S.title color={color}>{t}</S.title>;
}
