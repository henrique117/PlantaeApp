import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import LoginNavigation from "./login.navigation";
import { useAuth } from "../hook/auth";
import TabNavigation from "./tab.navigation";

export default function Navigation() {
  const { access_token } = useAuth();
  return (
  <NavigationContainer>
    {access_token ? <TabNavigation /> : <LoginNavigation />}
  </NavigationContainer>
  );
 }
