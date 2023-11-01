import { Header, Wrapper } from '@/components';
import { setUpdateInfo, updateInfo } from '@/redux/slices/authSlice/authSlice';
import { Input } from '@rneui/base';
import { Button, Icon, Switch, Text, useTheme } from '@rneui/themed';
import { FunctionComponent, useEffect, useRef, useState } from 'react';
import { Keyboard, LayoutAnimation, ScrollView, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import useStyles from './styles';
import { useAppSelector } from '@/redux/store/customReduxHook';
import OTPCustom from '@/screens/Auth/Register/Components/OTPCode/Components/OTPCustom';
import { normalize } from '@/configs';
import TitleRow from '@/components/Form/TitleRow';
import RowChoose from '@/components/Form/RowChoose';

type SettingNotiProps = {
  handleGoBack: () => void;
};

const SettingNoti: FunctionComponent<SettingNotiProps> = ({ handleGoBack }) => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const { theme } = useTheme();
  const { userInfo } = useAppSelector(state => state.menuSlice);

  const [error, setError] = useState<string>('');
  const [showNoti, setShowNoti] = useState(true);
  const [chooseNoti, setChooseNoti] = useState(true);
  const [chooseNotiAndBall, setChooseNotiAndBall] = useState(true);
  const [chooseShaking, setChooseShaking] = useState(true);
  //
  const otpRef = useRef(null);

  return (
    <Wrapper isSafe>
      <Header title={'Cài đặt thông báo:'} goBack={handleGoBack} />
      <View style={styles.container}>
        <TitleRow title={'Chuông báo'} error={error} isOneLine={true}>
          <TouchableOpacity onPress={() => setChooseNoti(!chooseNoti)}>
            {chooseNoti ? (
              <View style={styles.border1}>
                <Icon name="check" type="ant-design" size={25} color={theme.colors.primary} />
              </View>
            ) : (
              <View style={styles.border1}>
                <Icon name="circle" type="entypo" size={25} color={theme.colors.white} />
              </View>
            )}
          </TouchableOpacity>
        </TitleRow>
        {/*  */}
        <TitleRow title={'Rung và chuông'} error={error} isOneLine={true}>
          <TouchableOpacity onPress={() => setChooseNotiAndBall(!chooseNotiAndBall)}>
            {chooseNotiAndBall ? (
              <View style={styles.border1}>
                <Icon name="check" type="ant-design" size={25} color={theme.colors.primary} />
              </View>
            ) : (
              <View style={styles.border1}>
                <Icon name="circle" type="entypo" size={25} color={theme.colors.white} />
              </View>
            )}
          </TouchableOpacity>
        </TitleRow>
        {/*  */}
        <TitleRow title={'Chỉ rung'} error={error} isOneLine={true}>
          <TouchableOpacity onPress={() => setChooseShaking(!chooseShaking)}>
            {chooseShaking ? (
              <View style={styles.border1}>
                <Icon name="check" type="ant-design" size={25} color={theme.colors.primary} />
              </View>
            ) : (
              <View style={styles.border1}>
                <Icon name="circle" type="entypo" size={25} color={theme.colors.white} />
              </View>
            )}
          </TouchableOpacity>
        </TitleRow>
        {/*  */}
        <TitleRow title={'Hiện thông báo'} error={error} isOneLine={true}>
          <Switch
            value={showNoti}
            onValueChange={() => setShowNoti(!showNoti)}
            style={{ backgroundColor: 'transparent', marginVertical: 5 }}
          />
        </TitleRow>
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

export default SettingNoti;
