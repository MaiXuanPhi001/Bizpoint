import { Header, Wrapper } from '@/components';
import { useAppSelector } from '@/redux/store/customReduxHook';
import { Text, useTheme } from '@rneui/themed';
import { FunctionComponent, useRef, useState } from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import useStyles from './styles';
import { Button } from '@rneui/themed';

type TransactionHistoryProps = {
  handleGoBack: () => void;
};

const TransactionHistory: FunctionComponent<TransactionHistoryProps> = ({ handleGoBack }) => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const { theme } = useTheme();
  const { userInfo } = useAppSelector(state => state.menuSlice);

  //
  const otpRef = useRef(null);

  return (
    <Wrapper isSafe>
      <Header title={'Lịch sử giao dịch'} goBack={handleGoBack} />
      <View style={styles.container}>
        <View style={styles.bordershadow}>
          <Text style={styles.text}>Chuyển 120 point - 11:20 - 19/10/2023</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
            <Text style={[styles.text, { fontWeight: '400' }]}>Số tài khoản nhận:</Text>
            <Text style={styles.title}>177 527</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={[styles.text, { fontWeight: '400' }]}>Tên người nhận:</Text>
            <Text style={styles.title}> NGUYỄN THỊ TÂM</Text>
          </View>
        </View>
        {/*  */}
        {/*  */}
        <View style={styles.bordershadow}>
          <Text style={styles.text}>Chuyển 120 point - 11:20 - 19/10/2023</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
            <Text style={[styles.text, { fontWeight: '400' }]}>Số tài khoản nhận:</Text>
            <Text style={styles.title}>177 527</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={[styles.text, { fontWeight: '400' }]}>Tên người nhận:</Text>
            <Text style={styles.title}> NGUYỄN THỊ TÂM</Text>
          </View>
        </View>
        <Button
          title="HOÀN THÀNH"
          buttonStyle={styles.button}
          containerStyle={styles.buttonContainer}
          //   onPress={handleUpdateInfo}
          titleStyle={{
            fontSize: 14,
            fontWeight: '600',
          }}
        />
      </View>
    </Wrapper>
  );
};
export default TransactionHistory;
