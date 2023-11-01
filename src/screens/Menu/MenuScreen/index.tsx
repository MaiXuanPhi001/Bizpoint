import { AppImage, Wrapper } from '@/components';
import { mainStackParamList } from '@/navigation/types';
import { logout } from '@/redux/slices/authSlice/authSlice';
import { useAppDispatch, useAppSelector } from '@/redux/store/customReduxHook';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, Text } from '@rneui/themed';
import { ImageBackground, ScrollView, TouchableOpacity, View } from 'react-native';
import { LogoutIcon } from '@/assets/images/menu';
import useStyles from './styles';
import { LockIcon, UserIcon, Rectangle } from '@/assets/images/menu';
import RowChoose from '@/components/Form/RowChoose';

import { ListMenu } from './funtions';
import { mainRoute } from '@/constants/route_key';
import { useEffect, useState } from 'react';
import FeedBack from '../Feedback';
import Instruct from '../Instruct';
import { useIsFocused } from '@react-navigation/native';
import { getUserinfoMenu } from '@/redux/slices/menuSlice/menuSlice';
import ChangePassword from '../ChangePassword';
import UpdateInfo from '../updateInfo';
import ReferralCode from '../ReferralCode';
import SettingNoti from '../SettingNoti';
import LanguagesComps from '../Languages';
import TransactionHistory from '../TransactionHistory';
import VRShopVisit from '../VRvisit';
import ReferralList from '../ReferralList';

interface CustomerDetailScreenProps extends NativeStackScreenProps<mainStackParamList, 'MenuScreen'> {}
const MenuScreen: React.FC<CustomerDetailScreenProps> = ({ navigation }) => {
  const styles = useStyles();
  const dispatch = useAppDispatch();
  const isFocused = useIsFocused();

  const { userInfo } = useAppSelector(state => state.menuSlice);

  const [idComps, setIdComps] = useState(0);

  useEffect(() => {
    if (isFocused) {
      dispatch(getUserinfoMenu());
    }
  }, [isFocused]);

  const handleLogout = () => {
    dispatch(logout());
  };

  const renderTopInfo = () => {
    return (
      <View
        style={{
          height: 230,
        }}
      >
        <ImageBackground
          source={require('@/assets/images/bgImage.png')}
          resizeMode={'stretch'}
          style={{
            flex: 1,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              flex: 1,
              justifyContent: 'flex-start',
              paddingHorizontal: 30,
              alignItems: 'flex-end',
            }}
          >
            <AppImage source={{ uri: 'imageShift?.in' }} style={styles.avatar} />
            <View style={{ marginLeft: 15 }}>
              <Text style={styles.text}>Xin chào</Text>
              <Text style={styles.title1}>{userInfo?.name}</Text>
              <Text style={styles.text}>
                Bạn còn:
                <Text style={styles.title}> {userInfo?.visitCount}</Text>
                <Text style={styles.title}> lượt Visit</Text>
              </Text>
            </View>
          </View>
          {/*  */}
          <View style={styles.bgInfo}>
            <View style={[styles.bgInfo1]}>
              <UserIcon />
              <Text style={[styles.text2, { marginHorizontal: 10 }]}>Xác minh tài khoản</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                setIdComps(10);
              }}
              style={styles.bgInfo1}
            >
              <LockIcon />
              <Text style={styles.text2}>Đổi mật khẩu tài khoản </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}} style={styles.bgInfo1}>
              <Rectangle />
              <Text style={[styles.text2, { marginHorizontal: 10 }]}>Giới thiệu bạn bè</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  };

  return (
    <Wrapper isSafe barStyle>
      {renderTopInfo()}
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {idComps === 0 && (
            <View>
              {ListMenu.map((item: any, index: number) => {
                return (
                  <View key={index}>
                    <RowChoose onPress={() => setIdComps(item.id)} iconName={item.icon} title={item.title} />
                  </View>
                );
              })}
              <Button
                title="Đăng xuất"
                buttonStyle={styles.buttonLogout}
                containerStyle={styles.buttonContainer}
                onPress={() => {
                  handleLogout();
                }}
                titleStyle={{
                  fontSize: 14,
                  fontWeight: '600',
                }}
              />
            </View>
          )}
          {idComps === 1 && <UpdateInfo handleGoBack={() => setIdComps(0)} />}
          {idComps === 2 && <VRShopVisit handleGoBack={() => setIdComps(0)} />}
          {idComps === 3 && <ReferralList handleGoBack={() => setIdComps(0)} />}
          {idComps === 4 && <ReferralCode handleGoBack={() => setIdComps(0)} />}
          {idComps === 5 && <SettingNoti handleGoBack={() => setIdComps(0)} />}
          {idComps === 6 && <LanguagesComps handleGoBack={() => setIdComps(0)} />}
          {idComps === 7 && <TransactionHistory handleGoBack={() => setIdComps(0)} />}
          {idComps === 8 && <Instruct handleGoBack={() => setIdComps(0)} />}
          {idComps === 9 && <FeedBack handleGoBack={() => setIdComps(0)} />}
          {idComps === 10 && <ChangePassword handleGoBack={() => setIdComps(0)} />}
        </ScrollView>
      </View>
    </Wrapper>
  );
};

export default MenuScreen;
