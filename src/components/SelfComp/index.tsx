import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import * as S from "./styles";
import { cor } from "../../themes/colors";

export function SelfComp() {
   return (
      <S.Container>
         <S.content>
            <S.avatar />
            <S.icoLogo />

            <S.box>
               <S.title>nome</S.title>
               <S.title>presetador</S.title>

               <S.row>
                  <S.boxIco bg="w">
                     <MaterialIcons
                        size={30}
                        color={cor.gray[1]}
                        name="attach-money"
                     />
                  </S.boxIco>
                  <S.subTitle style={{ marginLeft: 20 }}>Negociar</S.subTitle>
               </S.row>
            </S.box>
         </S.content>
      </S.Container>
   );
}
