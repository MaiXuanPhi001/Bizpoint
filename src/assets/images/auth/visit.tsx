import * as React from 'react';
import Svg, { SvgProps, Path, Rect, Defs, Pattern, Use, Image } from 'react-native-svg';
import { memo } from 'react';
import { View } from 'react-native';

const SvgComponent = (props: SvgProps) => (
  <View
    style={{
      backgroundColor: '#03801F',
      alignItems: 'center',
      paddingHorizontal: 10,
      paddingVertical: 6,
      justifyContent: 'center',
      borderRadius: 50,
    }}
  >
    <Svg width={30} height={38} fill="none" {...props}>
      <Rect x="0.73584" y="0.557495" width="29.5082" height="37.7049" fill="url(#pattern0)" />
      <Defs>
        <Pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
          <Use xlinkHref="#image0_302_7340" transform="matrix(0.00632911 0 0 0.00495322 0 -0.00770503)" />
        </Pattern>
        <Image
          id="image0_302_7340"
          width="160"
          height="205"
          xlinkHref="data:image/png;base64,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"
        />
      </Defs>
    </Svg>
  </View>
);

export const Visit = memo(SvgComponent);
