import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Inspect } from "../../screens";
import { paths } from "../paths";

const Stack = createNativeStackNavigator();

const InspectStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: "slide_from_right",
      }}
      // initialRouteName={paths.SIGNUP}
    >
      <Stack.Screen name={paths.INSPECT} component={Inspect} />
    </Stack.Navigator>
  );
};

export default InspectStack;
