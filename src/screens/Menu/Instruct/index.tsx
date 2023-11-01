import { images } from '@/configs';
import { Icon, Text, normalize, useTheme } from '@rneui/themed';
import { FunctionComponent, useState } from 'react';
import {
  Image,
  NativeSyntheticEvent,
  ScrollView,
  TextInput,
  TextInputSubmitEditingEventData,
  TouchableOpacity,
  View,
} from 'react-native';
import useStyles from './styles';
import { Header, Wrapper } from '@/components';
import { Input } from '@rneui/base';
import { Button } from '@rneui/themed';

type InstructProps = {
  handleGoBack?: () => void;
};

const Instruct: FunctionComponent<InstructProps> = ({ handleGoBack }) => {
  const styles = useStyles();
  const [error, setError] = useState<string>('');
  const { theme } = useTheme();

  return (
    <Wrapper isSafe>
      <View style={styles.container}>
        <View style={styles.bordershadow}>
          <ScrollView>
            <Text style={styles.text}>
              <Text style={styles.text1}>- Visit VR Shop:</Text> Người dùng vô VRShop tham quan trải nghiệm mua sắm
              SP/DV. Qua online không yêu cầu tới cửa hàng. Doanh nghiệp sẽ được nhận 50% số điểm người dùng được nhận
              khi Visit -Visit VR Shop: Người dùng vô VRShop tham quan trải nghiệm mua sắm SP/DV. Qua online không yêu
              cầu tới cửa hàng. Doanh nghiệp sẽ được nhận 50% số điểm người dùng được nhận khi Visit -Check-in VR Shop:
              Người dùng tới trực tiếp Shop. Kết nối Wifi của shop thực hiện check-in -Người dùng đăng ký tài khoản
              người dùng miễn phí tại apps Bizpoint (Free User) . Hàng ngày thực hiện Visit hoặc check-in VRshop để nhận
              Point (Số lượt visit/ngày, số Point nhận được sẽ theo cấp độ tài khoản người dùng -Point: Là đơn vị điểm
              của hệ thống tặng người dùng sau mỗi lần thực hiện tác vụ Visit/ Check-in -Người dùng thu thập Point hàng
              ngày để nâng cấp tài khoản Free user = Vip User -Người dùng dùng Point để quy đổi ra voucher mua sắm SP/DV
              của Shop -Doanh nghiệp thu thập Point hàng ngày để kích hoạt hoặc nâng cấp VR Shop
            </Text>
          </ScrollView>
        </View>
      </View>
      <Button
        title="Hoàn Thành"
        buttonStyle={styles.button}
        containerStyle={styles.buttonContainer}
        onPress={() => {
          // handleLogin();
        }}
        titleStyle={{
          fontSize: 14,
          fontWeight: '600',
        }}
      />
    </Wrapper>
  );
};

export default Instruct;
