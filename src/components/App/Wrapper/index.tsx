import React, { PropsWithChildren } from 'react';
import { ImageBackground, KeyboardAvoidingView, SafeAreaView, StatusBar, View, ViewStyle } from 'react-native';
import useStyles from './styles';
import { images } from '@/configs';
import { useThemeMode } from '@rneui/themed';
import AppLoading from '../AppLoading';
import FastImage from 'react-native-fast-image';
import AppEmpty from '../AppEmpty';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import { isIOS } from '@rneui/base';

type WrapperProps = PropsWithChildren<{
  isSafe?: boolean;
  isModal?: boolean;
  isEmpty?: boolean;
  isError?: boolean;
  isLoading?: boolean;
  style?: ViewStyle;
  isBg?: boolean;
  barStyle?: boolean;
}>;

const Wrapper: React.FC<WrapperProps> = ({
  isLoading = false,
  isSafe,
  isModal,
  isEmpty,
  children,
  style,
  isBg,
  barStyle,
}) => {
  const styles = useStyles();
  const { mode } = useThemeMode();
  const insets = useSafeAreaInsets();
  const content = () => {
    return (
      <>
        <StatusBar
          // barStyle={mode === 'light' ? 'dark-content' : 'light-content'}
          barStyle={barStyle ? 'dark-content' : 'light-content'}
          backgroundColor="transparent"
          translucent
        />
        {/* <FastImage source={mode === 'light' ? images.background : images.backgroundDark} style={styles.fullScreen} /> */}
        {/* <FastImage source={images.background} style={styles.fullScreen} /> */}
        {children}
        {isEmpty && <AppEmpty />}
        {isLoading && <AppLoading />}
      </>
    );
  };
  if (isSafe) {
    return (
      <>
        <SafeAreaView
          style={[
            styles.container,
            {
              paddingTop: isModal ? 0 : insets.top,
              backgroundColor: isBg ? '#0C1442' : 'white',
            },
            style,
          ]}
        >
          {content()}
        </SafeAreaView>
      </>
    );
  }
  return <View style={[styles.container, { paddingTop: insets.top }, style]}>{content()}</View>;
};

export default Wrapper;
