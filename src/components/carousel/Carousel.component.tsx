import React, { useState } from "react";
import { Image, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { SnapShot } from "../../constants/farms";
import { DEVICE_HEIGHT, DEVICE_WIDTH } from "../../constants/sizes";
import VideoPlayer from "../video-player/VideoPlayer.component";
import { twMerge } from "tailwind-merge";

const CarouselComponent = ({ data }: SnapShot | any) => {
  const [index, setIndex] = useState(0);
  const renderIndicators = Array.from({
    length: data?.length < 3 ? data?.length : 3,
  }).map((_, myIndex) => (
    <View
      className={twMerge(
        "h-2 rounded-full w-7 bg-gray-500",
        index === myIndex && "bg-white"
      )}
    />
  ));
  return (
    <View style={{ flex: 1 }}>
      <Carousel
        loop
        width={DEVICE_WIDTH * 0.9}
        height={DEVICE_HEIGHT * 0.29}
        autoPlayInterval={4000}
        autoPlay={true}
        data={data?.slice(0, 3)}
        scrollAnimationDuration={2000}
        onSnapToItem={(index) => setIndex(index)}
        renderItem={({ item }: any) => (
          <>
            {item?.isVideo ? (
              <View
                className="bg-red-500 rounded-xl overflow-hidden"
                style={{ height: DEVICE_HEIGHT * 0.32 }}
              >
                <VideoPlayer url={item?.url} />
              </View>
            ) : (
              <Image
                source={item?.url}
                style={{ width: "100%", height: "100%" }}
                className="rounded-2xl"
              />
            )}
          </>
        )}
      />
      <View className="w-[98%] mt-3 flex-row justify-center items-center gap-4 bottom-2">
        {renderIndicators}
      </View>
    </View>
  );
};

export default CarouselComponent;
