import { Header, Wrapper } from '@/components';
import { setUpdateInfo, updateInfo } from '@/redux/slices/authSlice/authSlice';
import { Input } from '@rneui/base';
import { Button, Icon, Text, useTheme } from '@rneui/themed';
import { FunctionComponent, useEffect, useState } from 'react';
import { LayoutAnimation, ScrollView, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import useStyles from './styles';
import { useAppSelector } from '@/redux/store/customReduxHook';

type UpdateInfoProps = {
  handleGoBack: () => void;
};

const UpdateInfo: FunctionComponent<UpdateInfoProps> = ({ handleGoBack }) => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const { theme } = useTheme();
  const { userInfo } = useAppSelector(state => state.menuSlice);
  const { isSuccessUpdate } = useAppSelector(state => state.authReducer);

  const [error, setError] = useState<string>('');
  //
  const [fullName, setFullName] = useState<string>(userInfo?.name || '');
  const [phoneNumber, setPhoneNumber] = useState<string>(userInfo?.phoneNumber || '');
  const [email, setEmail] = useState<string>(userInfo?.email || '');
  const [birthday, setBirthday] = useState<string>(userInfo?.dateOfBirth || '');
  const [cccd, setCCCD] = useState<string>(userInfo?.identificationNumber || '');
  const [issuedBy, setIssuedBy] = useState<string>(userInfo?.identificationIssuer || '');
  const [address, setAddress] = useState<string>(userInfo?.address || '');
  const [province, setProvince] = useState<any>(userInfo?.provinceId || '');
  const [showModalProvince, setShowModalProvince] = useState<boolean>(true);

  useEffect(() => {
    // sau khi update thong tin thanh cong thi quay lai menu
    if (isSuccessUpdate) {
      setTimeout(() => {
        handleGoBack();
        dispatch(setUpdateInfo(false));
      }, 2000);
    }
  }, [isSuccessUpdate]);

  const handleUpdateInfo = () => {
    if (
      fullName === '' ||
      phoneNumber === '' ||
      email === '' ||
      birthday === '' ||
      cccd === '' ||
      issuedBy === '' ||
      address === ''
    ) {
      setError('Vui lòng nhập đầy đủ thông tin');
      return;
    }
    const data = {
      name: fullName,
      phoneNumber: phoneNumber,
      dateOfBirth: birthday,
      identificationNumber: cccd,
      identificationIssuer: issuedBy,
      address: address,
      provinceId: province,
    };
    dispatch(updateInfo(data));
  };

  return (
    <Wrapper isSafe>
      <Header title={'Cập nhật thông tin tài khoản'} goBack={handleGoBack} />
      <View style={styles.container}>
        <View style={styles.bordershadow}>
          <ScrollView style={styles.form} showsVerticalScrollIndicator={false}>
            <Text style={[styles.titleInput, {}]}>Họ và Tên</Text>
            <Input
              returnKeyType="done"
              blurOnSubmit
              placeholder="Họ và Tên"
              value={fullName}
              onChangeText={text => {
                setFullName(text);
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
                Số điện thoại
              </Text>
              <Input
                returnKeyType="done"
                blurOnSubmit
                placeholder="Số điện thoại    "
                value={phoneNumber}
                onChangeText={text => {
                  setPhoneNumber(text);
                  setError('');
                  if (error !== '') {
                    LayoutAnimation.spring();
                  }
                }}
                keyboardType="phone-pad"
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
            {/*  */}
            <View>
              <Text
                style={[
                  styles.titleInput,
                  {
                    marginTop: 30,
                  },
                ]}
              >
                Ngày sinh
              </Text>
              <Input
                returnKeyType="done"
                blurOnSubmit
                placeholder=" Ngày sinh"
                textContentType="emailAddress"
                value={birthday}
                onChangeText={text => {
                  setBirthday(text);
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
            </View>
            {/*  */}
            <View>
              <Text
                style={[
                  styles.titleInput,
                  {
                    marginTop: 30,
                  },
                ]}
              >
                Số căn cước công dân/Hộ chiếu
              </Text>
              <Input
                returnKeyType="done"
                blurOnSubmit
                placeholder="Số căn cước công dân/Hộ chiếu"
                textContentType="emailAddress"
                value={cccd}
                onChangeText={text => {
                  setCCCD(text);
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
            </View>
            {/*  */}
            <View>
              <Text
                style={[
                  styles.titleInput,
                  {
                    marginTop: 30,
                  },
                ]}
              >
                Nơi cấp
              </Text>
              <Input
                returnKeyType="done"
                blurOnSubmit
                placeholder="Nơi cấp"
                textContentType="emailAddress"
                value={issuedBy}
                onChangeText={text => {
                  setIssuedBy(text);
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
            </View>
            {/*  */}
            <View>
              <Text
                style={[
                  styles.titleInput,
                  {
                    marginTop: 30,
                  },
                ]}
              >
                Địa chỉ
              </Text>
              <Input
                returnKeyType="done"
                blurOnSubmit
                placeholder="Địa chỉ"
                textContentType="emailAddress"
                value={address}
                onChangeText={text => {
                  setAddress(text);
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
            </View>
            {/*  */}
            <View>
              <Text
                style={[
                  styles.titleInput,
                  {
                    marginTop: 30,
                  },
                ]}
              >
                Tỉnh - Thành phố
              </Text>
              <Input
                returnKeyType="done"
                blurOnSubmit
                placeholder="Tỉnh - Thành phố"
                textContentType="emailAddress"
                value={province}
                onChangeText={text => {
                  setProvince(text);
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
              <TouchableOpacity
                onPress={() => {
                  setShowModalProvince(!showModalProvince);
                }}
              >
                <Icon
                  name={showModalProvince ? 'chevron-thin-down' : 'chevron-thin-up'}
                  type="entypo"
                  containerStyle={{ position: 'absolute', right: 20, bottom: 4 }}
                  color={theme.colors.grey2}
                  size={20}
                />
              </TouchableOpacity>
            </View>
            {/*  */}
            <Button
              title="HOÀN THÀNH"
              buttonStyle={styles.button}
              containerStyle={styles.buttonContainer}
              onPress={handleUpdateInfo}
              titleStyle={{
                fontSize: 14,
                fontWeight: '600',
              }}
            />
          </ScrollView>
        </View>
      </View>
    </Wrapper>
  );
};

export default UpdateInfo;
