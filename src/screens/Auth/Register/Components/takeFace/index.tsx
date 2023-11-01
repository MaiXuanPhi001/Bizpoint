import { Wrapper } from '@/components';
import { mainStackParamList } from '@/navigation/types';
import { useAppDispatch } from '@/redux/store/customReduxHook';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, Icon, useTheme } from '@rneui/themed';
import React, { useRef, useState } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
// import { Camera, useCameraDevices } from 'react-native-vision-camera';
import useStyles from './styles';
import { Text } from '@rneui/themed';
import ImageResizer from '@bam.tech/react-native-image-resizer';
import RNFS from 'react-native-fs';
import { authRoute } from '@/constants/route_key';
import { Tech, Circles } from '@/utils/svg';

interface TakeFaceProps extends NativeStackScreenProps<mainStackParamList, 'TakeFace'> {}
const TakeFace: React.FC<TakeFaceProps> = ({ navigation, route }) => {
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
    if (camera.current) {
      try {
        const options: {} = {
          quality: 0.5,
          base64: true,
          pauseAfterCapture: true,
          fixOrientation: true,
          mirrorImage: true,
          forceUpOrientation: true,
        };

        const photo = await camera.current.takePhoto(options);
        console.log(photo);
        const base64 = await convertBase64(photo.path);
        setPhoto('data:image/png;base64,' + base64);
        setIsUseCamera(false);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Wrapper isSafe>
      <View style={[styles.container, { backgroundColor: '#1c1b1bc4' }]}>
        {/* CAMERA */}
        <View style={{ paddingHorizontal: 30 }}>
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
        </View>
        <View
          style={[
            {
              paddingHorizontal: 20,
              marginBottom: 70,
            },
          ]}
        >
          <Text
            style={[
              styles.title,
              {
                marginTop: 30,
                marginLeft: 12,
              },
            ]}
          >
            Selfie with Id card
          </Text>
          <View style={[{ alignItems: 'center', backgroundColor: 'white' }]}>
            <Tech />
          </View>
        </View>
        <View style={{ alignItems: 'center', justifyContent: 'flex-end', flexDirection: 'row' }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(authRoute.registerDoneScreen as never);
            }}
          >
            <Circles style={{ marginRight: 60 }} />
          </TouchableOpacity>
          {/*  */}
          <TouchableOpacity>
            <Icon
              name="camera"
              type="feather"
              size={30}
              color={theme.colors.white}
              style={{ paddingBottom: 20, paddingHorizontal: 20 }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </Wrapper>
  );
};

export default TakeFace;
