import React from "react";
import { SelfComp } from "../../components/SelfComp";
import * as S from "./styles";

export function Self() {
   return (
      <S.Container>
         <S.title>Self</S.title>

         <SelfComp />
      </S.Container>
   );
}
