import React, { useCallback, useEffect, useRef, useState } from "react";
import { Alert, FlatList, View } from "react-native";
import { Modalize } from "react-native-modalize";
import { HeaderContaponent } from "../../../components/HeaderComponent";
import { MembroLista } from "../../../components/MembroLista";
import {
   BoxInput,
   BoxModal,
   ButonCancelar,
   ButonConfirmar,
   Container,
   Title,
   TitleButon,
} from "./styles";

interface PropsResponse {
   id: string;
   nome: string;
   avatarUrl: string;
   email: string;
}

export function UpdateSenhaUser() {
   const [response, setResponse] = useState<PropsResponse[]>([]);
   const [email, setEmail] = useState("");
   const [id, setId] = useState("");

   const modalizeRef = useRef<Modalize>(null);

   const modalOpen = useCallback((id: string, email: string) => {
      setId(id);
      setEmail(email);

      modalizeRef.current?.open();
   }, []);

   const modalOf = useCallback(() => {
      modalizeRef.current?.close();
   }, []);

   const handleAlteraSenha = useCallback(async () => {}, [email]);

   return (
      <Container>
         <HeaderContaponent
            type="tipo1"
            onMessage="of"
            title="Redefinir senha de um membro"
         />

         <Modalize ref={modalizeRef}>
            <BoxModal>
               <Title>E-mail a ser envidado para redefinir senha</Title>

               <BoxInput>
                  <Title>{email}</Title>
               </BoxInput>

               <View
                  style={{
                     flexDirection: "row",
                     justifyContent: "space-around",
                     marginTop: 20,
                  }}
               >
                  <ButonConfirmar onPress={handleAlteraSenha}>
                     <TitleButon>Confirmar</TitleButon>
                  </ButonConfirmar>

                  <ButonCancelar onPress={modalOf}>
                     <TitleButon>Cancelar</TitleButon>
                  </ButonCancelar>
               </View>
            </BoxModal>
         </Modalize>

         <View style={{ paddingBottom: 200 }}>
            <FlatList
               data={response}
               keyExtractor={(h) => h.id}
               renderItem={({ item: h }) => (
                  <MembroLista
                     closeModal={() => {
                        modalOpen(h.id, h.email);
                     }}
                     avatar={h.avatarUrl}
                     nome={h.nome}
                  />
               )}
            />
         </View>
      </Container>
   );
}
