import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { DEVICE_HEIGHT, DEVICE_WIDTH } from "../../constants/sizes";
import { useNavigation } from "@react-navigation/native";
import { paths } from "../../navigation/paths";
import { FarmData } from "../../constants/farms";

export interface CardProps {
  id?: number | string;
  name: string;
  crops: string[];
  unit_price: number;
  measurementUnit: "Ton" | "Kg" | "Litre";
  currency: "Xaf" | "Usd";
  cover?: string | ImageSourcePropType | any;
  onPress?: () => void
}

const Card = (props: CardProps) => {
  return (
    <TouchableOpacity
      style={{
        width: DEVICE_WIDTH * 0.44,
        height: DEVICE_HEIGHT * 0.27,
        backgroundColor: "#fff",
        borderWidth: 0.5,
      }}
      className="rounded-2xl border border-primaryGray"
      activeOpacity={0.9}
      onPress={props?.onPress}
    >
      <View
        style={{
          flex: 2,
          overflow: "hidden",
        }}
      >
        <Image source={props.cover} className="w-full h-full rounded-t-2xl" />
      </View>
      <View
        style={{
          flex: 1,
        }}
        className="p-4 pb-5 gap-2"
      >
        <Text className="text-black font-bold">{props.name}</Text>
        <Text className="text-black font-normal" numberOfLines={1}>
          <Text className="font-bold">Crops: </Text>
          {props.crops?.map((item) => `${item}, `)}
        </Text>
        <Text className="text-black font-normal">
          <Text className="font-bold">
            {props.unit_price} {props.currency}/{" "}
          </Text>
          <Text className="text-primaryGray">{props.measurementUnit}</Text>
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
