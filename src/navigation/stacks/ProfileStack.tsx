import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Profile } from "../../screens";
import { paths } from "../paths";

const Stack = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={paths.PROFILE} component={Profile} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
