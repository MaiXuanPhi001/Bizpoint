import * as React from 'react';
import Svg, { SvgProps, Path, Rect, Ellipse, Circle, Defs, Pattern, Use, Image } from 'react-native-svg';

import { memo } from 'react';

const SvgComponent = (props: SvgProps) => (
  <Svg width={100} height={80} fill="none" {...props}>
    <Circle cx="32" cy="32" r="30" stroke="white" stroke-width="4" />
    <Circle cx="32" cy="32" r="24.5" fill="white" stroke="white" />
  </Svg>
);

export const Circles = memo(SvgComponent);
