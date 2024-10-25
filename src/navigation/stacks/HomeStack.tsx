import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Home } from "../../screens";
import { paths } from "../paths";
import { HomeStackParamList } from "../types";
import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../constants/colors';

const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={(props) => ({
        headerShown: props.route.name ? true : false,
        headerLeft: () =>
          props.route.name === paths.HOME && (
            <View className="py-3">
              <Text className="font-bold text-2xl text-black">Hi Wilson</Text>
              <Text className="text-primaryGray">Enjoy your services</Text>
            </View>
          ),
        headerRight: (props: any) => (
          <TouchableOpacity
            style={{
              justifyContent: "center",
            }}
            className=""
            // onPress={() => navigation.goBack()}
          >
            <View className="w-2 h-2 z-10 rounded bg-red-400 absolute right-2 top-0" />
            <Ionicons
              name="notifications"
              size={26}
              color={colors.PRIMARY_GREEN_COLOR}
            />
          </TouchableOpacity>
        ),
        headerTitle: props.route.name === paths.HOME ? "" : props.route.name,
        headerShadowVisible: false,
      })}
      // initialRouteName={paths.DEPOSITSUMMARY}
    >
      <Stack.Screen name={paths.HOME} component={Home} />
    </Stack.Navigator>
  );
};

export default HomeStack;
