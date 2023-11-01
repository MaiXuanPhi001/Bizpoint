import { Wrapper } from '@/components';
import { mainStackParamList } from '@/navigation/types';
import { useAppDispatch } from '@/redux/store/customReduxHook';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, useTheme } from '@rneui/themed';
import React, { useRef, useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
// import { Camera, useCameraDevices } from 'react-native-vision-camera';
import useStyles from './styles';
import { Text } from '@rneui/themed';
import ImageResizer from '@bam.tech/react-native-image-resizer';
import RNFS from 'react-native-fs';
import { CheckFaceIcon } from '@/utils/svg';
import { authRoute } from '@/constants/route_key';

interface CheckFaceProps extends NativeStackScreenProps<mainStackParamList, 'CheckFace'> {}
const CheckFace: React.FC<CheckFaceProps> = ({ navigation, route }) => {
  //   const { orderId, orderNo, point } = route.params || {};
  const styles = useStyles();
  const dispatch = useAppDispatch();
  const { theme } = useTheme();

  return (
    <Wrapper isSafe>
      <View style={styles.container}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <CheckFaceIcon />
          <Text
            style={[
              styles.title,
              {
                marginTop: 40,
                marginLeft: 24,
              },
            ]}
          >
            Xác minh khuôn mặt
          </Text>
          <Text
            style={[
              styles.text,
              {
                marginTop: 10,
                marginBottom: 50,
                marginHorizontal: 30,
              },
            ]}
          >
            Chụp hình Selfie cầm căn cước công dân/Hộ chiếu để nhận diện khuôn mặt
          </Text>
        </View>
        <Button
          title="Continue"
          buttonStyle={[styles.button, { backgroundColor: '#03801F' }]}
          containerStyle={styles.buttonContainer}
          titleStyle={{
            fontSize: 14,
          }}
          //   onPress={takePhoto}
          onPress={() => {
            navigation.navigate(authRoute.takeFace as never);
          }}
        />
      </View>
    </Wrapper>
  );
};

export default CheckFace;
