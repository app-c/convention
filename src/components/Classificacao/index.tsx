/* eslint-disable react/destructuring-assignment */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { ActivityIndicator, Alert, View } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { useQuery } from "react-query";
import { useAuth } from "../../hooks/AuthContext";
import {
   BoxContainer,
   BoxEventos,
   BoxPosition,
   Container,
   Title,
} from "./styles";
import { api } from "../../services/api";

interface Props {
   compras: Tips;
   vendas: Tips;
   presenca: Tips;
   indication: Tips;
   b2b: Tips;
}

interface Tips {
   id: string;
   nome: string;
   pontos: number;
   rank: number;
}

interface IProps {
   ptCon: number;
   rkCon: number;
   ptVen: number;
   rkVen: number;
   ptInd: number;
   rkInd: number;
   ptPres: number;
   rkPres: number;
   ptPad: number;
   rkPad: number;
   ptB2b: number;
   rkB2b: number;
}

export function Classificacao({
   ptCon,
   rkCon,
   ptVen,
   rkVen,
   ptInd,
   rkInd,
   ptPres,
   rkPres,
   ptPad,
   rkPad,
   ptB2b,
   rkB2b,
}: IProps) {
   return (
      <Container>
         <BoxEventos>
            <View
               style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginBottom: 8,
               }}
            >
               <BoxContainer>
                  <Title>COMPRAS</Title>
                  <Title>{ptCon} pts</Title>
               </BoxContainer>

               <BoxPosition>
                  <Title>{rkCon}</Title>
               </BoxPosition>
            </View>

            <View
               style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginBottom: 8,
               }}
            >
               <BoxContainer>
                  <Title>VENDAS</Title>
                  <Title>{ptVen} pts</Title>
               </BoxContainer>

               <BoxPosition>
                  <Title>{rkVen}</Title>
               </BoxPosition>
            </View>

            <View
               style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginBottom: 8,
               }}
            >
               <BoxContainer>
                  <Title>Indicações</Title>
                  <Title>{ptInd} pts</Title>
               </BoxContainer>

               <BoxPosition>
                  <Title>{rkInd}</Title>
               </BoxPosition>
            </View>

            <View
               style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginBottom: 8,
               }}
            >
               <BoxContainer>
                  <Title>Presença</Title>
                  <Title>{ptPres} pts</Title>
               </BoxContainer>

               <BoxPosition>
                  <Title>{rkPres}</Title>
               </BoxPosition>
            </View>

            <View
               style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginBottom: 8,
               }}
            >
               <BoxContainer>
                  <Title>Padrinho</Title>
                  <Title>{ptPad}pts</Title>
               </BoxContainer>

               <BoxPosition>
                  <Title>{rkPad}</Title>
               </BoxPosition>
            </View>

            <View
               style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginBottom: 8,
               }}
            >
               <BoxContainer>
                  <Title>B2B</Title>
                  <Title>{ptB2b}pts</Title>
               </BoxContainer>

               <BoxPosition>
                  <Title>{rkB2b}</Title>
               </BoxPosition>
            </View>
         </BoxEventos>
      </Container>
   );
}
