import { Wrapper } from '@/components';
import { usePaginationV2 } from '@/hooks';
import { getPendingTransferHistory } from '@/redux/slices/transferSlice/transferSlice';
import { useAppDispatch, useAppSelector } from '@/redux/store/customReduxHook';
import { TRANSFER } from '@/services/uris';
import { useIsFocused } from '@react-navigation/native';
import { Divider, Icon } from '@rneui/base';
import { Text, useTheme } from '@rneui/themed';
import React, { forwardRef, useEffect, useState } from 'react';
import { FlatList, ScrollView, TouchableOpacity, View } from 'react-native';
import DetailModalNoti from '../DetailNoti';
import ModalOption from '../ModalConfirm';
import OtpModal from '../OtpModal';
import useStyles from './styles';
import { historyTransferProps } from './types';

interface infoProps {
  onPressContinue: (data: any) => void;
  userInfo?: any;
}
type paramsData = {
  limit: 1;
  page: 2;
};

const HistoryTransfer: React.ForwardRefRenderFunction<historyTransferProps, infoProps> = ({ userInfo }, ref) => {
  const { id, name } = userInfo;
  const styles = useStyles();
  const { theme } = useTheme();
  const isFocused = useIsFocused();
  const dispatch = useAppDispatch();

  const { isLoading, fetchData, onRefresh, onSearch, listItem } = usePaginationV2<paramsData>(TRANSFER.TRANSFERHISTORY);
  const { dataPendingTransferHistory } = useAppSelector(state => state.transferSlice);

  //BÊN A
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const [dataModal, setdataModall] = useState<any>();
  const [isShowModalOtp, setIsShowModalOtp] = useState<boolean>(false);
  const [otpCode, setOtpCode] = useState<string>();

  //BÊN B
  const [isShowModalB, setIsShowModalB] = useState<boolean>(false);
  const [dataModalB, setdataModallB] = useState<any>();
  const [isStep, setIsStep] = useState<number>(1);

  useEffect(() => {
    if (isFocused) {
      // lịch sử - "CHỜ" - giao dịch
      dispatch(getPendingTransferHistory());
    }
  }, [isFocused]);

  const handleReload = () => {
    dispatch(getPendingTransferHistory());
    fetchData();
  };
  const RefreshPendingData = () => {
    dispatch(getPendingTransferHistory());
  };

  const _renderPendingTransfer = () => {
    return (
      <ScrollView
        style={{
          borderBottomColor: theme.colors.grey3,
          borderBottomWidth: dataPendingTransferHistory.length === 0 ? 0 : 1,
          borderRadius: 5,
          paddingBottom: 20,
          minHeight: 10,
          maxHeight: 110,
        }}
      >
        {dataPendingTransferHistory.map((item: any, index: number) => {
          const { status, receiverName, receiverId, senderName } = item;
          return (
            <TouchableOpacity
              key={index}
              style={{ marginBottom: 10 }}
              onPress={() => {
                if (status === 11) {
                  if (receiverId !== id) {
                    // bên A chờ bên B xác nhận
                    setIsShowModal(true), setdataModall(item);
                  } else {
                    //bên B xác nhận giao dịch
                    setIsShowModalB(true), setdataModallB(item);
                  }
                } else {
                  if (receiverId !== id) {
                    // // bên A chờ bên B xác nhận
                    // setIsShowModal(true), setdataModall(item);
                    setIsShowModal(true), setdataModall(item);
                  } else {
                    //BÊN B - open modal khiếu nai & hoàn thành
                    setIsShowModalB(true), setdataModallB(item), setIsStep(2);
                  }
                }
              }}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {status === 11 ? (
                  <>
                    <Icon name={'loader'} type="feather" color={theme.colors.grey3} size={30} />
                    <Text style={{ marginRight: 20, marginLeft: 10, color: theme.colors.grey2 }}>{item?.content}</Text>
                    {receiverId === id ? (
                      <Text numberOfLines={4} style={{ color: theme.colors.red, flex: 2 }}>
                        Đang chờ bạn xác nhận
                      </Text>
                    ) : (
                      <Text numberOfLines={4} style={{ color: theme.colors.blue, flex: 2 }}>
                        Đang chờ {receiverName} xác nhận
                      </Text>
                    )}
                  </>
                ) : null}
                {/* status 12 -  bên B xác nhận thành công, đang chờ bên A hoàn thành giao dịch */}
                {status === 12 ? (
                  <>
                    <Icon name={'loader'} type="feather" color={theme.colors.blue} size={26} />
                    <Text style={{ marginRight: 20, marginLeft: 10, color: theme.colors.grey2 }}>{item?.content}</Text>
                    {receiverId === id ? (
                      <Text numberOfLines={4} style={{ color: theme.colors.blue, flex: 2 }}>
                        Đang chờ {senderName} xác nhận
                      </Text>
                    ) : (
                      <Text numberOfLines={4} style={{ color: theme.colors.red, flex: 2 }}>
                        Đang chờ BẠN xác nhận
                      </Text>
                    )}
                  </>
                ) : null}
              </View>
              <Divider color={theme.colors.white} style={{ marginVertical: 4, height: 4 }} />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    );
  };

  const _renderITem = (item: any, index: number) => {
    return (
      <View style={{ marginTop: 10 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Icon
            name={index === 1 ? 'arrowup' : 'arrowdown'}
            type="antdesign"
            color={index === 1 ? '#FF4B55' : theme.colors.primary}
            size={30}
          />
          <Text style={{ marginRight: 20, marginLeft: 10, color: theme.colors.grey2 }}>
            Giao dich nhận 20 point từ giao dịch Visit Shop ABC
          </Text>
        </View>
        <Divider style={{ marginVertical: 10 }} />
      </View>
    );
  };

  return (
    <Wrapper isSafe>
      <View style={styles.container}>
        <FlatList
          ListHeaderComponent={_renderPendingTransfer()}
          style={styles.boderContainer}
          data={listItem || []}
          keyExtractor={(_, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 100 }}>
              <Text style={styles.notTextNoti}>Không có lịch sử</Text>
            </View>
          )}
          renderItem={({ item, index }) => _renderITem(item, index)}
          onRefresh={() => {
            onRefresh(), RefreshPendingData();
          }}
          onEndReached={fetchData}
          refreshing={isLoading}
        />
      </View>
      {/* BÊN A */}
      {isShowModal && (
        <ModalOption
          isVisible={isShowModal}
          onRequestClose={() => {
            setIsShowModal(false), handleReload();
          }}
          onConfirm={() => {
            setIsShowModalOtp(true);
          }}
          dataModal={dataModal}
        />
      )}
      {isShowModalOtp && (
        <OtpModal
          isVisible={isShowModalOtp}
          onRequestClose={() => {
            setIsShowModalOtp(false);
          }}
          dataModal={dataModal}
        />
      )}
      {/* BÊN B */}
      {isShowModalB && (
        <DetailModalNoti
          isVisible={isShowModalB}
          onRequestClose={() => {
            setIsShowModalB(false);
          }}
          dataModalB={dataModalB}
          onConfirm={() => {}}
          isStep={isStep}
        />
      )}
    </Wrapper>
  );
};

export default forwardRef(HistoryTransfer);
