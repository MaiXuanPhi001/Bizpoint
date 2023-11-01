import React, { FunctionComponent } from 'react';
import { Text, useTheme } from '@rneui/themed';
import { StyleProp, ViewStyle, View } from 'react-native';
import { VerifyIcon as LogoSvg } from '@/assets/images/auth';

interface LogoProp {
  style?: StyleProp<ViewStyle>;
}

export const VerifyIcon: FunctionComponent<LogoProp> = ({ style }) => {
  const { theme } = useTheme();

  return (
    <View style={style}>
      <View style={{ alignItems: 'center' }}>
        <LogoSvg color={theme.colors.black} />
      </View>
    </View>
  );
};
