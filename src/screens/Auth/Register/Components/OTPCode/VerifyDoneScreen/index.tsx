import React, { useEffect, useRef } from 'react';
import { Animated, Easing, View } from 'react-native';
import { Button, Icon, Text, useTheme } from '@rneui/themed';
import { Wrapper } from '@/components';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import useStyles from './styles';
import { mainStackParamList } from '@/navigation/types';
import AnimatedLottieView from 'lottie-react-native';
import { useAppDispatch, useAppSelector } from '@/redux/store/customReduxHook';
import { VerifyDoneIcon } from '@/utils/svg/VerifyEmail';
import { authRoute } from '@/constants/route_key';

interface VerifyDoneScreenProps extends NativeStackScreenProps<mainStackParamList, 'VerifyDoneScreen'> {}
const VerifyDoneScreen: React.FC<VerifyDoneScreenProps> = ({ navigation, route }) => {
  const { email }: any = route.params || {};
  const styles = useStyles();
  const dispatch = useAppDispatch();

  const { theme } = useTheme();

  return (
    <Wrapper isSafe>
      <View style={styles.container}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <VerifyDoneIcon />
          <Text style={styles.title}>All done</Text>
          <Text style={styles.text}>Chúc mừng bạn đã đăng ký tài khoản thành công!!</Text>
        </View>
        <Button
          title="QUAY VỀ TRANG CHỦ"
          buttonStyle={styles.button}
          containerStyle={styles.buttonContainer}
          onPress={() => {
            // navigation.navigate(authRoute.startStepScreen as never);
            navigation.navigate(authRoute.authScreen as never);
          }}
          titleStyle={{
            fontSize: 14,
            fontWeight: '600',
          }}
        />
        <Text style={styles.text1}>Vui lòng xác minh danh tính tài khoản để bắt đầu sử dụng</Text>
      </View>
    </Wrapper>
  );
};

export default VerifyDoneScreen;
