import { useNavigation } from '@react-navigation/native';
import { Button } from '@rneui/base';
import { Text, useTheme } from '@rneui/themed';
import React, { forwardRef } from 'react';
import { View } from 'react-native';
import CountDown from 'react-native-countdown-component';
import useStyles from './styles';
import { transferPointProps } from './types';
import { useAppSelector } from '@/redux/store/customReduxHook';
import { goBack } from '@/navigation/RootNavigation';

interface infoProps {
  onPressComplain: () => void;
  transactionId?: any;
  confirm: () => void;
}

const PendingConfirmStep2: React.ForwardRefRenderFunction<transferPointProps, infoProps> = (
  { onPressComplain, transactionId, confirm },
  ref,
) => {
  const styles = useStyles();
  const { theme } = useTheme();

  const { dataPendingTransferHistory } = useAppSelector(state => state.transferSlice);

  const timeSm = () => {
    let time_3 = '';
    dataPendingTransferHistory.map((item: any, index: number) => {
      if (item.id === transactionId) {
        return (time_3 = item.time3);
      }
    });

    let ms;
    const currentDate = new Date().getTime();
    ms = parseInt(time_3) - currentDate;
    const sec = Math.floor(ms / 1000);
    return sec;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.optionText}>Giao dịch chờ Hoàn thành</Text>
      <Text style={{ marginTop: 30, textAlign: 'center', paddingHorizontal: 10 }}>
        Giao dịch đang chờ xác nhận từ người chuyển và sẽ hết hiệu lực trong vòng{' '}
      </Text>
      <CountDown
        until={timeSm() || 0}
        size={30}
        onFinish={() => {
          console.log('giao dịch thất bại');
        }}
        digitStyle={{ backgroundColor: '#FFF' }}
        digitTxtStyle={{ color: 'rgba(255, 0, 0, 0.63)' }}
        timeToShow={['M', 'S']}
        timeLabels={{ m: '', s: '' }}
        showSeparator
        separatorStyle={{ color: 'red', paddingBottom: 4 }}
      />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, paddingHorizontal: 10 }}>
        <Button
          title="Khiếu nại"
          buttonStyle={styles.buttonCancel}
          containerStyle={styles.buttonContainer}
          onPress={onPressComplain}
          titleStyle={{
            fontSize: 14,
            fontWeight: '600',
          }}
        />
        <Button
          title="Hoàn thành"
          buttonStyle={styles.buttonConfirm}
          containerStyle={styles.buttonContainer}
          onPress={() => confirm()}
          titleStyle={{
            fontSize: 14,
            fontWeight: '600',
          }}
        />
      </View>
      <Text style={{ color: theme.colors.grey3, marginTop: 12, marginBottom: 30, fontWeight: '300' }}>
        *Nếu bạn đã hoàn tất thỏa thuận giao dịch sau 15 phút người bán không xác nhận hoàn thành giao dịch. Bạn Bấm Nút
        Khiếu nại và gửi hình ảnh bằng chứng giao để được công ty hỗ trợ giải quyết
      </Text>
    </View>
  );
};

export default forwardRef(PendingConfirmStep2);
