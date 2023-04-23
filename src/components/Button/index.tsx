import React from "react";
import * as S from "./styles";

interface props {
   pres: () => void;
   title: string;
}

export function Button({ pres, title = "ENTRAR" }: props) {
   return (
      <S.Container onPress={pres}>
         <S.title>{title}</S.title>
      </S.Container>
   );
}
