import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect, useRef } from "react";
import { BackHandler, ToastAndroid } from "react-native";
import { Onboarding, Splash } from "../screens";
import BottomNavigation from "./BottomNavigation";
import { paths } from "./paths";
import AuthStack from "./stacks/AuthStack";
import { RootStackParamList } from "./types";
import { customNavHeader, navOptions } from "./navOptions";

const Stack = createNativeStackNavigator<RootStackParamList>();

const MainNavigation = () => {
  const navigationRef = useRef<any>();

  let clicks = 0;

  const backAction = () => {
    if (navigationRef.current.getCurrentRoute().name === "Home") {
      if (clicks > 0) {
        BackHandler.exitApp();
      } else {
        ToastAndroid.show("click again to Exit App", ToastAndroid.SHORT);
        clicks++;
      }
      setTimeout(() => {
        clicks = 0;
      }, 1000);
      return true;
    }
    return false;
  };

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);
  }, []);
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: "slide_from_right",
        }}
        initialRouteName={paths.ONBOARDING}
      >
        <Stack.Screen name={paths.SPLASH} component={Splash} />
        <Stack.Screen name={paths.AUTHSTACK} component={AuthStack} />
        <Stack.Screen name={paths.ONBOARDING} component={Onboarding} />
        <Stack.Screen
          name={paths.BOTTOMNAVIGATION}
          component={BottomNavigation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
