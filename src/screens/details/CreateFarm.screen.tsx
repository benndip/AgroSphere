import { View, Text, ScrollView } from "react-native";
import React from "react";
import { DEVICE_HEIGHT } from "../../constants/sizes";
import { Input } from "native-base";
import { Ionicons } from "@expo/vector-icons";

const CreateFarm = () => {
  return (
    <View className="flex-1 p-5 bg-white flex-start">
      <ScrollView
        contentContainerStyle={{
          paddingTop: DEVICE_HEIGHT * 0.2,
          paddingBottom: DEVICE_HEIGHT * 0.05,
        }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ padding: 20, flex: 1}}>
          <Text className="text-3xl font-bold color-black mb-2">Create Farm</Text>
          <Text className="text-primaryGray">
            Create an account to unlock exclusive features and get started!
          </Text>
          <View style={{ gap: 16, marginBottom: 2, marginTop: 30 }}>
            <Input
              placeholder="Name"
              keyboardType="email-address"
              leftElement={
                <Ionicons name="mail-outline" className="ml-3" size={23} />
              }
              style={{
                height: DEVICE_HEIGHT * 0.064,
              }}
              rounded={10}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default CreateFarm;
