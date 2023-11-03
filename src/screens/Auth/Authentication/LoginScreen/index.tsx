import React, { useState } from 'react';
import { LayoutAnimation, TouchableOpacity, View } from 'react-native';
import { Text, Icon, useTheme, Input, Button } from '@rneui/themed';
import useStyles from './styles';
import { Wrapper, Header } from '@/components';
import { goBack } from '@/navigation/RootNavigation';
import { useAppDispatch, useAppSelector } from '@/redux/store/customReduxHook';
import { login } from '@/redux/slices/authSlice/authSlice';

const LoginScreen: React.FC = () => {
  const styles = useStyles();
  const { theme } = useTheme();
  const { loginInfo, loginMessage } = useAppSelector(state => state.authReducer);
  const dispatch = useAppDispatch();

  const [emailOrPhone, setEmailOrPhone] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isRemember, setIsRemember] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const [hidePassword, setHidePassword] = useState<boolean>(true);

  const handleLogin = (type?: 'biometrics' | null) => {
    // if (type === 'biometrics') {
    //   if (loginInfo.employeeCode === '') {
    //     setError('Vui lòng nhập mã nhân viên');
    //     return;
    //   }
    //   if (loginInfo.password === '') {
    //     setError('Vui lòng nhập mật khẩu');
    //     return;
    //   }
    //   dispatch(login(loginInfo));
    //   return;
    // }
    if (emailOrPhone === '' || password === '') {
      setError('Vui lòng nhập Email/Phone và mật khẩu');
      return;
    }

    dispatch(
      login({
        isRemember,
        emailOrPhone,
        password,
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
        <Text style={styles.title}>Đăng nhập Bizpoint</Text>
        <Text
          style={[
            styles.titleInput,
            {
              marginTop: 30,
            },
          ]}
        >
          Email/Phone
        </Text>
        <Input
          returnKeyType="done"
          blurOnSubmit
          placeholder="Email or phone"
          value={emailOrPhone}
          onChangeText={text => {
            setEmailOrPhone(text);
            setError('');
            if (error !== '') {
              LayoutAnimation.spring();
            }
          }}
          // keyboardType="phone-pad"
          inputContainerStyle={[
            styles.formController,
            {
              borderColor: error !== '' ? theme.colors.error : theme.colors.border,
            },
          ]}
          containerStyle={styles.formContainerController}
          inputStyle={[styles.formInputText, { color: error !== '' ? theme.colors.error : theme.colors.black }]}
        />

        {/* password */}
        <View style={{ marginTop: 32 }}>
          <Text style={[styles.titleInput, { color: '#03801F' }]}>Password</Text>
          <Input
            returnKeyType="done"
            blurOnSubmit
            placeholder="Password"
            secureTextEntry={hidePassword}
            value={password}
            onChangeText={text => {
              setPassword(text);
              setError('');
              if (error !== '') {
                LayoutAnimation.spring();
              }
            }}
            inputContainerStyle={[
              styles.formController,
              {
                borderColor: error !== '' ? theme.colors.error : theme.colors.border,
              },
            ]}
            containerStyle={styles.formContainerController}
            inputStyle={[styles.formInputText, { color: error !== '' ? theme.colors.error : theme.colors.black }]}
          />
          <Icon
            name={hidePassword ? 'eye' : 'eye-off'}
            type="feather"
            containerStyle={{ position: 'absolute', right: 20, bottom: 4 }}
            color={theme.colors.grey2}
            onPress={() => {
              setHidePassword(!hidePassword);
            }}
            size={20}
          />
        </View>
        <View style={styles.rowTitle}>
          <TouchableOpacity>
            <Text style={styles.textForgotPassword}>Forgot password</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.textForgotPassword}>Privacy policy</Text>
          </TouchableOpacity>
        </View>

        <Button
          title="Sign In"
          buttonStyle={styles.button}
          containerStyle={styles.buttonContainer}
          onPress={() => {
            handleLogin();
          }}
          titleStyle={{
            fontSize: 14,
            fontWeight: '600',
          }}
        />
      </View>
      <View style={{ paddingHorizontal: 24 }}>
        {error !== '' && (
          <View style={styles.backgroundError}>
            <Text style={styles.textError}>{error}</Text>
          </View>
        )}
      </View>
    </Wrapper>
  );
};

export default LoginScreen;
