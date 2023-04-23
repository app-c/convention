/* eslint-disable react/style-prop-object */
/* eslint-disable camelcase */
import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";
import "intl";
import "intl/locale-data/jsonp/pt-BR";
import React, { useRef } from "react";
import { ThemeProvider } from "styled-components/native";

import { NavigationContainer } from "@react-navigation/native";
import * as Notifications from "expo-notifications";
import * as Updates from "expo-updates";
import {
   Box,
   Button as ButtonBase,
   Center,
   NativeBaseProvider,
   Text,
} from "native-base";
import { AppState, LogBox, Modal, View } from "react-native";
import { QueryClient, QueryClientProvider } from "react-query";
import { useFonts } from "expo-font";
import { Loading } from "./src/components/Loading";
import AppProvider from "./src/hooks";
import { Route } from "./src/routes";
import { update, version } from "./src/utils/updates";
import { cor } from "./src/themes/colors";
import theme from "./src/themes/theme";

import bold_italic from "./fonts/bold_italic.ttf";
import bold from "./fonts/bold.ttf";
import extra_italic from "./fonts/extra_italic.ttf";
import high_bold from "./fonts/high_bold.ttf";

import high_italic from "./fonts/high_italic.ttf";

export default function App() {
   const appState = useRef(AppState.currentState);

   const [appVisible, setAppVisible] = React.useState(appState.current);
   const [showModalUpdate, setModalUpdates] = React.useState(false);

   Notifications.setNotificationHandler({
      handleNotification: async () => ({
         shouldShowAlert: true,
         shouldPlaySound: true,
         shouldSetBadge: false,
      }),
   });

   //* * UPDATE APLICATION ....................................................

   // const ChecUpdadeDevice = React.useCallback(async () => {
   //    const { isAvailable } = await Updates.checkForUpdateAsync();
   //    if (isAvailable) {
   //       setModalUpdates(true);
   //    }
   // }, []);

   // const ReloadDevice = React.useCallback(async () => {
   //    await Updates.fetchUpdateAsync();
   //    await Updates.reloadAsync();
   // }, []);

   // React.useEffect(() => {
   //    const event = AppState.addEventListener("change", (h) => {
   //       console.log(h);
   //       if (h === "active") {
   //          ChecUpdadeDevice();
   //       }
   //    });

   //    return () => {
   //       event.remove();
   //    };
   // }, [ChecUpdadeDevice]);

   //* * .......................................................................

   const [loaded] = useFonts({
      bold_italic,
      bold,
      extra_italic,
      high_bold,
      high_italic,
   });

   if (!loaded) {
      return <Loading />;
   }

   const queryClient = new QueryClient();

   return (
      <NavigationContainer>
         <AppProvider>
            <NativeBaseProvider>
               <ThemeProvider theme={theme}>
                  <QueryClientProvider client={queryClient}>
                     <View style={{ flex: 1 }}>
                        {/* <Modal visible={showModalUpdate}>
                           <Center p="5" bg={cor.}>
                              <Box>
                                 <Text
                                    fontFamily={theme.fonts.blac}
                                    fontSize="16"
                                 >
                                    UMA NOVA ATUALIZAÇÃO ESTA DISPONÍVEL
                                 </Text>
                                 {update.map((h) => (
                                    <Text>{h.title}</Text>
                                 ))}
                                 <Text>{version}</Text>
                              </Box>
                              <ButtonBase onPress={ReloadDevice} mt="10">
                                 ATUALIZAR
                              </ButtonBase>
                           </Center>
                        </Modal> */}
                        <Route />
                     </View>
                  </QueryClientProvider>
               </ThemeProvider>
            </NativeBaseProvider>
         </AppProvider>
      </NavigationContainer>
   );
}
