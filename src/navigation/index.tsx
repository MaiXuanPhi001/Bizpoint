import React, { useEffect, useState } from 'react';
import { PermissionsAndroid, Platform, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useAppSelector } from '@/redux/store/customReduxHook';
import { navigationRef } from './RootNavigation';
import MainNavigator from './MainNavigator';
import AuthNavigator from './AuthNavigator';
import { PERMISSIONS } from 'react-native-permissions';
import { Text, useTheme, useThemeMode } from '@rneui/themed';
import { AppLoading } from '@/components';

export function RootNavigator() {
  const { user } = useAppSelector(state => state.authReducer);
  const { isLoginLoading, isLoading } = useAppSelector(state => state.loadingSlice);
  // const { appTheme, fontFamily, isShowDownloadingCodePush, percentDownloadingCodePush } = useAppSelector(
  //   state => state.settingSlice,
  // );
  // const { setMode } = useThemeMode();
  // const { updateTheme } = useTheme();

  // useEffect(() => {
  //   setMode(appTheme);
  //   updateTheme({
  //     components: {
  //       Text: {
  //         style: {
  //           fontFamily: fontFamily,
  //         },
  //       },
  //     },
  //   });

  //   handlePermission(
  //     Platform.OS === 'ios'
  //       ? [PERMISSIONS.IOS.CAMERA, PERMISSIONS.IOS.FACE_ID]
  //       : [PERMISSIONS.ANDROID.POST_NOTIFICATIONS, PERMISSIONS.ANDROID.CAMERA],
  //   );
  // }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      {isLoading || isLoginLoading ? <AppLoading /> : null}
      {user?.accessToken ? <MainNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
