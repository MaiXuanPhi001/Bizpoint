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
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useAppDispatch } from '@/redux/store/customReduxHook';

interface UpdateInfoScreenProps extends NativeStackScreenProps<mainStackParamList, 'UpdateInfoScreen'> {}
const UpdateInfoScreen: React.FC<UpdateInfoScreenProps> = ({ navigation, route }) => {
  const styles = useStyles();
  const { theme } = useTheme();
  const dispatch = useAppDispatch();

  const [error, setError] = useState<string>('');
  const [showModalProvince, setShowModalProvince] = useState<boolean>(true);
  const [isRemember, setIsRemember] = useState<boolean>(false);
  //
  const [fullName, setFullName] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [birthday, setBirthday] = useState<string>('');
  const [cccd, setCCCD] = useState<string>('');
  const [issuedBy, setIssuedBy] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [province, setProvince] = useState<string>('');

  const handleUploadInfo = () => {
    if (
      fullName === '' ||
      phoneNumber === '' ||
      email === '' ||
      birthday === '' ||
      cccd === '' ||
      issuedBy === '' ||
      address === '' ||
      province === ''
    ) {
      setError('Vui lòng nhập đầy đủ thông tin');
      return;
    }
    // dispatch(
    //   getOTP({
    //     email,
    // name:fullName,
    // phoneNumber: phoneNumber,
    // dateOfBirth: birthday,
    // identificationNumber: cccd,
    // identificationIssuer: issuedBy,
    // address:address,
    // provinceId: province
    //   }),
    // );
    console.log('-------', fullName, phoneNumber, email, birthday, cccd, issuedBy, address, province);
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
          <Text style={styles.title}>Cập nhật thông tin tài khoản</Text>
          {/*  */}
          <Text
            style={[
              styles.titleInput,
              {
                marginTop: 30,
              },
            ]}
          >
            Họ và Tên
          </Text>
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
            onPress={
              handleUploadInfo
              // navigation.navigate(authRoute.verifyScreen as never);
            }
            titleStyle={{
              fontSize: 14,
              fontWeight: '600',
            }}
          />
        </ScrollView>
        {error !== '' && (
          <View style={styles.backgroundError}>
            <Text style={styles.textError}>{error}</Text>
          </View>
        )}
      </View>
      <KeyboardAvoidingView behavior={'padding'}></KeyboardAvoidingView>
    </Wrapper>
  );
};

export default UpdateInfoScreen;
