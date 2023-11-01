import React, { FunctionComponent } from 'react';
import { Text, useTheme } from '@rneui/themed';
import { StyleProp, ViewStyle, View } from 'react-native';
import { Logo as LogoSvg } from '@/assets/images/auth';
import useStyle from './styles';
import LogoIcon from '@/assets/images/auth/logo1.svg';
import { Image } from 'react-native';
import { images } from '@/configs';

interface LogoProp {
  style?: StyleProp<ViewStyle>;
}

export const Logo: FunctionComponent<LogoProp> = ({ style }) => {
  const styles = useStyle();
  const { theme } = useTheme();

  return (
    <View style={style}>
      <View style={styles.head}>
        <Image source={images.auth.logo} style={styles.icon} resizeMode="center" />
      </View>
    </View>
  );
};
