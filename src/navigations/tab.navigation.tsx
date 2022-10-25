import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CultivosScreen, CalcScreen } from "../screens";
import EditarPerfilNavigation from "./perfil.navigation";
import colors from "../styles/colors";
import { FontAwesome5, MaterialIcons, Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: colors.white},
        tabBarActiveBackgroundColor: colors.white,
        tabBarActiveTintColor: colors.secondary,
        tabBarInactiveBackgroundColor: colors.white,
        tabBarInactiveTintColor: colors.gray,
      }}
    >
      <Tab.Screen
        name="Perfil"
        component={EditarPerfilNavigation}
        options={{
         headerTitle: 'Plantae',
          tabBarIcon: () => (
            <FontAwesome5 name="user-circle" size={24} color={colors.darkgray}/>
          ),
        }}
      />

    <Tab.Screen
        name="Cultivos"
        component={CultivosScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <MaterialIcons name="grass" size={24} color={colors.darkgray} />
          ),
        }}
      />

    <Tab.Screen
        name="Ranking"
        component={CalcScreen}
        options={{
          headerShown: true,
          tabBarIcon: () => (
            <Ionicons name="podium" size={24} color={colors.darkgray} />
          ),
        }}
      /> 
    </Tab.Navigator>
  );
}
