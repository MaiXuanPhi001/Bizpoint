import { Header, Wrapper } from '@/components';
import { setUpdateInfo, updateInfo } from '@/redux/slices/authSlice/authSlice';
import { Input } from '@rneui/base';
import { Button, Icon, Text, useTheme } from '@rneui/themed';
import { FunctionComponent, useEffect, useRef, useState } from 'react';
import { Keyboard, LayoutAnimation, ScrollView, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import useStyles from './styles';
import { useAppSelector } from '@/redux/store/customReduxHook';
import OTPCustom from '@/screens/Auth/Register/Components/OTPCode/Components/OTPCustom';
import { normalize } from '@/configs';

type ReferralCodeProps = {
  handleGoBack: () => void;
};

const ReferralCode: FunctionComponent<ReferralCodeProps> = ({ handleGoBack }) => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const { theme } = useTheme();
  const { userInfo } = useAppSelector(state => state.menuSlice);

  const [error, setError] = useState<string>('');
  const [errOTP, setErrorOTP] = useState('');
  const [otpCode, setOtpCode] = useState('');
  //
  const otpRef = useRef(null);

  const onValueChange = async (value: any, { isFulfilled }: any) => {
    if (errOTP) {
      setErrorOTP('');
    }
    if (isFulfilled) {
      Keyboard.dismiss();
    }
    setOtpCode(value);
  };

  return (
    <Wrapper isSafe>
      <Header title={'Nhập mã giới thiệu:'} goBack={handleGoBack} />
      <View style={styles.container}>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={styles.title}>Vui lòng nhập mã 6 số tài khoản giới thiệu</Text>
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
            title="Hoàn thành"
            buttonStyle={styles.button}
            containerStyle={styles.buttonContainer}
            onPress={() => {}}
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

export default ReferralCode;
