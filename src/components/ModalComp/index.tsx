import React from "react";
import { Modal } from "react-native";
import * as S from "./styles";

export function ModalComp() {
   return (
      <Modal>
         <S.Container>
            <S.title>ModalComp</S.title>
         </S.Container>
      </Modal>
   );
}
