import { TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../constants/colors";

export const navOptions = {
  headerShadowVisible: false,
  headerShown: true,
};

export const customNavHeader = (navigation: any) => {
  return {
    headerShown: true,
    headerShadowVisible: false,
    headerStyle: {
      backgroundColor: "#fff"
    },
    headerLeft: (props: any) => (
      <TouchableOpacity
        style={{
          paddingRight: 40,
          height: 50,
          justifyContent: "center",
        }}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="chevron-back" size={22} />
      </TouchableOpacity>
    ),
    headerRight: (props: any) => (
      <TouchableOpacity
        style={{
          justifyContent:'center'
        }}
        className=""
        onPress={() => navigation.goBack()}
      >
        <View className="w-2 h-2 z-10 rounded bg-red-400 absolute right-2 top-0" />
        <Ionicons name="notifications" size={26} color={colors.PRIMARY_GREEN_COLOR} />
      </TouchableOpacity>
    ),
  };
};
