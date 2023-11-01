import React, { useState } from 'react';
import { TouchableOpacity, View, ScrollView, KeyboardAvoidingView, LayoutAnimation } from 'react-native';
import { Text, Icon, useTheme, Input, CheckBox } from '@rneui/themed';
import useStyles from './styles';
import { Header, Wrapper } from '@/components';
import { goBack } from '@/navigation/RootNavigation';
import { Button } from '@rneui/base';
import { authRoute } from '@/constants/route_key';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { mainStackParamList } from '@/navigation/types';
import { useAppDispatch } from '@/redux/store/customReduxHook';
import { register } from '@/redux/slices/authSlice/authSlice';

const RegisterScreen: React.FC = () => {
  const styles = useStyles();
  const { theme } = useTheme();
  const navigation = useNavigation<StackNavigationProp<mainStackParamList>>();
  const dispatch = useAppDispatch();

  const [error, setError] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [hidePassword, setHidePassword] = useState<boolean>(true);
  const [isRemember, setIsRemember] = useState<boolean>(false);
  const [onCheck, setOnCheck] = useState<boolean>(false);

  const handleRRegister = () => {
    if (firstName === '' || lastName === '' || email === '' || password === '') {
      setError('Vui lòng nhập đầy đủ thông tin');
      return;
    } else if (onCheck) {
      setError('Vui lòng đánh dấu');
      return;
    }
    dispatch(
      register({
        name: lastName + firstName,
        email,
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
        <ScrollView style={styles.form} showsVerticalScrollIndicator={false}>
          <Text style={styles.title}>Create your account</Text>
          {/*  */}
          <Text
            style={[
              styles.titleInput,
              {
                marginTop: 30,
              },
            ]}
          >
            First Name
          </Text>
          <Input
            returnKeyType="done"
            blurOnSubmit
            placeholder="First Name"
            value={firstName}
            onChangeText={text => {
              setFirstName(text);
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
          {/* last name */}
          <View>
            <Text
              style={[
                styles.titleInput,
                {
                  marginTop: 30,
                },
              ]}
            >
              Last Name
            </Text>
            <Input
              returnKeyType="done"
              blurOnSubmit
              placeholder="Last Name"
              value={lastName}
              onChangeText={text => {
                setLastName(text);
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
          </View>
          {/* email */}
          <View>
            <Text
              style={[
                styles.titleInput,
                {
                  marginTop: 30,
                },
              ]}
            >
              Email
            </Text>
            <Input
              returnKeyType="done"
              blurOnSubmit
              placeholder="Email"
              textContentType="emailAddress"
              value={email}
              onChangeText={text => {
                setEmail(text);
                setError('');
                if (error !== '') {
                  LayoutAnimation.spring();
                }
              }}
              keyboardType="email-address"
              inputContainerStyle={[
                styles.formController,
                {
                  borderColor: error !== '' ? theme.colors.error : theme.colors.border,
                },
              ]}
              containerStyle={styles.formContainerController}
              inputStyle={[styles.formInputText, { color: error !== '' ? theme.colors.error : theme.colors.black }]}
            />
          </View>
          {/* password */}
          <View>
            <Text
              style={[
                styles.titleInput,
                {
                  marginTop: 30,
                },
              ]}
            >
              Password
            </Text>
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
            <Text style={styles.textForgotPassword}>Looks Good</Text>
            <Icon
              name="check"
              type="antdesign"
              size={18}
              //   containerStyle={styles.buttonDelete}
              iconStyle={styles.checkIcon}
              onPress={() => setOnCheck(!onCheck)}
            />
          </View>
          <View style={styles.rowTitle1}>
            <CheckBox
              checked={isRemember}
              onPress={() => setIsRemember(!isRemember)}
              iconType="material-community"
              checkedIcon="checkbox-marked"
              uncheckedIcon="checkbox-blank-outline"
              checkedColor="#03801F"
              containerStyle={{ backgroundColor: 'transparent', padding: 0 }}
            />
            <View style={{ flex: 1 }}>
              <Text style={styles.text}>
                I certify that I am 16 years of age or older, and I agree to the{' '}
                <Text style={{ color: '#03801F', fontSize: 15 }}>User Agreement</Text> and
                <Text style={{ color: '#03801F', fontSize: 15 }}> Privacy Policy</Text>
              </Text>
            </View>
          </View>
          <Button
            title="Start"
            buttonStyle={styles.button}
            containerStyle={styles.buttonContainer}
            onPress={handleRRegister}
            titleStyle={{
              fontSize: 14,
              fontWeight: '600',
            }}
          />
          <View style={{ paddingHorizontal: 24, paddingTop: 20 }}>
            {error !== '' && (
              <View style={styles.backgroundError}>
                <Text style={styles.textError}>{error}</Text>
              </View>
            )}
          </View>
        </ScrollView>
      </View>
      <KeyboardAvoidingView></KeyboardAvoidingView>
    </Wrapper>
  );
};

export default RegisterScreen;
