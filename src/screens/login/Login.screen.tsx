import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { DEVICE_HEIGHT } from "../../constants/sizes";
import { Button, Input } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../constants/colors";
import { paths } from "../../navigation/paths";

const Login = ({ navigation }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(false);
  return (
    <ImageBackground
      style={{
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 10,
      }}
      source={require("../../assets/images/bg.png")}
    >
      <StatusBar translucent style="light" />
      <ScrollView
        contentContainerStyle={{
          paddingTop: DEVICE_HEIGHT * 0.2,
          paddingBottom: DEVICE_HEIGHT * 0.05,
        }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ padding: 20 }}>
          <Text className="text-3xl font-bold color-black mb-2">
            Welcome Back!
          </Text>
          <Text className="text-primaryGray">
            Log in to continue exploring and managing your personalized
            experience.{" "}
          </Text>
          <View style={{ gap: 16, marginBottom: 2, marginTop: 30 }}>
            <Input
              placeholder="Email"
              onChangeText={(text: string) => setEmail(text)}
              value={email}
              keyboardType="email-address"
              leftElement={
                <Ionicons
                  name="mail-outline"
                  color={email?.length > 0 ? "#fff" : colors.PRIMARY_GRAY}
                  className="ml-3"
                  size={23}
                />
              }
              style={{
                height: DEVICE_HEIGHT * 0.064,
              }}
              rounded={10}
            />
            <Input
              placeholder="Password"
              value={password}
              onChangeText={(text: string) => setPassword(text)}
              leftElement={
                <Ionicons
                  name="lock-closed-outline"
                  color={password?.length > 0 ? "#fff" : colors.PRIMARY_GRAY}
                  className="ml-3"
                  size={23}
                />
              }
              secureTextEntry={secureTextEntry}
              rightElement={
                <TouchableOpacity
                  onPress={() => setSecureTextEntry(!secureTextEntry)}
                >
                  {secureTextEntry ? (
                    <Ionicons
                      name="eye"
                      color={
                        password?.length > 0 ? "#fff" : colors.PRIMARY_GRAY
                      }
                      className="mr-3"
                      size={23}
                    />
                  ) : (
                    <Ionicons
                      name="eye-off"
                      color={
                        password?.length > 0 ? "#fff" : colors.PRIMARY_GRAY
                      }
                      className="mr-3"
                      size={23}
                    />
                  )}
                </TouchableOpacity>
              }
              rounded={10}
              style={{
                height: DEVICE_HEIGHT * 0.064,
              }}
            />
          </View>
          <TouchableOpacity
            style={{ alignSelf: "flex-end", marginTop: 5 }}
            onPress={() => null}
          >
            <Text className="text-blue-700">Forgot Password?</Text>
          </TouchableOpacity>
          <Button
            style={{
              marginTop: DEVICE_HEIGHT * 0.05,
              height: DEVICE_HEIGHT * 0.064,
              backgroundColor: "#01883e",
            }}
            rounded={10}
          >
            Login
          </Button>
          <View className="flex-row items-center self-center mt-7">
            <Text className="text-blue-700 mr-2">Don't Have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate(paths.SIGNUP)}>
              <Text>Signup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Login;

const styles = StyleSheet.create({});
