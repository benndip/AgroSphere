import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { paths } from "../paths";
import { AuthStackParamList } from "../types";
import { Login, Signup } from "../../screens";

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: "slide_from_right",
      }}
      // initialRouteName={paths.SIGNUP}
    >
      <Stack.Screen name={paths.LOGIN} component={Login} />
      <Stack.Screen name={paths.SIGNUP} component={Signup} />
    </Stack.Navigator>
  );
};

export default AuthStack;
