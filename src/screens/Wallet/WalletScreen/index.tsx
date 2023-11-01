import { LockIcon, UserIcon } from '@/assets/images/menu';
import { AppImage, Wrapper } from '@/components';
import { mainStackParamList } from '@/navigation/types';
import { useAppDispatch, useAppSelector } from '@/redux/store/customReduxHook';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Icon, Text, useTheme } from '@rneui/themed';
import { TouchableOpacity, View } from 'react-native';
import useStyles from './styles';

import { useIsFocused } from '@react-navigation/native';
import { welcome } from './funtions';
import { IconChat, IconLoading, IconNoti } from '@/assets/images/visit';
import AppTabView, { appTabViewRef } from '@/components/App/AppTabView';
import { useEffect, useRef, useState } from 'react';
import TransferPoint from './Components/TransferPoint';
import HistoryTransfer from './Components/HistoryTransfer';
import ModalNoti from './Components/NotiModal';
import DetailModalNoti from './Components/DetailNoti';
import { getUserinfoMenu } from '@/redux/slices/menuSlice/menuSlice';
import { formatStringToMoney } from '@/functions/money';

interface CustomerDetailScreenProps extends NativeStackScreenProps<mainStackParamList, 'WalletScreen'> {}
const WalletScreen: React.FC<CustomerDetailScreenProps> = ({ navigation }) => {
  const styles = useStyles();
  const dispatch = useAppDispatch();
  const isFocused = useIsFocused();
  const { theme } = useTheme();
  const tabViewRef = useRef<appTabViewRef>(null);
  const [isShowNoti, setIsShowNoti] = useState<boolean>(false);
  const [isShowDetailNoti, setIsShowDetailNoti] = useState<boolean>(false);

  const { userInfo } = useAppSelector(state => state.menuSlice);

  useEffect(() => {
    if (isFocused) {
      dispatch(getUserinfoMenu());
    }
  }, [isFocused]);

  const renderTopInfo = () => {
    return (
      <View
        style={{
          height: 200,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            paddingHorizontal: 30,
            alignItems: 'center',
            marginBottom: 10,
          }}
        >
          <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}>
            <AppImage source={{ uri: 'imageShift?.in' }} style={styles.avatar} />
            <View style={{ marginLeft: 15 }}>
              <Text style={styles.text}>{welcome()}</Text>
              <Text style={styles.title1}>{userInfo?.name}</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <IconChat />
            <TouchableOpacity onPress={() => setIsShowNoti(true)} style={{ marginLeft: 14 }}>
              <IconNoti />
            </TouchableOpacity>
          </View>
        </View>
        {/*  */}
        <View style={styles.bgInfo}>
          <View style={[styles.bgInfo1, {}]}>
            <IconLoading />
            <View style={{ flexDirection: 'row' }}>
              <Text style={[styles.text2, {}]}>123 000</Text>
              <View style={{ position: 'absolute', left: 84, bottom: 16 }}>
                <Icon name="copy1" type="antdesign" size={22} color={theme.colors.primary} />
              </View>
            </View>
          </View>
          <TouchableOpacity onPress={() => {}} style={{ alignItems: 'flex-start' }}>
            <Text style={{ fontSize: 16, fontWeight: '500' }}>Số point khả dụng</Text>
            <Text style={[styles.text, { marginVertical: 5 }]}>Current balance</Text>
            <Text style={styles.text2}>{formatStringToMoney(userInfo?.bizPoint || 0)}</Text>
          </TouchableOpacity>
        </View>
        {isShowNoti && (
          <ModalNoti
            isVisible={isShowNoti}
            onRequestClose={() => {
              setIsShowNoti(false);
            }}
            // onBackdropPress={onCloseModal}
            onConfirm={() => setIsShowDetailNoti(true)}
          />
        )}
        {isShowDetailNoti && (
          <DetailModalNoti
            isVisible={isShowDetailNoti}
            onRequestClose={() => {
              setIsShowDetailNoti(false);
            }}
            // onBackdropPress={onCloseModal}
            onConfirm={() => {}}
          />
        )}
      </View>
    );
  };

  const progressOrder = [
    {
      id: 0,
      title: 'Chuyển Point',
      view: <TransferPoint onPressContinue={() => {}} userInfo={userInfo} />,
    },

    {
      id: 1,
      title: 'Lịch sử giao dịch',
      view: <HistoryTransfer userInfo={userInfo} onPressContinue={() => {}} />,
    },
  ];

  return (
    <Wrapper isSafe barStyle>
      {renderTopInfo()}
      <AppTabView
        containerFlistStyle={{ flexGrow: 1, justifyContent: 'center' }}
        ref={tabViewRef}
        tabViewData={progressOrder}
      />
    </Wrapper>
  );
};

export default WalletScreen;
