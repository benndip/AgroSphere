import { View, Text, Image, FlatList, Keyboard, Pressable } from "react-native";
import React from "react";
import { Button, Fab, Input } from "native-base";
import { DEVICE_HEIGHT } from "../../constants/sizes";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../constants/colors";
import { Card } from "../../components";
import { farms } from "../../constants/farms";
import { useAppDispatch } from "../../redux/store";
import { setFarm } from "../../redux/features/farm/farmSlice";
import { paths } from "../../navigation/paths";

const Home = ({ navigation }: any) => {
  const dispatch = useAppDispatch();
  return (
    <View className="bg-white flex-1 p-5">
      <View className="flex-row justify-between items-center mt-2 pb-3">
        <Pressable
          onPress={() => {
            navigation.navigate(paths.SEARCH);
            Keyboard.dismiss();
          }}
          className="w-[82%] z-30"
        >
          <Input
            placeholder="search"
            w="100%"
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
            editable={false}
          />
        </Pressable>
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
            <Card
              {...item}
              onPress={() => {
                dispatch(setFarm(item));
                navigation.navigate(paths.DETAILS);
              }}
            />
          );
        }}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          gap: 18,
          paddingBottom: DEVICE_HEIGHT * 0.22,
        }}
        numColumns={2}
        keyExtractor={(item) => String(item?.id)}
        ListHeaderComponent={
          <>
            <View className="bg-primaryLightGreen rounded-2xl p-5 my-8 flex-row gap-2 justify-between">
              <View className="w-1/2">
                <Text className="text-primaryGreen font-extrabold text-2xl">
                  Accessible Crop Yield
                </Text>
                <Text className="text-black text-lg">
                  Get up to date market insights of your products
                </Text>
                <Button
                  className="mt-3"
                  w="70%"
                  rounded={10}
                  bg={colors.PRIMARY_GREEN}
                >
                  Call Now
                </Button>
              </View>
              <Image
                source={require("../../assets/images/farmer.png")}
                className="w-[160px] h-full"
              />
            </View>
            <View className="flex-row justify-between">
              <Text className="text-black font-semibold text-2xl">
                Featured Farms
              </Text>
              <Button
                bgColor="transparent"
                color={colors.PRIMARY_GREEN}
                variant="ghost"
              >
                <Text className="text-primaryGreen">See All</Text>
              </Button>
            </View>
            <Fab
              style={{
                backgroundColor: "#ffd94e",
                bottom: DEVICE_HEIGHT*0.14,
                borderColor: colors.PRIMARY_LIGHT_GREEN,
                borderWidth: 1
              }}
              icon={<Ionicons name="add" size={24} />}
              label={<Text className='text-black font-bold'>Create Farm</Text>}
              onPress={() => navigation.navigate(paths.CREATEFARM)}
            />
          </>
        }
      />
    </View>
  );
};

export default Home;
