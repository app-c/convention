import React from "react";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerContent } from "../components/DrawerComponent";
import theme from "../themes/theme";
import { useAuth } from "../hooks/AuthContext";
import { rotas, rotasAdm } from "../utils/rotas";
import { StackIndication } from "./StackInicio";

const { Navigator, Screen } = createDrawerNavigator();

export function DrawerApp() {
   const { user } = useAuth();
   // const { adm } = user.user;
   return (
      <Navigator
         drawerContent={DrawerContent}
         screenOptions={{
            headerShown: false,
            drawerInactiveTintColor: theme.colors.gray[2],
            drawerActiveTintColor: theme.colors.yellow[1],
         }}
      >
         <Screen
            options={{
               drawerIcon: ({ focused, size }) => (
                  <FontAwesome
                     name="home"
                     size={size}
                     color={
                        focused
                           ? theme.colors.yellow[1]
                           : theme.colors.yellow[2]
                     }
                  />
               ),
            }}
            name="INÍCIO"
            component={StackIndication}
         />
         {rotas.map((h) => (
            <Screen
               key={h.name}
               options={{
                  drawerIcon: ({ focused, size }) => (
                     <FontAwesome
                        name={h.icon}
                        size={size}
                        color={focused ? h.focus : h.color}
                     />
                  ),
               }}
               name={h.name}
               component={h.component}
            />
         ))}

         {user.adm &&
            rotasAdm.map((h) => (
               <Screen
                  key={h.name}
                  options={{
                     drawerIcon: ({ focused, size }) => (
                        <Feather name={h.icon} size={size} color="red" />
                     ),
                  }}
                  name={h.name}
                  component={h.component}
               />
            ))}
      </Navigator>
   );
}
