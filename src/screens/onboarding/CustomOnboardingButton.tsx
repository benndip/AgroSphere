import {
  FlatList,
  StyleSheet,
  TouchableWithoutFeedback,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import Animated, {
  AnimatedRef,
  SharedValue,
  interpolateColor,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import { ArrowRight } from '../../assets/icons/icons';
import { DEVICE_WIDTH, rF } from '../../constants/sizes';
import { paths } from '../../navigation/paths';
import { onboardingColors, OnboardingData } from '../../constants/onboarding';

type Props = {
  dataLength: number;
  flatListIndex: SharedValue<number>;
  flatListRef: AnimatedRef<FlatList<OnboardingData>>;
  x: SharedValue<number>;
  onOnboardComplete?: () => void
};

const CustomOnboardingButton = ({ flatListRef, flatListIndex, dataLength, x, onOnboardComplete }: Props) => {
  const { width: SCREEN_WIDTH } = useWindowDimensions();
  const navigation = useNavigation<any>();

  const buttonAnimationStyle = useAnimatedStyle(() => {
    return {
      width:
        flatListIndex.value === dataLength - 1
          ? withSpring(DEVICE_WIDTH*0.32)
          : withSpring(DEVICE_WIDTH*0.14),
      height: DEVICE_WIDTH*0.14,
    };
  });

  const arrowAnimationStyle = useAnimatedStyle(() => {
    return {
      width: 30,
      height: 30,
      opacity:
        flatListIndex.value === dataLength - 1 ? withTiming(0) : withTiming(1),
      transform: [
        {
          translateX:
            flatListIndex.value === dataLength - 1
              ? withTiming(100)
              : withTiming(0),
        },
      ],
    };
  });

  const textAnimationStyle = useAnimatedStyle(() => {
    return {
      opacity:
        flatListIndex.value === dataLength - 1 ? withTiming(1) : withTiming(0),
      transform: [
        {
          translateX:
            flatListIndex.value === dataLength - 1
              ? withTiming(0)
              : withTiming(-100),
        },
      ],
    };
  });
  const animatedColor = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      x.value,
      [0, SCREEN_WIDTH, 2 * SCREEN_WIDTH],
      onboardingColors
    );

    return {
      backgroundColor: backgroundColor,
    };
  });

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        if (flatListIndex.value < dataLength - 1) {
          flatListRef.current?.scrollToIndex({
            index: flatListIndex.value + 1,
          });
        } else {
          onOnboardComplete?.()
        }
      }}
    >
      <Animated.View
        style={[styles.container, buttonAnimationStyle, animatedColor]}
      >
        <Animated.Text style={[styles.textButton, textAnimationStyle]}>
          Get Started
        </Animated.Text>
        <Animated.View style={[styles.arrow, arrowAnimationStyle]}>
          <ArrowRight />
        </Animated.View>
        {/* <Animated.Image
          source={require('./ArrowIcon.png')}
        /> */}
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default CustomOnboardingButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1e2169',
    padding: 10,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  arrow: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: { color: 'white', fontSize: rF(1.7), position: 'absolute' },
});
