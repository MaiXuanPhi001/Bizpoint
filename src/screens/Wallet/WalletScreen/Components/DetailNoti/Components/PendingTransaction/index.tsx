import { useNavigation } from '@react-navigation/native';
import { Button, Text, useTheme } from '@rneui/themed';
import React, { forwardRef } from 'react';
import { View } from 'react-native';
import CountDown from 'react-native-countdown-component';
import useStyles from './styles';
import { transferPointProps } from './types';

interface infoProps {
  onPresConfirm: () => void;
  dataModalB?: any;
}

const PendingConfirm: React.ForwardRefRenderFunction<transferPointProps, infoProps> = (
  { dataModalB, onPresConfirm },
  ref,
) => {
  const styles = useStyles();
  const { theme } = useTheme();

  const navigation = useNavigation();
  const timeSm = () => {
    let ms;
    const currentDate = new Date().getTime();
    ms = dataModalB?.time2 - currentDate;
    const sec = Math.floor(ms / 1000);
    return sec;
  };
  return (
    <View style={styles.container}>
      <Text style={styles.optionText}>Giao dịch chờ xác nhận</Text>
      <Text style={{ marginTop: 30, textAlign: 'center' }}>
        Bạn có giao dịch đang đợi xác nhận và sẽ hết hiệu lực trong{' '}
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
      <Button
        // disabled // nếu bên người nhận chuyển tiền qua xong thì tắt disabled
        title="Xác nhận giao dịch"
        buttonStyle={styles.button}
        containerStyle={styles.buttonContainer}
        onPress={() => onPresConfirm()}
        titleStyle={{
          fontSize: 14,
          fontWeight: '600',
        }}
      />
    </View>
  );
};

export default forwardRef(PendingConfirm);
