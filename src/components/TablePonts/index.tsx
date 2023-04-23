import React from "react";
import * as S from "./styles";

interface Props {
   pontos: string;
}

export function TablePonts({ pontos }: Props) {
   return (
      <S.Container>
         <S.title style={{ alignSelf: "center" }}>Meus pontos</S.title>

         <S.box>
            <S.content>
               <S.title>Vendas</S.title>
               <S.subTitle>{pontos}</S.subTitle>
            </S.content>

            <S.content>
               <S.title>Compras</S.title>
               <S.subTitle>{pontos}</S.subTitle>
            </S.content>

            <S.content>
               <S.title>B2b</S.title>
               <S.subTitle>{pontos}</S.subTitle>
            </S.content>
         </S.box>
      </S.Container>
   );
}
