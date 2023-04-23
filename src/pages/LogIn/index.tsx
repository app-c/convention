/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback, useRef, useState } from "react";

import { Form } from "@unform/mobile";
import { FormHandles } from "@unform/core";
import { Alert, ScrollView } from "react-native";
import {
   FormControl,
   WarningOutlineIcon,
   Input,
   Text,
   Box,
   Center,
   Modal as Md,
   Button as ButtonBase,
   VStack,
} from "native-base";
import { BoxInput, BoxLogo, Container, Logo, Title } from "./styles";
// import { Input } from "../../components/Inputs";
import { Button } from "../../components/Button";
import logo from "../../assets/logo.png";
import { useAuth } from "../../hooks/AuthContext";
import theme from "../../themes/theme";
import { version } from "../../utils/updates";

export function SingIn() {
   const { signIn } = useAuth();
   const formRef = useRef<FormHandles>(null);

   const [membro, setMembro] = useState("");
   const [pass, setPass] = useState("");
   const [errEmail, setErrEmail] = useState(false);
   const [errPass, setErrPass] = useState(false);

   const handleSubmit = useCallback(async () => {
      if (membro === "" || pass === "") {
         return Alert.alert("Login", "forneça um email e uma senha");
      }

      setErrEmail(false);
      setErrPass(false);

      await signIn({
         membro,
         senha: pass,
      }).catch((h) => {
         console.log(h);
         Alert.alert("Erro ao logar com sua conta", h.response.data.message);
      });
   }, [membro, pass, signIn]);

   return (
      <Container behavior="position">
         <Text
            style={{
               alignSelf: "flex-end",
               color: theme.colors.green[1],
               fontSize: 12,
               marginRight: 20,
               top: 30,
            }}
         >
            version: {version}
         </Text>
         <BoxLogo>
            <Logo source={logo} />
         </BoxLogo>

         <BoxInput>
            <Form ref={formRef} onSubmit={handleSubmit}>
               <FormControl isInvalid={errEmail} w="75%" maxW="300px">
                  <FormControl.Label>MEMBRO</FormControl.Label>
                  <Input
                     w="100%"
                     color={theme.colors.green[2]}
                     type="text"
                     autoCapitalize="none"
                     keyboardType="email-address"
                     onChangeText={(h) => setMembro(h)}
                     selectionColor={theme.colors.green[2]}
                     borderColor={theme.colors.gray[3]}
                     _focus={{
                        borderColor: theme.colors.green[1],
                        bg: theme.colors.gray[1],
                     }}
                  />
                  <FormControl.ErrorMessage
                     leftIcon={<WarningOutlineIcon size="xs" />}
                  >
                     Verefique seu email e tente novamente
                  </FormControl.ErrorMessage>
               </FormControl>

               <FormControl mt={8} isInvalid={errPass} w="75%" maxW="300px">
                  <FormControl.Label>SENHA</FormControl.Label>
                  <Input
                     w="100%"
                     color={theme.colors.green[2]}
                     onChangeText={(h) => setPass(h)}
                     value={pass}
                     selectionColor={theme.colors.green[2]}
                     secureTextEntry
                     borderColor={theme.colors.gray[3]}
                     _focus={{
                        borderColor: theme.colors.green[1],
                        bg: theme.colors.gray[1],
                     }}
                  />
                  <FormControl.ErrorMessage
                     leftIcon={<WarningOutlineIcon size="xs" />}
                  >
                     Try different from previous passwords.
                  </FormControl.ErrorMessage>
               </FormControl>

               <Center mt="30">
                  <Button
                     pres={() => formRef.current?.submitForm()}
                     title="ENTRAR"
                  />
               </Center>
            </Form>
         </BoxInput>
      </Container>
   );
}
