import React, { FunctionComponent, useCallback, useEffect, useMemo } from 'react';
import { State, TapGestureHandler, TapGestureHandlerStateChangeEvent } from 'react-native-gesture-handler';
import Animated, {
  Extrapolate,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import useStyles, { PADDING, THUMB_SIZE } from './styles';

interface SwitchProps {
  value: boolean;
  onValueChange: (value: boolean) => void;
  size?: number;
}

const Switch: FunctionComponent<SwitchProps> = props => {
  const { value, onValueChange, size = THUMB_SIZE } = props;
  const progress = useSharedValue(0);

  const trackSize = useMemo(() => {
    return {
      width: size * 2 + PADDING * 2,
      height: size + PADDING * 2,
    };
  }, [size]);

  const styles = useStyles(trackSize, size)();

  useEffect(() => {
    progress.value = withSpring(value ? 1 : 0);
  }, [value]);

  const thumbStyle = useAnimatedStyle(() => {
    const translateX = interpolate(progress.value, [0, 1], [0, (trackSize.width - PADDING) / 2], Extrapolate.CLAMP);
    const scaleWidth = interpolate(progress.value, [0, 0.5, 1], [size, size + 8, size], Extrapolate.CLAMP);

    return {
      width: scaleWidth,
      transform: [{ translateX }],
    };
  }, []);

  const trackStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      ['rgba(224, 224, 224, 1)', 'rgba(33, 117, 229, 1)'],
    );

    return {
      backgroundColor,
    };
  }, []);

  const handleStateChange = useCallback(
    ({ nativeEvent: { state } }: TapGestureHandlerStateChangeEvent) => {
      if (state !== State.ACTIVE) {
        return;
      }
      onValueChange(!value);
    },
    [onValueChange, value],
  );

  return (
    <TapGestureHandler onHandlerStateChange={handleStateChange}>
      <Animated.View style={[styles.trackContainer, trackStyle]}>
        <Animated.View style={[styles.thumbContainer, thumbStyle]} />
      </Animated.View>
    </TapGestureHandler>
  );
};

export default Switch;
