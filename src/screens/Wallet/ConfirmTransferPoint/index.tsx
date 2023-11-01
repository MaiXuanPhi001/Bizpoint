import { Header, Wrapper } from '@/components';
import { authRoute, walletTabRoute } from '@/constants/route_key';
import { mainStackParamList } from '@/navigation/types';
import { useAppDispatch, useAppSelector } from '@/redux/store/customReduxHook';
import { DoneRegisterIcon } from '@/utils/svg';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, Text, useTheme } from '@rneui/themed';
import React, { useEffect, useState } from 'react';
import { ScrollView, TextInput, TouchableOpacity, View } from 'react-native';
import useStyles from './styles';
import { goBack } from '@/navigation/RootNavigation';
import { Icon } from '@rneui/themed';
import { iconType, fonts } from '@/constants';
import { normalize } from '@/configs';
import VectorIcon from '@/components/VectorIcon';
import { Divider } from '@rneui/base';
import ModalOption from '../WalletScreen/Components/ModalConfirm';
import OtpModal from '../WalletScreen/Components/OtpModal';
import { converMoneyString } from './funtions';
import { useIsFocused } from '@react-navigation/native';
import { getUserinfoMenu } from '@/redux/slices/menuSlice/menuSlice';
import { hideLoading, showLoading } from '@/redux/slices/loadingSlice';
import { showToastBottom } from '@/functions';
import { sendPointApi } from '@/services/api/transfer';
import { getPendingTransferHistory } from '@/redux/slices/transferSlice/transferSlice';

