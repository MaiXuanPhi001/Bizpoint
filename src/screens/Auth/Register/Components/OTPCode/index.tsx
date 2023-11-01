import React, { useRef, useState } from 'react';
import { Keyboard, ScrollView, TouchableOpacity, View } from 'react-native';
import { Button, Icon, Text, useTheme } from '@rneui/themed';
import useStyles from './styles';
import { Header, VerifyIcon, Wrapper } from '@/components';
import { goBack } from '@/navigation/RootNavigation';
import { normalize } from '@/configs';
import OTPCustom from './Components/OTPCustom';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { mainStackParamList } from '@/navigation/types';
import { authRoute } from '@/constants/route_key';
import { useAppDispatch } from '@/redux/store/customReduxHook';
import { checkOtp } from '@/redux/slices/authSlice/authSlice';

const OTPCodeScreen: React.FC = ({ route }: any) => {
  console.log('🚀 ~ file: index.tsx:15 ~ route:', route);
  const { otp, email } = route?.params;
  const styles = useStyles();
  const { theme } = useTheme();
  const otpRef = useRef(null);
  const navigation = useNavigation<StackNavigationProp<mainStackParamList>>();
  const dispatch = useAppDispatch();

  const [errOTP, setErrorOTP] = useState('');
  const [otpCode, setOtpCode] = useState('');

  const onValueChange = async (value: any, { isFulfilled }: any) => {
    if (errOTP) {
      setErrorOTP('');
    }
    if (isFulfilled) {
      Keyboard.dismiss();
    }
    setOtpCode(value);
  };

  const handleCheckOTP = () => {
    dispatch(
      checkOtp({
        email,
        otp: otpCode,
      }),
    );
  };

  return (
    <Wrapper isSafe>
      <View style={styles.container}>
        <View style={{ flex: 1, alignItems: 'center', marginTop: 100 }}>
          <Text style={styles.title}>Nhập mã xác thực</Text>
          <Text style={styles.text}>`Vui lòng nhập mã OTP đươc gửi tới email: {email}` </Text>
          {/*  */}
          <OTPCustom
            ref={otpRef}
            cellSize={normalize(30)}
            cellStyle={{
              borderWidth: 0.8,
              borderRadius: 6,
              borderColor: theme.colors.grey2,
            }}
            textStyle={{
              color: theme.colors.black,
            }}
            cellFocusedStyle={{
              borderColor: theme.colors.grey2,
              borderWidth: 2,
            }}
            codeLength={6}
            cellSpacing={normalize(10)}
            value={otpCode}
            onValueChange={onValueChange}
            autoFocus={true}
            restrictToNumbers={true}
          />
          <Button
            title="Gửi"
            buttonStyle={styles.button}
            containerStyle={styles.buttonContainer}
            onPress={
              handleCheckOTP
              // navigation.navigate(authRoute.verifyDoneScreen as never);
            }
            titleStyle={{
              fontSize: 14,
              fontWeight: '600',
            }}
          />
        </View>
      </View>
    </Wrapper>
  );
};

export default OTPCodeScreen;
