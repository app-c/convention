import { AntDesign } from "@expo/vector-icons";
import React from "react";
import theme from "../../themes/theme";
import { Container, Title } from "./styled";

interface Props {
   focus: boolean;
}

export function PostComponent({ focus }: Props) {
   return (
      <Container focus={focus}>
         <AntDesign
            style={{ position: "absolute" }}
            name="plus"
            size={35}
            color={theme.colors.gray[1]}
         />
      </Container>
   );
}
