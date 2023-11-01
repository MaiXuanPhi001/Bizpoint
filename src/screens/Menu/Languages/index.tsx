import { Header, Wrapper } from '@/components';
import { setUpdateInfo, updateInfo } from '@/redux/slices/authSlice/authSlice';
import { Input } from '@rneui/base';
import { Button, Divider, Icon, Switch, Text, useTheme } from '@rneui/themed';
import { FunctionComponent, useEffect, useRef, useState } from 'react';
import { Keyboard, LayoutAnimation, ScrollView, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import useStyles from './styles';
import { useAppSelector } from '@/redux/store/customReduxHook';
import OTPCustom from '@/screens/Auth/Register/Components/OTPCode/Components/OTPCustom';
import { normalize } from '@/configs';
import TitleRow from '@/components/Form/TitleRow';
import RowChoose from '@/components/Form/RowChoose';
import { IconEn, IconVN } from '@/assets/images/app';

type LanguagesProps = {
  handleGoBack: () => void;
};

const LanguagesComps: FunctionComponent<LanguagesProps> = ({ handleGoBack }) => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const { theme } = useTheme();

  const [error, setError] = useState<string>('');
  const [showVN, setShowVn] = useState(true);
  const [showEn, setShowEn] = useState(false);

  //
  const otpRef = useRef(null);

  return (
    <Wrapper isSafe>
      <Header title={'Ngôn ngữ'} goBack={handleGoBack} />
      <View style={styles.container}>
        <View style={{ marginTop: 80 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 50 }}>
            <View style={{ width: 30 }}>{<IconVN />}</View>
            <Text numberOfLines={1} style={[styles.title, { flex: 2 }]}>
              {'Tiếng việt'}
            </Text>
            <Switch
              value={showVN}
              onValueChange={() => setShowVn(!showVN)}
              style={{ backgroundColor: 'transparent' }}
            />
          </View>
          {<Divider width={1} style={{ marginVertical: 15 }} color="rgba(47, 140, 51, 0.34)" />}
        </View>
        <View>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 50 }}>
            <View style={{ width: 30 }}>{<IconEn />}</View>
            <Text numberOfLines={1} style={[styles.title, { flex: 2 }]}>
              {'Tiếng anh'}
            </Text>
            <Switch
              value={showEn}
              onValueChange={() => setShowEn(!showEn)}
              style={{ backgroundColor: 'transparent' }}
            />
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

export default LanguagesComps;
