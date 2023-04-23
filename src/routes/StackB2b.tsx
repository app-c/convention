import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Sucess } from "../pages/Sucess";
import { B2B } from "../pages/B2B";
import { InvitOrderB2b } from "../pages/InvitOrderB2b";

const Stak = createNativeStackNavigator();

export function StackB2b() {
   return (
      <Stak.Navigator screenOptions={{ headerShown: false }}>
         <Stak.Screen name="b2b" component={B2B} />
         <Stak.Screen name="orderB2b" component={InvitOrderB2b} />
         <Stak.Screen name="sucess" component={Sucess} />
      </Stak.Navigator>
   );
}
