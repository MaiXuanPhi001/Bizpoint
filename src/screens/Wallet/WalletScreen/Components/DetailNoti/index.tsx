import { useTheme } from '@rneui/themed';
import React, { FC, useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import ReactNativeModal from 'react-native-modal';
import ComplainComponents from './Components/Complain';
import PendingConfirm_Step2 from './Components/PendingConfirm_Step2';
import PendingConfirm from './Components/PendingTransaction';
import useStyles from './styles';
import { useAppDispatch } from '@/redux/store/customReduxHook';
import { hideLoading, showLoading } from '@/redux/slices/loadingSlice';
import { showToastBottom } from '@/functions';
import { confirmTransferByReceiverApi } from '@/services/api/transfer';
import { getPendingTransferHistory } from '@/redux/slices/transferSlice/transferSlice';

interface DetailModalNotiProps {
  isVisible: boolean;
  onRequestClose: () => void;
  dataModalB?: any;
  onConfirm: () => void;
  isStep?: any;
}
const DetailModalNoti: FC<DetailModalNotiProps> = props => {
  const { isVisible, onRequestClose, dataModalB, isStep } = props;
  const styles = useStyles();
  const { theme } = useTheme();
  const [isShowStep, setIsShowStep] = useState<number>(isStep || 1);
  const dispatch = useAppDispatch();

  const handleConfirm = async () => {
    dispatch(showLoading());
    confirmTransferByReceiverApi({ transferId: dataModalB?.id })
      .then((res: any) => {
        if (res.status === 200) {
          dispatch(getPendingTransferHistory());
          setIsShowStep(2);
        } else {
          showToastBottom('Xác nhận giao dịch thất bại');
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
      onBackdropPress={onRequestClose}
    >
      <SafeAreaView style={[styles.container, { alignItems: 'center' }]}>
        <View
          style={{
            paddingHorizontal: 10,
            paddingVertical: 40,
          }}
        >
          {isShowStep === 1 && <PendingConfirm dataModalB={dataModalB} onPresConfirm={() => handleConfirm()} />}
          {isShowStep === 2 && (
            <PendingConfirm_Step2
              transactionId={dataModalB?.id}
              onPressComplain={() => {
                setIsShowStep(3);
              }}
              confirm={() => {
                onRequestClose();
                dispatch(getPendingTransferHistory());
              }}
            />
          )}
          {isShowStep === 3 && <ComplainComponents />}
        </View>
      </SafeAreaView>
    </ReactNativeModal>
  );
};
export default DetailModalNoti;
