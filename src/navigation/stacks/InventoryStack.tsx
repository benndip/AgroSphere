import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { paths } from "../paths";
import { Inventory, Login, Signup } from "../../screens";

const Stack = createNativeStackNavigator();

const InventoryStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={paths.INVENTORY} component={Inventory} />
    </Stack.Navigator>
  );
};

export default InventoryStack;
