import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Button, Icon, Text, useTheme } from '@rneui/themed';
import useStyles from './styles';
import { Header, VerifyIcon, Wrapper } from '@/components';
import { goBack } from '@/navigation/RootNavigation';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { mainStackParamList } from '@/navigation/types';
import { authRoute } from '@/constants/route_key';
import { useAppDispatch } from '@/redux/store/customReduxHook';
import { getOTP } from '@/redux/slices/authSlice/authSlice';

const VerifyScreen: React.FC = ({ route }: any) => {
  const { email } = route?.params;
  const styles = useStyles();
  const { theme } = useTheme();
  const navigation = useNavigation<StackNavigationProp<mainStackParamList>>();
  const dispatch = useAppDispatch();

  const handleSendOTP = () => {
    dispatch(
      getOTP({
        email,
      }),
    );
  };

  const handleReSendOTP = () => {
    dispatch(
      getOTP({
        email,
      }),
    );
  };

  return (
    <Wrapper isSafe>
      <Header
        leftComponent={
          <TouchableOpacity onPress={goBack}>
            <Icon name="close" type="ionicons" size={30} color={theme.colors.black} />
          </TouchableOpacity>
        }
      />
      <View style={styles.container}>
        <View style={{ alignItems: 'center' }}>
          <VerifyIcon style={{ marginLeft: 45, marginTop: 30 }} />
          <Text style={[styles.title, { marginTop: 32 }]}>Verify your email</Text>
          <Text numberOfLines={2} style={[styles.text, { marginTop: 10 }]}>
            We sent a verification email to. Please tap the link inside that email to continiue
          </Text>
        </View>

        <Button
          title="Check my inbox"
          buttonStyle={[styles.button, { marginTop: 160 }]}
          containerStyle={styles.buttonContainer}
          onPress={handleSendOTP}
          titleStyle={{
            fontSize: 14,
            fontWeight: '600',
          }}
        />
        {/*  */}
        <Button
          title="Resend email"
          buttonStyle={[
            styles.button,
            { marginTop: 16, backgroundColor: '#fff', borderWidth: 0.5, borderColor: theme.colors.grey3 },
          ]}
          containerStyle={styles.buttonContainer}
          onPress={handleReSendOTP}
          titleStyle={{
            fontSize: 14,
            fontWeight: '600',
            color: 'black',
          }}
        />
      </View>
    </Wrapper>
  );
};

export default VerifyScreen;
