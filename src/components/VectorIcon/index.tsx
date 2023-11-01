import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import { ViewStyle } from 'react-native';
import { iconType } from '@/constants/app';

type vectorIconProps = {
  origin: string;
  name: string;
  color?: string;
  size?: number;
  style?: ViewStyle;
  onPress?(): void;
};

const VectorIcon: React.FC<vectorIconProps> = ({ origin, name, color, size, style, onPress }) => {
  let colorX = color || '#aaaaaa';
  let sizeX = size || 24;
  let nameX = name || 'right';
  let Element = Ionicons;

  switch (origin) {
    case iconType.ANT_ICON:
      Element = AntDesign;
      break;

    case iconType.ENTYPO:
      Element = Entypo;
      break;

    case iconType.MATERIAL_ICONS:
      Element = MaterialIcons;
      break;

    case iconType.FEATHER:
      Element = Feather;
      break;

    case iconType.EVIL_ICONS:
      Element = EvilIcons;
      break;

    case iconType.FONT_AWESOME:
      Element = FontAwesome;
      break;

    case iconType.OCTICONS:
      Element = Octicons;
      break;
    case iconType.MATERIAL_COMMUNITY:
      Element = MaterialCommunityIcons;
      break;
    case iconType.ICONICONS:
      Element = Ionicons;
      break;
    case iconType.SIMPLELINE_ICONS:
      Element = SimpleLineIcons;
      break;
    case iconType.FONTISTO:
      Element = Fontisto;
      break;
    case iconType.FOUNDATION:
      Element = Foundation;
      break;
    default:
      break;
  }

  return <Element name={nameX} size={sizeX} color={colorX} onPress={onPress} style={[style]} />;
};

export default VectorIcon;
