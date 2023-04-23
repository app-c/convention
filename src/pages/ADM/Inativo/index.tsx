/* eslint-disable no-restricted-syntax */
/* eslint-disable array-callback-return */
import React, { useCallback, useEffect, useState } from "react";
import { FlatList } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { HeaderContaponent } from "../../../components/HeaderComponent";
import { MembrosComponents } from "../../../components/MembrosCompornents";
import { Container, Title, Touch } from "./styles";
import { IProfileDto, IUserDtos } from "../../../dtos";
import { api } from "../../../services/api";

interface IUser {
   user: IUserDtos;
   profile: IProfileDto;
}

export function Inativo() {
   const [users, setUsers] = useState<IUser[]>([]);

   const handleInativar = useCallback((id: string, inativo: boolean) => {}, []);

   const listAllUser = React.useCallback(async () => {
      await api
         .get("user/list-all-user")
         .then((h) => {
            setUsers(h.data);
         })
         .catch((h) => {
            console.log("erro ao lstar users na tela de deleteUser", h);
         });
   }, []);

   useFocusEffect(
      useCallback(() => {
         listAllUser();
      }, [])
   );

   return (
      <Container>
         <HeaderContaponent title="Inativar um membro" type="tipo1" />

         <FlatList
            data={users}
            keyExtractor={(h) => h.user.id}
            renderItem={({ item: h }) => (
               <MembrosComponents
                  userName={h.user.nome}
                  user_avatar={h.profile.avatar}
                  oficio={h.profile.workName}
                  imageOfice={h.profile.logo}
                  pres={() => {
                     handleInativar(h.user.id, h.user.inativo);
                  }}
                  inativo={h.user.inativo}
               />
            )}
         />
      </Container>
   );
}
