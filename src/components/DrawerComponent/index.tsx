/* eslint-disable react/jsx-props-no-spreading */
import React, { useCallback, useState } from "react";

import {
   DrawerItemList,
   DrawerContentComponentProps,
} from "@react-navigation/drawer";

import { ScrollView, Text } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { HStack, VStack } from "native-base";
import { useAuth } from "../../hooks/AuthContext";
import { Avatar, Container, Header, LogOf, Title, TitleName } from "./styles";
import theme from "../../themes/theme";

type Props = DrawerContentComponentProps;

export function DrawerContent({ ...props }: Props) {
   const { signOut, user } = useAuth();

   return (
      <Container>
         <Header>
            <HStack maxW={200}>
               <Avatar source={{ uri: user.avatarUrl }} />
               <VStack ml={5}>
                  <Text
                     style={{ color: theme.colors.text, fontSize: RFValue(18) }}
                  >
                     Olá
                  </Text>
                  <TitleName>{user.nome} </TitleName>
               </VStack>
            </HStack>
         </Header>

         <ScrollView>
            <DrawerItemList {...props} />

            <LogOf
               onPress={() => {
                  signOut();
               }}
            >
               <Title style={{ color: theme.colors.green[2] }}>SAIR</Title>
            </LogOf>
         </ScrollView>
      </Container>
   );
}