interface ConfirmTransferScreenProps extends NativeStackScreenProps<mainStackParamList, 'ConfirmTransferScreen'> {}
const ConfirmTransferScreen: React.FC<ConfirmTransferScreenProps> = ({ navigation, route }) => {
  const { data } = route?.params || {};
  const { totalPoint } = data;
  const styles = useStyles();
  const dispatch = useAppDispatch();
  const isFocused = useIsFocused();
  const { theme } = useTheme();

  const { userInfo } = useAppSelector(state => state.menuSlice);

  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const [isShowModalOtp, setIsShowModalOtp] = useState<boolean>(false);

  useEffect(() => {
    if (isFocused) {
      dispatch(getUserinfoMenu());
    }
  }, [isFocused]);

  //

  const handleSendPoint = async () => {
    const data1: any = {
      receiverId: data?.valueReceive,
      receiverName: data?.nameReceive,
      point: parseInt(totalPoint),
      fee: data?.feePoint,
      content: data?.content,
    };
    dispatch(showLoading());
    sendPointApi(data1)
      .then((res: any) => {
        if (res.status === 200) {
          dispatch(getPendingTransferHistory());
          navigation.navigate(walletTabRoute.walletScreen as never);
        } else {
          showToastBottom('Chuyển point thất bại');
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
      <Header
        title="Xác nhận"
        leftComponent={
          <TouchableOpacity onPress={goBack}>
            <VectorIcon
              name={'chevron-back-outline'}
              origin={iconType.ICONICONS}
              color={theme.colors.black}
              size={normalize(22)}
            />
          </TouchableOpacity>
        }
      />
      <ScrollView style={styles.container}>
        <View style={{ alignItems: 'center', backgroundColor: '#03801F', paddingVertical: 10 }}>
          <Text style={styles.title}>{data?.totalPoint}</Text>
          <Text style={styles.text1}>{converMoneyString(data?.totalPoint) + 'Point'}</Text>
        </View>
        {/*  */}
        <Text style={styles.textTitle}>Bên chuyển</Text>
        <View style={styles.boderContainer}>
          <Text style={{ color: theme.colors.grey3 }}>Số tài khoản chuyển</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 25,
              paddingTop: 5,
            }}
          >
            <Text style={{ color: theme.colors.grey2, paddingVertical: 5, fontSize: 18 }}>{userInfo?.id || ''}</Text>
          </View>
          <Text style={{ color: theme.colors.grey3, paddingVertical: 10 }}>Tên người chuyển</Text>
          <Text style={{ color: theme.colors.grey2, paddingVertical: 5, fontSize: 18, marginLeft: 22 }}>
            {userInfo?.name || ''}
          </Text>
        </View>
        {/*  */}
        <Text style={styles.textTitle}>Giao dịch </Text>
        <View style={styles.boderContainer}>
          <Text style={{ fontWeight: '500' }}>Chuyển Point nhanh 24/7</Text>
          <Divider style={{ marginVertical: 5 }} />
          <Text style={{ color: theme.colors.grey3, paddingVertical: 5 }}>Tên người nhận</Text>
          <Text style={{ color: theme.colors.grey2, paddingVertical: 5, fontSize: 18, marginLeft: 22 }}>
            {data?.nameReceive || ''}
          </Text>
          {/*
           */}
          <Text style={{ color: theme.colors.grey3, paddingVertical: 5 }}>Số tài khoản nhận</Text>
          <Text style={{ color: theme.colors.grey2, paddingVertical: 5, fontSize: 18, marginLeft: 22 }}>
            {data?.valueReceive}
          </Text>

          {/*  */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View>
              <Text style={{ color: theme.colors.grey3, paddingTop: 5 }}>Thời gian:</Text>
              <Text style={{ color: theme.colors.grey2, fontSize: 16 }}>Chuyển ngay</Text>
            </View>
            <View>
              <Text style={{ color: theme.colors.grey3, paddingTop: 5 }}>Người chịu phí:</Text>
              <Text style={{ color: theme.colors.grey2, fontSize: 16 }}>Bên chuyển</Text>
            </View>
          </View>
          {/*  */}
          <View style={{ marginVertical: 10 }}>
            <Text style={{ color: theme.colors.grey3, paddingTop: 5 }}>Nội dung</Text>
            <Text style={{ color: theme.colors.grey2, fontSize: 16 }}>{data?.content}</Text>
          </View>
        </View>
        <View style={{ paddingHorizontal: 20, flexDirection: 'row', marginTop: 15 }}>
          <Text>1. </Text>
          <Text style={{ fontSize: 12, fontWeight: '300' }}>
            Kiểm tra lại thông tin giao dịch trước khi xác nhận. Giao dịch này có hiệu lực trong vòng 30 phút. số Point
            sẽ bị Lock trong thời gian này
          </Text>
        </View>
        <View style={{ paddingHorizontal: 20, flexDirection: 'row', marginTop: 5 }}>
          <Text>2. </Text>
          <Text style={{ fontSize: 12, fontWeight: '300' }}>
            Sau khi xác nhận giao dịch. Người nhận sẽ nhận được thông báo chuyển điểm.{' '}
          </Text>
        </View>
        <View style={{ paddingHorizontal: 20, flexDirection: 'row', marginTop: 5 }}>
          <Text>3. </Text>
          <Text style={{ fontSize: 12, fontWeight: '300' }}>
            Người nhận kiểm tra thông tin giao dịch và hoàn thành thỏa thuận giữa hai bên, sau đó xác nhận Hoàn tất{' '}
          </Text>
        </View>
        <View style={{ paddingHorizontal: 20, flexDirection: 'row', marginTop: 5, marginBottom: 10 }}>
          <Text>4. </Text>
          <Text style={{ fontSize: 12, fontWeight: '300' }}>
            Người chuyển kiểm tra lại thỏa thuận giao dịch giữa 2 bên và bấm Xác nhận Hoàn thành giao dịch. Số Point sẽ
            được chuyển về ví người nhận{' '}
          </Text>
        </View>
        <Button
          title="Xác nhận"
          buttonStyle={styles.button}
          containerStyle={styles.buttonContainer}
          onPress={() => {
            // setIsShowModal(true);
            handleSendPoint();
          }}
          titleStyle={{
            fontSize: 14,
            fontWeight: '600',
          }}
        />
      </ScrollView>
      {isShowModal && (
        <ModalOption
          isVisible={isShowModal}
          onRequestClose={() => setIsShowModal(false)}
          onConfirm={() => {
            setIsShowModalOtp(true);
          }}
        />
      )}
      {/* modal otp confirm */}
      {isShowModalOtp && (
        <OtpModal
          isVisible={isShowModalOtp}
          onRequestClose={() => {
            setIsShowModalOtp(false);
          }}
        />
      )}
    </Wrapper>
  );
};

export default ConfirmTransferScreen;
