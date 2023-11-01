import React, { useEffect, useRef } from 'react';
import { Animated, Easing, View } from 'react-native';
import { Button, Icon, Text, useTheme } from '@rneui/themed';
import { Wrapper } from '@/components';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import useStyles from './styles';
import { mainStackParamList } from '@/navigation/types';
import AnimatedLottieView from 'lottie-react-native';
import { useAppDispatch, useAppSelector } from '@/redux/store/customReduxHook';
import { DoneRegisterIcon } from '@/utils/svg';
import { authRoute } from '@/constants/route_key';

interface VerifyDoneScreenProps extends NativeStackScreenProps<mainStackParamList, 'RegisterDoneScreen'> {}
const RegisterDoneScreen: React.FC<VerifyDoneScreenProps> = ({ navigation, route }) => {
  //   const { orderId, orderNo, point } = route.params || {};
  const styles = useStyles();
  const dispatch = useAppDispatch();

  const { theme } = useTheme();

  return (
    <Wrapper isSafe>
      <View style={styles.container}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <DoneRegisterIcon />
          <Text style={[styles.title, { marginBottom: 20 }]}>You’re verified!</Text>
          <Text style={styles.text}>Bạn đã gửi thông tin Xác minh danh tính thành công</Text>
          <Text style={styles.text}>Hồ sơ của bạn sẽ được duyệt trong vòng 12 giờ</Text>
        </View>
        <Button
          title="Quay về trang chủ"
          buttonStyle={styles.button}
          containerStyle={styles.buttonContainer}
          onPress={() => {
            navigation.navigate(authRoute.startStepScreen as never);
          }}
          titleStyle={{
            fontSize: 14,
            fontWeight: '600',
          }}
        />
      </View>
    </Wrapper>
  );
};

export default RegisterDoneScreen;
