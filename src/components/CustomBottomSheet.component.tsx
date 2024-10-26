import React, { forwardRef, ReactNode } from 'react';
import BottomSheet from '@devvie/bottom-sheet';
import { colors } from '../constants/colors';
import { DEVICE_WIDTH } from '../constants/sizes';

export interface CustomBottomSheetProps {
  children: ReactNode | ReactNode[];
  height?: number | string;
  bgColor?: string;
  backdropColor?: string;
  paddingHorizontal?: number;
  borderTopRightRadius?: number;
  borderTopLeftRadius?: number;
}

const containerStyle = {
  alignSelf: 'center',
  borderBottomWidth: 0,
  padding: 5,
  paddingVertical: 4,
  zIndex: 10,
  width: DEVICE_WIDTH,
} as any;

const CustomBottomSheet = forwardRef(
  (
    {
      children,
      bgColor = '#fff',
      height,
      backdropColor = 'transparent',
      paddingHorizontal,
      bottom,
      borderTopRightRadius = 8,
      borderTopLeftRadius = 8,
      borderWidth = 0.2,
      borderColor = colors.PRIMARY_GRAY,
      ...props
    }: CustomBottomSheetProps | any,
    ref: any
  ) => {
    return (
      <BottomSheet
        ref={ref}
        backdropMaskColor={backdropColor}
        modal
        disableKeyboardHandling
        height={height}
        // disableKeyboardHandling
        style={{
          ...containerStyle,
          backgroundColor: bgColor,
          paddingHorizontal,
          bottom,
          borderTopRightRadius,
          borderTopLeftRadius,
          borderColor,
          borderWidth,
          zIndex: 20,
        }}
        openDuration={900}
        closeDuration={700}
        {...props}
      >
        {children}
      </BottomSheet>
    );
  }
);

export default CustomBottomSheet;
