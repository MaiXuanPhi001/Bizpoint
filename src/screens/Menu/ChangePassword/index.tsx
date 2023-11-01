import { images } from '@/configs';
import { Icon, Text, normalize, useTheme } from '@rneui/themed';
import { FunctionComponent, useState } from 'react';
import {
  Image,
  LayoutAnimation,
  NativeSyntheticEvent,
  TextInput,
  TextInputSubmitEditingEventData,
  TouchableOpacity,
  View,
} from 'react-native';
import useStyles from './styles';
import { Header, Wrapper } from '@/components';
import { Input } from '@rneui/base';
import { Button } from '@rneui/themed';
import { useDispatch } from 'react-redux';
import { changePassword } from '@/redux/slices/authSlice/authSlice';

type FeedBackProps = {
  handleGoBack?: () => void;
};

const ChangePassword: FunctionComponent<FeedBackProps> = ({ handleGoBack }) => {
  const styles = useStyles();
  const dispatch = useDispatch();

  const [error, setError] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const { theme } = useTheme();

  const handleChangePassword = () => {
    if (password === '' || newPassword === '') {
      setError('Vui lòng nhập đầy đủ thông tin');
      return;
    }
    const data = {
      password,
      newPassword,
    };
    dispatch(changePassword(data));
  };

  return (
    <Wrapper isSafe>
      <Header title={'Đổi mật khẩu'} goBack={handleGoBack} />
      <View style={styles.container}>
        <View style={styles.bordershadow}>
          <View>
            <Text style={styles.text}>Mật khẩu cũ </Text>
            <Input
              returnKeyType="done"
              blurOnSubmit
              value={password}
              onChangeText={text => {
                setPassword(text);
                setError('');
                if (error !== '') {
                  LayoutAnimation.spring();
                }
              }}
              keyboardType="phone-pad"
              inputContainerStyle={[
                styles.inputContainer,
                {
                  margin: 8,
                },
              ]}
              containerStyle={{ marginBottom: -20 }}
              inputStyle={[styles.formInputText, { color: error !== '' ? theme.colors.error : theme.colors.black }]}
            />
            {/* ------------------ */}

            <Text style={styles.text}>Mật khẩu mới </Text>
            <Input
              returnKeyType="done"
              blurOnSubmit
              value={newPassword}
              onChangeText={text => {
                setNewPassword(text);
                setError('');
                if (error !== '') {
                  LayoutAnimation.spring();
                }
              }}
              keyboardType="phone-pad"
              inputContainerStyle={[
                styles.inputContainer,
                {
                  margin: 8,
                },
              ]}
              containerStyle={{ marginBottom: -20 }}
              inputStyle={[styles.formInputText, { color: error !== '' ? theme.colors.error : theme.colors.black }]}
            />
          </View>

          <Button
            title="Gửi"
            buttonStyle={styles.button}
            containerStyle={styles.buttonContainer}
            onPress={() => {
              handleChangePassword();
            }}
            titleStyle={{
              fontSize: 14,
              fontWeight: '600',
            }}
          />
          {error !== '' && (
            <View style={styles.backgroundError}>
              <Text style={styles.textError}>{error}</Text>
            </View>
          )}
        </View>
      </View>
    </Wrapper>
  );
};

export default ChangePassword;
