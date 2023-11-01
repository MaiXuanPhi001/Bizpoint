import { fonts } from '@/constants';
import { createTheme, Skeleton } from '@rneui/themed';
import { Dimensions, Image } from 'react-native';
import { darkColors, lightColors } from './colors';

// export const skeletonImg = require('@/assets/images/Logo.png');

const { width, height } = Dimensions.get('window');

export const device = {
  width,
  height,
};

export const theme = createTheme({
  font: {
    fontFamily: fonts.sfProRegular,
    fontSize: 14,
  },
  lightColors: lightColors,
  darkColors: darkColors,
  components: {
    Text: {
      style: {
        fontSize: 14,
        fontFamily: 'SF Pro Display',
      },
      h1Style: {
        fontFamily: 'SF Pro Display',
      },
      h2Style: {
        fontFamily: 'SF Pro Display',
      },
      h3Style: {
        fontFamily: 'SF Pro Display',
      },
      h4Style: {
        fontFamily: 'SF Pro Display',
      },
    },
    Avatar: {
      rounded: true,
      containerStyle: { backgroundColor: '#E9E9F8' },
    },
    Button: {
      containerStyle: {
        borderRadius: 50,
      },
    },
    Overlay: {
      overlayStyle: {
        padding: 0,
      },
    },
    Divider: {
      color: '#E9E9F8',
    },
    Image: {
      // source: skeletonImg,
      containerStyle: { backgroundColor: '#E9E9F8' },
    },
  },
});
