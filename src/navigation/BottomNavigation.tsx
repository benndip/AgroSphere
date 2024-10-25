import { Ionicons } from "@expo/vector-icons";
// import {
//   BottomTabBarProps,
//   BottomTabNavigationOptions,
//   createBottomTabNavigator,
// } from "@react-navigation/bottom-tabs";
import React from "react";
import {
  AnimatedTabBarNavigator,
  DotSize,
  TabElementDisplayOptions,
} from "react-native-animated-nav-tab-bar";
import { paths } from "./paths";
import HomeStack from "./stacks/HomeStack";
import InspectStack from "./stacks/InspectStack";
import { Home } from "../screens";
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../constants/sizes';
import { colors } from '../constants/colors';

const Tab = AnimatedTabBarNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      appearance={{
        whenActiveShow: TabElementDisplayOptions.ICON_ONLY,
        floating: true,
        tabBarBackground: colors.PRIMARY_GREEN_COLOR,
        dotSize: DotSize.SMALL,
        shadow: true,
      }}
      tabBarOptions={{
        activeTintColor: colors.PRIMARY_GREEN_COLOR,
        inactiveTintColor: "#fff",
        // inactiveTintColor: GREY,
        activeBackgroundColor: '#fff',
        tabStyle: {
          justifyContent: "center",
          height: DEVICE_HEIGHT * 0.09,
          alignSelf: "center",
          width: DEVICE_WIDTH * 0.7,
        },
      }}
    >
      <Tab.Screen
        name={paths.HOMESTACK}
        component={HomeStack}
        options={{
          tabBarIcon: ({ size, color, ...props }: any) => (
            <Ionicons name="home" size={size} color={color} {...props} />
          ),
          title: "Home",
        }}
      />
      <Tab.Screen
        name={paths.INSPECTSTACK}
        component={InspectStack}
        options={{
          tabBarIcon: ({ size, color, ...props }: any) => (
            <Ionicons name="search" size={size} color={color} {...props} />
          ),
          title: "Home",
        }}
      />
      <Tab.Screen
        name={paths.HOME}
        component={Home}
        options={{
          tabBarIcon: ({ size, color, ...props }: any) => (
            <Ionicons name="search" size={size} color={color} {...props} />
          ),
          title: "Home",
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
