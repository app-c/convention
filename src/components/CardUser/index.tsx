import React from "react";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import * as S from "./styles";
import { cor } from "../../themes/colors";

export function CardUser() {
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
                     <FontAwesome
                        size={25}
                        color={cor.gray[1]}
                        name="whatsapp"
                     />
                  </S.boxIco>

                  <S.boxIco style={{ marginLeft: 8 }} bg="web">
                     <FontAwesome
                        size={25}
                        color={cor.gray[1]}
                        name="instagram"
                     />
                  </S.boxIco>

                  <S.boxIco style={{ marginLeft: 8 }} bg="ins">
                     <MaterialCommunityIcons
                        size={25}
                        color={cor.gray[1]}
                        name="web"
                     />
                  </S.boxIco>
               </S.row>
            </S.box>
         </S.content>
      </S.Container>
   );
}
