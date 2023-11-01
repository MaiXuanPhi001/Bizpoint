import { useTheme } from '@rneui/themed';
import React, { FC, useState } from 'react';
import { Alert, SafeAreaView, TouchableOpacity, View } from 'react-native';
import ReactNativeModal from 'react-native-modal';
import useStyles from './styles';
import { Header } from '@/components';
import { Icon } from '@rneui/themed';
import { Text } from '@rneui/base';
import CountDown from 'react-native-countdown-component';
import { Button } from '@rneui/themed';
import OtpModal from '../OtpModal';
import { useAppDispatch } from '@/redux/store/customReduxHook';
import { hideLoading, showLoading } from '@/redux/slices/loadingSlice';
import { showToastBottom } from '@/functions';
import { otpConfirmApi } from '@/services/api/transfer';
import { getPendingTransferHistory } from '@/redux/slices/transferSlice/transferSlice';

interface ModalOptionProps {
  isVisible: boolean;
  onRequestClose: () => void;
  //   onBackdropPress: () => void;
  onConfirm: () => void;
  dataModal?: any;
}
const ModalOption: FC<ModalOptionProps> = props => {
  const { isVisible, onRequestClose, onConfirm, dataModal } = props;
  const styles = useStyles();
  const { theme } = useTheme();
  const { status, time3, time2 } = dataModal;
  const dispatch = useAppDispatch();

  const renderMili = () => {
    let ms;
    const currentDate = new Date().getTime();
    ms = time2 - currentDate;
    const sec = Math.floor(ms / 1000);
    return sec;
  };

  const handleConfirm = async () => {
    dispatch(showLoading());
    otpConfirmApi()
      .then((res: any) => {
        if (res.status === 200) {
          dispatch(getPendingTransferHistory());
          onRequestClose(), onConfirm();
        } else {
          showToastBottom('Gửi mã otp thất bại');
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
      onBackdropPress={onRequestClose}
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
          <Text style={styles.optionText}>Giao dịch chờ hoàn thành</Text>
          <Text style={{ marginTop: 30, textAlign: 'center' }}>
            Giao dịch của bạn đang trong thời gian chờ xác nhận hoàn thành và sẽ hết hiệu lực trong
          </Text>
          <CountDown
            until={renderMili()}
            size={30}
            onFinish={() => {
              console.log('giao dịch thất bại'), onRequestClose;
            }}
            digitStyle={{ backgroundColor: '#FFF' }}
            digitTxtStyle={{ color: 'rgba(255, 0, 0, 0.63)' }}
            timeToShow={['M', 'S']}
            timeLabels={{ m: '', s: '' }}
            showSeparator
            separatorStyle={{ color: 'red', paddingBottom: 4 }}
          />
          <Button
            disabled={status === 11 ? true : false} // nếu bên người nhận chuyển tiền qua xong thì tắt disabled
            title="Xác nhận hoàn thành"
            buttonStyle={styles.button}
            containerStyle={styles.buttonContainer}
            onPress={() => {
              handleConfirm();
            }}
            titleStyle={{
              fontSize: 14,
              fontWeight: '600',
            }}
          />
        </View>
      </SafeAreaView>
    </ReactNativeModal>
  );
};
export default ModalOption;
