import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import NoAuthRoutes from "./NoAuthRoutes";

const Tab = createBottomTabNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <NoAuthRoutes />
    </NavigationContainer>
  );
}

export default Routes;
