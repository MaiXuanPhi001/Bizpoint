// ModalConfirm

import { useTheme } from '@rneui/themed';
import React, { FC, useEffect, useRef, useState } from 'react';
import { Alert, Keyboard, SafeAreaView, TouchableOpacity, View } from 'react-native';
import ReactNativeModal from 'react-native-modal';
import useStyles from './styles';
import { Header } from '@/components';
import { Icon } from '@rneui/themed';
import { Text } from '@rneui/base';
import { Button } from '@rneui/themed';
import { useAppDispatch, useAppSelector } from '@/redux/store/customReduxHook';
import { useIsFocused } from '@react-navigation/native';
import { getUserinfoMenu } from '@/redux/slices/menuSlice/menuSlice';
import OTPCustom from '@/screens/Auth/Register/Components/OTPCode/Components/OTPCustom';
import { normalize } from '@/configs';
import { goBack } from '@/navigation/RootNavigation';
import { hideLoading, showLoading } from '@/redux/slices/loadingSlice';
import { showToastBottom } from '@/functions';
import { confirmTransferBySenderApi } from '@/services/api/transfer';
import { getPendingTransferHistory } from '@/redux/slices/transferSlice/transferSlice';

interface OtpModalProps {
  isVisible: boolean;
  onRequestClose: () => void;
  //   onBackdropPress: () => void;
  onConfirm?: () => void;
  dataModal?: any;
}
const OtpModal: FC<OtpModalProps> = props => {
  const { isVisible, onRequestClose, onConfirm, dataModal } = props;
  const dispatch = useAppDispatch();
  const isFocused = useIsFocused();
  const styles = useStyles();
  const { theme } = useTheme();
  const { userInfo } = useAppSelector(state => state.menuSlice);
  //
  const otpRef = useRef(null);

  const [errOTP, setErrorOTP] = useState('');
  const [otpCode, setOtpCode] = useState('');

  //
  // call api get user info
  useEffect(() => {
    if (isFocused) {
      dispatch(getUserinfoMenu());
    }
  }, [isFocused]);
  // FUNTIONS
  const onValueChange = async (value: any, { isFulfilled }: any) => {
    if (errOTP) {
      setErrorOTP('');
    }
    if (isFulfilled) {
      Keyboard.dismiss();
    }
    setOtpCode(value);
  };
  const handleConfirm = async () => {
    dispatch(showLoading());
    confirmTransferBySenderApi({
      otp: otpCode,
      transferId: dataModal?.id,
    })
      .then(res => {
        if (res.status === 200) {
          onRequestClose();
          dispatch(getPendingTransferHistory());
        } else {
          showToastBottom('Xác nhận giao dich thất bại');
        }
      })
      .catch((err: any) => {
        console.log(err);
      })
      .finally(() => {
        dispatch(hideLoading());
      });
  };

  return (
    <ReactNativeModal
      isVisible={isVisible}
      style={{ margin: 0 }}
      useNativeDriver={true}
      hideModalContentWhileAnimating={true}
      animationIn={'fadeIn'}
      animationOut={'slideOutLeft'}
    >
      <SafeAreaView style={[styles.container, { alignItems: 'center' }]}>
        <Header
          leftComponent={
            <TouchableOpacity onPress={onRequestClose}>
              <Icon name="close" type="ionicons" size={30} color={theme.colors.white} />
            </TouchableOpacity>
          }
        />
        <View
          style={{
            backgroundColor: 'white',
            marginHorizontal: 10,
            borderWidth: 2,
            borderRadius: 6,
            borderColor: theme.colors.grey3,
            alignItems: 'center',
            paddingHorizontal: 10,
            paddingVertical: 40,
            marginTop: 50,
          }}
        >
          <Text style={styles.optionText}>Xác nhận hoàn thành giao dịch</Text>
          <Text style={{ fontSize: 16, fontWeight: '600', marginVertical: 10 }}>Nhập mã xác thực</Text>
          <Text style={{ textAlign: 'center', marginHorizontal: 10, marginBottom: 50, color: theme.colors.grey3 }}>
            Vui lòng nhập mã OTP đươc gửi tới số điện thoại {userInfo?.phoneNumber}{' '}
          </Text>
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
            // disabled // nếu bên người nhận chuyển tiền qua xong thì tắt disabled
            title="HOÀN THÀNH"
            buttonStyle={styles.button}
            containerStyle={styles.buttonContainer}
            onPress={() => handleConfirm()}
            titleStyle={{
              fontSize: 14,
              fontWeight: '600',
            }}
          />
          <Text style={{ textAlign: 'center', color: theme.colors.grey3, marginTop: 10 }}>
            *Giao dịch sau khi được xác nhận hoàn thành sẽ không thể phục hồi. hoặc hoàn lại
          </Text>
        </View>
      </SafeAreaView>
    </ReactNativeModal>
  );
};
export default OtpModal;
