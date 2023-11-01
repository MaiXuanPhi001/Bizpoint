import { AppImage, Wrapper } from '@/components';
import { mainStackParamList } from '@/navigation/types';
import { useAppDispatch, useAppSelector } from '@/redux/store/customReduxHook';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text, useTheme } from '@rneui/themed';
import { ImageBackground, TouchableOpacity, View } from 'react-native';
import useStyles from './styles';

import { IconLoading } from '@/assets/images/visit';
import { formatStringToMoney } from '@/functions/money';
import { useIsFocused } from '@react-navigation/native';
import { Icon } from '@rneui/base';
import VisitMap from './Components/visitMap';

interface CustomerDetailScreenProps extends NativeStackScreenProps<mainStackParamList, 'VisitScreen'> {}
const VisitScreen: React.FC<CustomerDetailScreenProps> = ({ navigation }) => {
  const styles = useStyles();
  const dispatch = useAppDispatch();
  const isFocused = useIsFocused();
  const { theme } = useTheme();

  const { userInfo } = useAppSelector(state => state.menuSlice);

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
            <View style={[styles.bgInfo1, {}]}>
              <IconLoading />
              <View style={{ flexDirection: 'row' }}>
                <Text style={[styles.text2, {}]}>123 000</Text>
                <View style={{ position: 'absolute', left: 84, bottom: 16 }}>
                  <Icon name="copy1" type="antdesign" size={22} color={theme.colors.white} />
                </View>
              </View>
            </View>
            <TouchableOpacity onPress={() => {}} style={{ alignItems: 'flex-start' }}>
              <Text style={{ fontSize: 16, fontWeight: '500', color: 'white' }}>Số point khả dụng</Text>
              <Text style={[styles.text, { marginVertical: 5 }]}>Current balance</Text>
              <Text style={styles.text2}>{formatStringToMoney(userInfo?.bizPoint || 0)}</Text>
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
        <VisitMap />
      </View>
    </Wrapper>
  );
};

export default VisitScreen;
