import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignIn from "../pages/NoAuthPages/SignIn";
import SignUp from "../pages/NoAuthPages/SignUp";

const Stack = createStackNavigator();

function NoAuthRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}

export default NoAuthRoutes;
