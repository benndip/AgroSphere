import { Ionicons } from "@expo/vector-icons";
import { Button, Input } from "native-base";
import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { DEVICE_HEIGHT } from "../../constants/sizes";
import { colors } from "./../../constants/colors";

const CreateFarm = () => {
  const [crop, setCrop] = useState("");
  const [cropList, setCropList] = useState<string[]>([]); // Manage the list of crops
  const addCrop = () => {
    if (crop.trim()) {
      setCropList([...cropList, crop]);
      setCrop(""); // Clear the input field
    }
  };
  const removeCrop = (index: number) => {
    const newList = cropList.filter((_, i) => i !== index);
    setCropList(newList);
  };
  return (
    <View className="flex-1 p-5 bg-white flex-start">
      <ScrollView
        contentContainerStyle={{
          paddingBottom: DEVICE_HEIGHT * 0.05,
        }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ padding: 20, flex: 1 }}>
          <Text className="text-3xl font-bold color-black mb-2">
            Create Farm
          </Text>
          <Text className="text-primaryGray">
            Create an account to unlock exclusive features and get started!
          </Text>
          <View style={{ gap: 16, marginBottom: 2, marginTop: 30 }}>
            <Text className="text-black font-semibold">Crop List </Text>
            <Input
              placeholder="Add Crop"
              value={crop}
              onChangeText={(text: string) => setCrop(text)}
              style={{
                height: DEVICE_HEIGHT * 0.064,
              }}
              rounded={10}
              rightElement={
                <Button
                  style={{
                    backgroundColor: colors.PRIMARY_GREEN,
                  }}
                  className="mr-1"
                  rounded={10}
                  onPress={addCrop}
                >
                  <Ionicons color="#fff" name="add" size={24} />
                </Button>
              }
            />
            <ScrollView>
              {cropList.map((item, index) => (
                <View
                  key={index}
                  className="mb-3 flex-row items-center justify-between py-2"
                >
                  <Text>{item}</Text>
                  {/* Remove Button */}
                  <TouchableOpacity onPress={() => removeCrop(index)}>
                    <Ionicons
                      name="close-circle-outline"
                      size={24}
                      color="red"
                    />
                  </TouchableOpacity>
                </View>
              ))}
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default CreateFarm;
