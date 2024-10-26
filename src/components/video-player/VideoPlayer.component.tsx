import { View, Text, StyleSheet } from "react-native";
import React, { useRef } from "react";
import Video, { ReactVideoSource, VideoRef } from "react-native-video";
import { DEVICE_HEIGHT } from "../../constants/sizes";

type VideoPlayerProps = {
  url: ReactVideoSource;
};

const VideoPlayer = ({ url }: VideoPlayerProps) => {
  const videoRef = useRef<VideoRef>(null);
  return (
    <Video
      source={url}
      ref={videoRef}
      style={styles.backgroundVideo}
      controls
      resizeMode='cover'
    />
  );
};

var styles = StyleSheet.create({
  backgroundVideo: {
    height: DEVICE_HEIGHT * 0.32,
  },
});

export default VideoPlayer;
