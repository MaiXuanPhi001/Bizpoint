import React, { useEffect, useRef } from 'react';
import { Animated, Easing, View } from 'react-native';
import { Button, Icon, Text, useTheme } from '@rneui/themed';
import { Wrapper } from '@/components';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import useStyles from './styles';
import { mainStackParamList } from '@/navigation/types';
import AnimatedLottieView from 'lottie-react-native';
import { useAppDispatch, useAppSelector } from '@/redux/store/customReduxHook';
import { VerifyDoneIcon } from '@/utils/svg/VerifyEmail';
import { CCCD } from '@/utils/svg';
import { authRoute } from '@/constants/route_key';

interface IdentityVerificationProps extends NativeStackScreenProps<mainStackParamList, 'IdentityVerification'> {}
const IdentityVerification: React.FC<IdentityVerificationProps> = ({ navigation, route }) => {
  //   const { orderId, orderNo, point } = route.params || {};
  const styles = useStyles();
  const dispatch = useAppDispatch();

  const { theme } = useTheme();

  return (
    <Wrapper isSafe>
      <View style={styles.container}>
        <View style={{ alignItems: 'center', paddingTop: 20 }}>
          <Text
            style={[
              styles.title,
              {
                marginTop: 60,
                marginBottom: 20,
              },
            ]}
          >
            Xác minh danh tính
          </Text>
          <CCCD />
        </View>
        <View style={{}}>
          <Text style={styles.title}>Verify your identity</Text>
          <Text
            style={[
              styles.text,
              {
                marginTop: 10,
              },
            ]}
          >
            Xác minh danh tính của bạn để bắt đầu sử dụng dịch vụ của Bizpoint
          </Text>
        </View>
        {/*  */}
        <View style={{ flexDirection: 'row', justifyContent: 'center', paddingLeft: 10, paddingTop: 10 }}>
          <Icon name="dot-single" type="entypo" size={15} color={theme.colors.grey2} style={{ padding: 10 }} />
          <Text style={styles.text}>Vui lòng chuẩn bị Căn cước công dân hoặc hộ chiếu mới nhất</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center', paddingLeft: 10, paddingTop: 10 }}>
          <Icon name="dot-single" type="entypo" size={15} color={theme.colors.grey2} style={{ padding: 10 }} />
          <Text style={styles.text}>Chọn khu vực có đủ ánh sáng và không bị chói đèn</Text>
        </View>
        {/*  */}
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 100, marginBottom: 20 }}>
          <Icon
            name="lock"
            type="materialIcons"
            size={20}
            color={theme.colors.grey2}
            style={{ paddingTop: 20, marginLeft: 10 }}
          />
          <Text style={[styles.text, { paddingRight: 30, marginLeft: 20 }]}>
            This info is used only for identity verification and is transmitted securely ysing 128-bit encryption
          </Text>
        </View>
        <Button
          title="Countinue"
          buttonStyle={styles.button}
          containerStyle={styles.buttonContainer}
          onPress={() => {
            navigation.navigate(authRoute.checkIdentity as never);
          }}
          titleStyle={{
            fontSize: 14,
            fontWeight: '600',
          }}
        />
      </View>
    </Wrapper>
  );
};

export default IdentityVerification;
