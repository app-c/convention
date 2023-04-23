import React from "react";
import { ActivityIndicator, Dimensions } from "react-native";
import { Container, Image } from "./styles";
import logo from "../../assets/logo.png";

export function Loading() {
   const w = Dimensions.get("window").width;
   return (
      <Container>
         <Image
            style={{
               resizeMode: "contain",
               width: w * 0.6,
            }}
            source={logo}
         />
         <ActivityIndicator size="large" />
      </Container>
   );
}
