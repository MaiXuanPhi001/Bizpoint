import '@rneui/themed';
import { StyleProp, TextStyle } from 'react-native';

declare module '@rneui/themed' {
  export interface TextProps {
    h5?: boolean | undefined;
    h5Style?: StyleProp<TextStyle>;
  }
}
