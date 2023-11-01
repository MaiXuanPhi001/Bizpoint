import { checkOTPPayload, getOTPPayload } from '@/redux/sagas/authSaga/types';
import { PayloadChangePassword, PayloadUpdateInfo, registerPayload } from '@/redux/slices/authSlice/authSlice';
import api from '@/services/config';
import { AUTH, PROFILE, WORK } from '@/services/uris';
import messaging, { FirebaseMessagingTypes } from '@react-native-firebase/messaging';

export const loginApi = async (params: { userName: string; password: string }) => {
  //   const token = await messaging().getToken();
  return await api.post(AUTH.LOGIN, {
    phoneNumberOrEmail: params.userName,
    password: params.password,
    //   platform: 'mobile',
    //   device_token: token,
  });
};

export const refreshTokenApi = async (params: { refreshToken: string }) => {
  return await api.post(AUTH.REFRESH_TOKEN, params, { headers: { _retry: true } });
};

export const registerApi = async (payload: registerPayload) => {
  return await api.post(AUTH.REGISTER, payload);
};

export const getOtpEmailApi = async (payload: getOTPPayload) => {
  return await api.post(AUTH.SENDOTP, payload);
};

export const checkOtpEmailApi = async (payload: checkOTPPayload) => {
  return await api.post(AUTH.CHECKOTP, payload);
};

export const getUserInfoApi = async () => {
  return await api.get(PROFILE.PROFILE_USER);
};
export const changePasswordApi = async (payload: PayloadChangePassword) => {
  return await api.post(AUTH.CHANGE_PASSWORD, payload);
};

export const updateInfoApi = async (payload: PayloadUpdateInfo) => {
  return await api.post(AUTH.UPDATEINFO, payload);
};
