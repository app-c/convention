import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Sucess } from "../pages/Sucess";
import { InvitOrderTransaction } from "../pages/InvitOrderTransaction";
import { Transaction } from "../pages/transaction";

const Stak = createNativeStackNavigator();
export function StacKMembros() {
   return (
      <Stak.Navigator screenOptions={{ headerShown: false }}>
         <Stak.Screen name="Consumo" component={InvitOrderTransaction} />
         <Stak.Screen name="Transaction" component={Transaction} />
         <Stak.Screen name="sucess" component={Sucess} />
      </Stak.Navigator>
   );
}
