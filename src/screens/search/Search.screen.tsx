import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { Button, Input } from "native-base";
import { DEVICE_HEIGHT, DEVICE_WIDTH } from "../../constants/sizes";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../constants/colors";
import { farms } from "../../constants/farms";

const Search = () => {
  return (
    <View className="flex-1 bg-white p-5">
      <View className="flex-row justify-between items-center mt-2 pb-3">
        <Input
          placeholder="search"
          w="82%"
          rounded={10}
          size="md"
          height={DEVICE_HEIGHT * 0.06}
          InputLeftElement={
            <Ionicons
              size={22}
              color={colors.PRIMARY_GRAY}
              className="ml-3"
              name="search"
            />
          }
        />
        <Button
          bgColor={colors.PRIMARY_GREEN}
          rounded={8}
          onPress={() => console.log("hello world")}
        >
          <Ionicons name="filter" size={24} color="#fff" />
        </Button>
      </View>
      <FlatList
        data={farms}
        renderItem={({ item }) => {
          return (
            <ImageBackground
              source={item.cover}
              style={{
                width: DEVICE_WIDTH * 0.44,
                height: DEVICE_HEIGHT * 0.27,
                backgroundColor: "#fff",
              }}
              borderRadius={16}
              className="p-4 justify-end"
            >
              <View className='bg-white p-2 rounded-lg'>
                <Text>{item.name}</Text>
              </View>
            </ImageBackground>
          );
        }}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          gap: 18,
          paddingBottom: DEVICE_HEIGHT * 0.12,
          paddingTop: 20
        }}
        numColumns={2}
        keyExtractor={(item) => String(item?.id)}
      />
    </View>
  );
};

export default Search;
