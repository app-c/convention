import React from "react";
import { Text, Box, Center } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import theme from "../../themes/theme";

interface Props {
   pres: () => void;
   quantity: number;
}

export function CartaMessagem({ pres, quantity }: Props) {
   return (
      <Box>
         <TouchableOpacity onPress={pres}>
            <Center
               top="1"
               bg={theme.colors.yellow[2]}
               borderRadius="30"
               size="5"
            >
               <Text
                  fontFamily={theme.fonts.bold}
                  color={theme.colors.green[1]}
               >
                  {quantity}
               </Text>
            </Center>
            <MaterialCommunityIcons
               color={theme.colors.yellow[1]}
               size={40}
               name="email-outline"
            />
         </TouchableOpacity>
      </Box>
   );
}
