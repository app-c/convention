import React, { useState } from "react";
import { Loading } from "../components/Loading";
import { useAuth } from "../hooks/AuthContext";
import { SingIn } from "../pages/LogIn";
import { DrawerApp } from "./DrawerApp";

export function Route() {
   const { user, loading, firstLogin } = useAuth();

   if (loading) {
      return <Loading />;
   }

   return <>{user ? <DrawerApp /> : <SingIn />}</>;
}
