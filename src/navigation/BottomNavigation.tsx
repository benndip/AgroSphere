import { Ionicons, MaterialIcons } from "@expo/vector-icons";
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
import { DEVICE_HEIGHT, DEVICE_WIDTH } from "../constants/sizes";
import { colors } from "../constants/colors";
import InventoryStack from "./stacks/InventoryStack";
import ProfileStack from "./stacks/ProfileStack";

const Tab = AnimatedTabBarNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={(props) => ({ headerShown: false })}
      appearance={{
        whenActiveShow: TabElementDisplayOptions.ICON_ONLY,
        floating: true,
        tabBarBackground: colors.PRIMARY_GREEN,
        dotSize: DotSize.SMALL,
        shadow: true,
      }}
      tabBarOptions={{
        activeTintColor: colors.PRIMARY_GREEN,
        inactiveTintColor: "#fff",
        // inactiveTintColor: GREY,
        activeBackgroundColor: "#fff",
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
          title: "Inspect",
        }}
      />
      <Tab.Screen
        name={paths.INVENTORYSTACK}
        component={InventoryStack}
        options={{
          tabBarIcon: ({ size, color, ...props }: any) => (
            <MaterialIcons
              name="auto-graph"
              size={size}
              color={color}
              {...props}
            />
          ),
          title: "Inventory",
        }}
      />
      <Tab.Screen
        name={paths.PROFILESTACK}
        component={ProfileStack}
        options={{
          tabBarIcon: ({ size, color, ...props }: any) => (
            <Ionicons name="person" size={size} color={color} {...props} />
          ),
          title: "Profile",
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
