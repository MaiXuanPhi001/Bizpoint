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
import { authRoute } from '@/constants/route_key';

interface CheckIdentityProps extends NativeStackScreenProps<mainStackParamList, 'CheckIdentity'> {}
const CheckIdentity: React.FC<CheckIdentityProps> = ({ navigation, route }) => {
  //   const { orderId, orderNo, point } = route.params || {};
  const styles = useStyles();
  const dispatch = useAppDispatch();
  const { theme } = useTheme();

  // const devices = useCameraDevices();

  // const device = devices.front;

  // const camera = useRef<Camera>(null);
  const [isUseCamera, setIsUseCamera] = useState<boolean>(true);
  const [photo, setPhoto] = useState<string | null>(null);
  const [hasPermission, setHasPermission] = useState<boolean>(true);

  const convertBase64 = async (localPath: string) => {
    try {
      const resizeLocalPath = await ImageResizer.createResizedImage(
        'file://' + localPath,
        600,
        600,
        'JPEG',
        90,
        0,
        RNFS.DocumentDirectoryPath,
      );
      const data = await RNFS.readFile(resizeLocalPath.uri, 'base64');
      return data;
    } catch (e) {
      return '';
    }
  };
  const takePhoto = async () => {
    // if (camera.current) {
    //   try {
    //     const options: {} = {
    //       quality: 0.5,
    //       base64: true,
    //       pauseAfterCapture: true,
    //       fixOrientation: true,
    //       mirrorImage: true,
    //       forceUpOrientation: true,
    //     };
    //     const photo = await camera.current.takePhoto(options);
    //     console.log(photo);
    //     const base64 = await convertBase64(photo.path);
    //     setPhoto('data:image/png;base64,' + base64);
    //     setIsUseCamera(false);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
  };

  return (
    <Wrapper isSafe>
      <View style={styles.container}>
        {/* CAMERA */}
        <View style={styles.camera}>
          {/* {device && isUseCamera && hasPermission ? (
            <Camera
              photo
              ref={camera}
              style={StyleSheet.absoluteFill}
              device={device}
              isActive={true}
              frameProcessorFps={60}
            />
          ) : (
            photo && <Image source={{ uri: photo }} style={StyleSheet.absoluteFillObject} />
          )} */}
        </View>
        <View style={styles.bgBottom}>
          <Text
            style={[
              styles.title,
              {
                marginTop: 60,
                marginLeft: 24,
              },
            ]}
          >
            Tiếp tục mặt sau
          </Text>
          <Text
            style={[
              styles.text,
              {
                marginTop: 10,
                marginBottom: 50,
                marginLeft: 24,
              },
            ]}
          >
            Vui lòng canh chỉnh hình ảnh vào trong khu vực ô kẻ và hình chụp không bị cắt góc cạnh
          </Text>
          <View style={{}}>
            <Button
              title="Yes, looks good"
              buttonStyle={[styles.button, { backgroundColor: '#03801F' }]}
              containerStyle={styles.buttonContainer}
              titleStyle={{
                fontSize: 14,
              }}
              //   onPress={takePhoto}
              onPress={() => {
                navigation.navigate(authRoute.CheckFace as never);
              }}
            />
            <Button
              title="Retake"
              buttonStyle={[
                styles.button,
                {
                  backgroundColor: 'white',
                  marginTop: 12,
                  borderWidth: 1,
                  borderColor: theme.colors.grey3,
                },
              ]}
              containerStyle={styles.buttonContainer}
              titleStyle={{
                color: 'black',
                fontSize: 14,
              }}
              onPress={() => {}}
            />
          </View>
        </View>
      </View>
    </Wrapper>
  );
};

export default CheckIdentity;
