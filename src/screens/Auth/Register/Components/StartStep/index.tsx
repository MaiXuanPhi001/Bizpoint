import React, { useEffect, useRef } from 'react';
import { Animated, Easing, View } from 'react-native';
import { Button, Icon, Text, useTheme } from '@rneui/themed';
import { Header, Wrapper } from '@/components';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import useStyles from './styles';
import { mainStackParamList } from '@/navigation/types';
import AnimatedLottieView from 'lottie-react-native';
import { useAppDispatch, useAppSelector } from '@/redux/store/customReduxHook';
import { Step } from '@/utils/svg';
import { authRoute } from '@/constants/route_key';
import { TouchableOpacity } from 'react-native';
import { goBack } from '@/navigation/RootNavigation';

interface StartStepScreenProps extends NativeStackScreenProps<mainStackParamList, 'StartStepScreen'> {}
const StartStepScreen: React.FC<StartStepScreenProps> = ({ navigation, route }) => {
  //   const { orderId, orderNo, point } = route.params || {};
  const styles = useStyles();
  const dispatch = useAppDispatch();

  const { theme } = useTheme();

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
        <Step />
        <Text style={[styles.title, { marginBottom: 20 }]}>Let’s secure your account</Text>

        <View style={{ marginBottom: 24 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ backgroundColor: '#03801F', borderRadius: 50 }}>
                <Text style={styles.title3}>1</Text>
              </View>
              <Text style={styles.title2}>Create your account</Text>
            </View>
            <Text style={styles.title2}>Completed</Text>
          </View>
        </View>

        {/*  */}
        <View style={{ marginBottom: 24 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ backgroundColor: '#03801F', borderRadius: 50 }}>
                <Text style={styles.title3}>2</Text>
              </View>
              <View>
                <Text style={styles.title2}>Secure your account</Text>
                <Text style={{ marginLeft: 20, color: theme.colors.grey3 }}>2-step verification</Text>
              </View>
            </View>
            <Text style={styles.title2}>1 min</Text>
          </View>
        </View>
        {/*  */}
        <View style={{ marginBottom: 24, flex: 1 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ backgroundColor: '#F3F3F3', borderRadius: 50 }}>
                <Text style={[styles.title3, { color: '#707070' }]}>3</Text>
              </View>
              <View>
                <Text style={styles.title2}>Verify your identity</Text>
                <Text style={{ marginLeft: 20, color: theme.colors.grey3 }}>Required by financial regulations</Text>
              </View>
            </View>
            <Text style={styles.title2}>5 min</Text>
          </View>
        </View>
        {/*  */}
        <Button
          title="Start"
          buttonStyle={styles.button}
          containerStyle={styles.buttonContainer}
          onPress={() => {
            navigation.navigate(authRoute.updateInfoScreen as never);
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

export default StartStepScreen;
