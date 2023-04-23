import React from "react";
import { Text, Box, Center, View, HStack, VStack } from "native-base";
import { Dimensions, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Button } from "../Button";
import { Circle, Container } from "./styles";
import theme from "../../themes/theme";

const { colors } = theme;

const wt = Dimensions.get("window").width;

interface IProps {
   selectFail: boolean;
   selectHand: boolean;
   selectHanding: boolean;
   presHand: () => void;
   presHanding: () => void;
   fails: () => void;
   pres: () => void;
   closedModal: () => void;
}

export function ModalIndication({
   selectHand,
   selectFail,
   selectHanding,
   presHand,
   presHanding,
   fails,
   pres,
   closedModal,
}: IProps) {
   return (
      <Box borderRadius="8" p="5" bg={colors.gray[2]} w="300">
         <Center mb="3">
            <HStack space={10}>
               <Text>Escolha uma opção</Text>
               <TouchableOpacity onPress={closedModal}>
                  <AntDesign
                     name="closecircle"
                     size={25}
                     color={theme.colors.yellow[1]}
                  />
               </TouchableOpacity>
            </HStack>
         </Center>

         <VStack space={3}>
            <HStack>
               <Container onPress={presHand}>
                  <Circle select={selectHand} />
               </Container>
               <Text mt="1" ml="2">
                  Fechei negócio
               </Text>
            </HStack>

            <HStack>
               <Container onPress={presHanding}>
                  <Circle select={selectHanding} />
               </Container>
               <Text mt="1" ml="2">
                  Estou negociando
               </Text>
            </HStack>

            <HStack>
               <Container onPress={fails}>
                  <Circle select={selectFail} />
               </Container>
               <Text mt="1" ml="2">
                  Não deu certo
               </Text>
            </HStack>
         </VStack>

         <Center mt="2">
            <Button pres={pres} title="Ok" />
         </Center>
      </Box>
   );
}
