import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Post } from "../pages/Post";
import { Feeds } from "../pages/Feeds";

const Stak = createNativeStackNavigator();
export function StackHome() {
   return (
      <Stak.Navigator screenOptions={{ headerShown: false }}>
         <Stak.Screen name="home" component={Feeds} />
         <Stak.Screen name="Post" component={Post} />
      </Stak.Navigator>
   );
}
