/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable camelcase */
import React, { useCallback, useState } from "react";
import { Feather } from "@expo/vector-icons";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Image, Modal, TouchableOpacity, View } from "react-native";
import { Container, Header, TitleHeader } from "./styles";
import { useAuth } from "../../hooks/AuthContext";
import theme from "../../themes/theme";
import logo from "../../assets/logo.png";

interface Props {
   title: string;
   type: "tipo1" | "tipo2" | "tipo3";
}

interface Res {
   prestador_id: string;
   consumidor: string;
   valor: string;
   descricao: string;
   nome: string;
}
export function HeaderContaponent({ title, type }: Props) {
   const { goBack } = useNavigation();

   return (
      <Container>
         <Header type={type}>
            <TouchableOpacity onPress={() => goBack()}>
               {type === "tipo1" && (
                  <Feather
                     name="arrow-left"
                     size={35}
                     color={theme.colors.gray[1]}
                  />
               )}

               {type === "tipo2" && (
                  <Feather
                     name="arrow-left"
                     size={35}
                     color={theme.colors.yellow[2]}
                  />
               )}
            </TouchableOpacity>

            <TitleHeader type={type}>{title} </TitleHeader>

            {type === "tipo1" && (
               <Image
                  style={{
                     width: RFPercentage(6),
                     height: RFPercentage(3.5),
                  }}
                  source={logo}
               />
            )}
         </Header>
      </Container>
   );
}
