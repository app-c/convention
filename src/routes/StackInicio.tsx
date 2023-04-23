import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Indication } from "../pages/Idication";
import { Home } from "../pages/Home";

const { Navigator, Screen } = createNativeStackNavigator();

export function StackIndication() {
   return (
      <Navigator
         screenOptions={{
            headerShown: false,
         }}
      >
         <Screen name="inicio" component={Home} />
         <Screen name="indication" component={Indication} />
      </Navigator>
   );
}
