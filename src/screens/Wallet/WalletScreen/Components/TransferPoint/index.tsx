import { IconUser } from '@/assets/images/visit';
import { Wrapper } from '@/components';
import { walletTabRoute } from '@/constants/route_key';
import { showToastBottom } from '@/functions';
import { hideLoading, showLoading } from '@/redux/slices/loadingSlice';
import { useAppDispatch } from '@/redux/store/customReduxHook';
import { getReceiveIdApi, getTransfeFeeApi } from '@/services/api/transfer';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { Divider } from '@rneui/base';
import { Button, Text, useTheme } from '@rneui/themed';
import React, { forwardRef, useEffect, useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, TextInput, View } from 'react-native';
import useStyles from './styles';
import { transferPointProps } from './types';

interface infoProps {
  onPressContinue: (data: any) => void;
  userInfo: any;
}

const TransferPoint: React.ForwardRefRenderFunction<transferPointProps, infoProps> = ({ userInfo }, ref) => {
  const styles = useStyles();
  const { theme } = useTheme();
  const dispatch = useAppDispatch();
  const isFocused = useIsFocused();

  const navigation = useNavigation();

  const [valueReceive, setValueReceive] = useState<string>('');
  const [nameReceive, setNameReceive] = useState<string>('');
  const [totalPoint, settTotalPoint] = useState<string>('');
  const [feePoint, setFeePoint] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [error, setError] = useState<string>('');

  //
  useEffect(() => {
    if (isFocused && valueReceive !== '') {
      setValueReceive(''), setNameReceive(''), settTotalPoint(''), setFeePoint(''), setContent('');
    }
  }, [isFocused]);

  // FUNTIONS

  const handleReceiveUser = (text: string) => {
    setValueReceive(text);
  };

  const handleChangse = (text: string) => {
    if (userInfo?.bizPoint && userInfo?.bizPoint < parseInt(text)) {
      showToastBottom('Số point nhập không được lớn hơn số point khả dụng');
    } else {
      settTotalPoint(text);
    }
  };

  const yourFunctionNameHere = async () => {
    dispatch(showLoading());
    getReceiveIdApi(valueReceive)
      .then(res => {
        if (res.status === 200) {
          setNameReceive(res?.data?.data);
        } else {
          showToastBottom('Người nhận không tồn tại');
        }
      })
      .catch((err: any) => {
        console.log(err);
      })
      .finally(() => {
        dispatch(hideLoading());
      });
  };

  const handleTransferPoint = () => {
    dispatch(showLoading());
    getTransfeFeeApi()
      .then(res => {
        if (res.status === 200) {
          setFeePoint(res?.data?.data?.value);
          setContent('giao dich chuyen diem');
        } else {
          showToastBottom('phí giao dịch lỗi');
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
    <Wrapper isSafe>
      <View style={{ flex: 1 }}>
        <KeyboardAvoidingView
          style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}
          behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={150}
          enabled
        >
          <View style={styles.container}>
            <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }} keyboardVerticalOffset={100}>
              <ScrollView style={{ height: '100%' }} showsVerticalScrollIndicator={false}>
                <Text style={styles.textTitle}>Thông tin người nhận</Text>
                <View style={styles.boderContainer}>
                  <Text style={{ color: theme.colors.grey3 }}>Số tài khoản nhận</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingHorizontal: 25,
                      paddingTop: 5,
                    }}
                  >
                    <TextInput
                      value={valueReceive}
                      style={[styles.inputs]}
                      placeholder="Nhập tài khoản nhận"
                      onChangeText={text => handleReceiveUser(text)}
                      keyboardType="number-pad"
                      returnKeyType="done"
                      onSubmitEditing={() => yourFunctionNameHere()}
                    />
                    <IconUser />
                  </View>
                  <Divider color={error.length === 0 ? theme.colors.white : theme.colors.error} />
                  <Text style={{ color: theme.colors.grey3, paddingVertical: 10 }}>Tên người nhận</Text>
                  <Text
                    style={{
                      fontSize: 18,
                      color: theme.colors.grey4,
                      marginLeft: 20,
                    }}
                  >
                    {nameReceive || 'Tên người nhận'}
                  </Text>
                </View>
                {/*  */}
                <Text style={[styles.textTitle, { marginTop: 20 }]}>Số point</Text>
                <View style={styles.boderContainer}>
                  <View
                    style={{
                      paddingHorizontal: 25,
                      paddingTop: 5,
                      paddingBottom: 10,
                    }}
                  >
                    <TextInput
                      value={totalPoint}
                      style={styles.inputs1}
                      placeholder="Nhập số point"
                      onChangeText={(text: string) => handleChangse(text)}
                      keyboardType="number-pad"
                      returnKeyType="done"
                      onSubmitEditing={() => handleTransferPoint()}
                    />

                    <Text style={{ color: theme.colors.grey3, paddingVertical: 10 }}>Phí giao dịch</Text>
                    <Text>{feePoint || '0'}</Text>
                  </View>
                </View>
                {/*  */}
                <Text style={[styles.textTitle, { marginTop: 20 }]}>Nội dung</Text>
                <View style={[styles.boderContainer, { padding: 30 }]}>
                  <TextInput
                    style={[styles.inputs1, { marginBottom: 10 }]}
                    placeholder="Nội dung(không dấu)"
                    onPressIn={() => {}}
                    returnKeyType="done"
                    multiline={true}
                    value={content}
                    onChangeText={(text: string) => setContent(text)}
                  />
                </View>
                <Button
                  title="Tiếp tục"
                  buttonStyle={styles.button}
                  containerStyle={styles.buttonContainer}
                  onPress={() => {
                    if (valueReceive === '' || totalPoint === '') {
                      setError('Vui lòng nhập đầy đủ thông tin');
                      showToastBottom('Vui lòng nhập đầy đủ thông tin');
                      return;
                    }
                    navigation.navigate(walletTabRoute.confirmTransferScreen, {
                      data: {
                        totalPoint,
                        nameReceive,
                        valueReceive,
                        content,
                        feePoint,
                      },
                    });
                  }}
                  titleStyle={{
                    fontSize: 14,
                    fontWeight: '600',
                  }}
                />
              </ScrollView>
            </KeyboardAvoidingView>
          </View>
        </KeyboardAvoidingView>
      </View>
    </Wrapper>
  );
};

export default forwardRef(TransferPoint);
