import React, { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
// import { timeIntervals } from "../../constants/intervals";
import { Ionicons } from "@expo/vector-icons";
import { LineChart, LineChartProvider } from "react-native-wagmi-charts";
import { twMerge } from "tailwind-merge";
import CarouselComponent from "../../components/carousel/Carousel.component";
import { colors } from "../../constants/colors";
import { SupplyPeriod } from "../../constants/farms";
import { DEVICE_HEIGHT, DEVICE_WIDTH } from "../../constants/sizes";
import { useAppSelector } from "../../redux/store";
import { Button } from "native-base";

export const timeIntervals = [
  { label: "24H", hours: 24 },
  { label: "1W", hours: 24 * 7 },
  { label: "1M", hours: 24 * 7 * 4 },
  { label: "1Y", hours: 24 * 7 * 4 * 12 },
  { label: "All", hours: null },
];

const generateRandomFluctuatingData = (numPoints: any) => {
  let data = [];
  let baseTimestamp = Date.now();
  let baseValue = 33500;
  for (let i = 0; i < numPoints; i++) {
    let fluctuation = Math.random() * 500 - 250;
    let value = baseValue + fluctuation;
    let timestamp = baseTimestamp - i * 60 * 60 * 1000;
    data.push({ timestamp, value });
  }
  return data.reverse();
};

const getSampledData = (data: any) => {
  if (data.length <= 5) return data;
  const step = Math.floor(data.length / 5);
  return data.filter((_: any, index: any) => index % step === 0).slice(0, 5);
};

const Details = ({ route }: any) => {
  const [currentInterval, setCurrentInterval] = useState(
    timeIntervals[0]?.hours
  );
  const [data, setData] = useState(generateRandomFluctuatingData(100));

  const { farm } = useAppSelector((state) => state.farm);
  const chartChangedColor = colors.PRIMARY_GREEN;
  useEffect(() => {
    setData((prevData) => {
      const newData = [...prevData];
      const lastValue = newData[newData.length - 1].value;
      const newValue = lastValue + (Math.random() * 500 - 250);
      const newTimestamp = Date.now();
      newData.push({ timestamp: newTimestamp, value: newValue });
      return newData.slice(-100);
    });
  }, [currentInterval]);

  const filteredData = currentInterval
    ? data.filter(
        (item) =>
          item.timestamp >= Date.now() - currentInterval * 60 * 60 * 1000
      )
    : data;

  // Get 5 evenly spaced points for clean readability
  const displayedData = getSampledData(filteredData);
  const [descriptionLines, setDescriptionLines] = useState<number | undefined>(
    3
  );

  return (
    <View className="flex-1 bg-white  p-5">
      <ScrollView
        contentContainerStyle={{
          paddingBottom: DEVICE_HEIGHT * 0.085,
        }}
        showsVerticalScrollIndicator={false}
      >
        {/* <VideoPlayer /> */}
        <View style={{ height: DEVICE_HEIGHT * 0.29 }}>
          <CarouselComponent data={farm?.snapshots} />
        </View>
        <View className="flex-row justify-between mt-5">
          <Text className="text-black font-bold text-2xl mt-4 mb-6">
            {farm?.name}
          </Text>
          <Button
            className="bg-green-800 rounded-2xl w-[30%]"
            rounded={10}
            size={"sm"}
            height={12}
            style={{ backgroundColor: "green", paddingHorizontal: 20 }}
          >
            Contact
          </Button>
        </View>
        {/* <ImageBackground source={require('../../assets/images/grid.jpg')} borderRadius={16} blurRadius={5}> */}
        <View className="bg-primaryLightGreen py-3 rounded-md">
          <View className="mb-4 flex-row justify-between items-center px-1">
            {timeIntervals.map((item) => (
              <TouchableOpacity
                key={item.label}
                // activeOpacity={0.9}
                className="p-2 px-5 rounded-xl"
                style={[
                  {
                    backgroundColor:
                      item.hours === currentInterval
                        ? "rgba(255,255,255,1)"
                        : "transparent",
                  },
                ]}
                onPress={() => setCurrentInterval(item.hours)}
              >
                <Text
                  className={twMerge(
                    "text-primaryGray",
                    item.hours === currentInterval && "text-black"
                  )}
                >
                  {item.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <LineChartProvider data={displayedData}>
            <LineChart height={DEVICE_WIDTH / 2} width={DEVICE_WIDTH}>
              <LineChart.Path color={chartChangedColor} />
              <LineChart.CursorCrosshair color={chartChangedColor} />
            </LineChart>
          </LineChartProvider>
        </View>
        {/* </ImageBackground> */}
        <View className="gap-7 flex-col mb-7 mt-8">
          <View className="flex-row justify-between items-center">
            <Text className="text-primaryGreen">Available in Stock:</Text>
            <Text className="text-black font-bold text-2xl">
              {farm?.available} {farm.measurementUnit}
            </Text>
          </View>
          <View className="flex-row justify-between items-center">
            <Text className="text-primaryGreen">Avg Available Per Year:</Text>
            <Text className="text-black font-bold text-2xl">
              {farm.averageQuantityAvailablePerYear} {farm.measurementUnit} / yr
            </Text>
          </View>
          <View className="flex-row justify-between items-center">
            <Text className="text-primaryGreen">Sales Per Year:</Text>
            <Text className="text-black font-bold text-2xl">
              {farm?.salesPerYear} {farm.measurementUnit}
            </Text>
          </View>
          <View className="flex-row justify-between items-center">
            <Text className="text-primaryGreen">percentage Loss:</Text>
            <Text className="text-red-500 text-lg font-bold">
              <Ionicons name="caret-down" size={16} />
              {farm.percentageLossPerYear} %
            </Text>
          </View>
          <View className="mb-0">
            <Text className="text-primaryGreen mb-6">Supply Periods:</Text>
            <View className="gap-4">
              {farm.supplyPeriods?.map((item: SupplyPeriod) => (
                <View className="p-5 gap-5 bg-gray-50 rounded-2xl">
                  <View className="flex-row justify-between">
                    <Text>Day: </Text>
                    <Text className="text-primaryGray font-bold text-lg">
                      {item.day}
                    </Text>
                  </View>
                  <View className="flex-row justify-between">
                    <Text>Open: </Text>
                    <Text className="text-primaryGray font-bold text-lg">
                      {item.open}
                    </Text>
                  </View>
                  <View className="flex-row justify-between">
                    <Text>Close: </Text>
                    <Text className="text-primaryGray font-bold text-lg">
                      {item.close}
                    </Text>
                  </View>
                </View>
              ))}
            </View>
          </View>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() =>
              setDescriptionLines(descriptionLines === 3 ? undefined : 3)
            }
          >
            <Text
              numberOfLines={descriptionLines}
              style={{ color: colors.PRIMARY_GRAY }}
            >
              .What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Details;
