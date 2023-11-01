import { images } from '@/configs';
import { Icon, Text, normalize, useTheme } from '@rneui/themed';
import { FunctionComponent, useState } from 'react';
import {
  Image,
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

type FeedBackProps = {
  handleGoBack?: () => void;
};

const FeedBack: FunctionComponent<FeedBackProps> = ({ handleGoBack }) => {
  const styles = useStyles();
  const [error, setError] = useState<string>('');
  const { theme } = useTheme();

  return (
    <Wrapper isSafe>
      <Header title={'Gửi phản hồi'} goBack={handleGoBack} />
      <View style={styles.container}>
        <View style={styles.bordershadow}>
          <Text style={styles.text}>Số tài khoản </Text>
          <Input
            returnKeyType="done"
            blurOnSubmit
            // value={employeeCode}
            // onChangeText={text => {
            //   setEmployeeCode(text);
            //   setError('');
            //   if (error !== '') {
            //     LayoutAnimation.spring();
            //   }
            // }}
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

          <Text style={styles.text}>Số tài khoản </Text>
          <Input
            returnKeyType="done"
            blurOnSubmit
            // value={employeeCode}
            // onChangeText={text => {
            //   setEmployeeCode(text);
            //   setError('');
            //   if (error !== '') {
            //     LayoutAnimation.spring();
            //   }
            // }}
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
          <Text
            style={[
              styles.text,
              {
                marginBottom: 8,
              },
            ]}
          >
            Số tài khoản{' '}
          </Text>
          <Input
            returnKeyType="done"
            blurOnSubmit
            // value={employeeCode}
            // onChangeText={text => {
            //   setEmployeeCode(text);
            //   setError('');
            //   if (error !== '') {
            //     LayoutAnimation.spring();
            //   }
            // }}
            keyboardType="phone-pad"
            containerStyle={{ marginBottom: -20 }}
            inputContainerStyle={[styles.inputContainer, { height: 145 }]}
            inputStyle={[styles.formInputText, { color: error !== '' ? theme.colors.error : theme.colors.black }]}
          />
          <Button
            title="Gửi"
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
        </View>
      </View>
    </Wrapper>
  );
};

export default FeedBack;
