import { apiStatus } from '@/constants';
import {
  login,
  loginPayload,
  setLoginMessage,
  saveLoginInfo,
  saveUserInfo,
  register,
  registerPayload,
  getOTP,
  checkOtp,
  changePassword,
  PayloadChangePassword,
  logout,
  updateInfo,
  PayloadUpdateInfo,
  setUpdateInfo,
} from '@/redux/slices/authSlice/authSlice';
import {
  changePasswordApi,
  checkOtpEmailApi,
  getOtpEmailApi,
  getUserInfoApi,
  loginApi,
  registerApi,
  updateInfoApi,
} from '@/services/api/auth';
import { AxiosResponseBWData } from '@/types/api';
import { PayloadAction } from '@reduxjs/toolkit';
import SimpleToast from 'react-native-simple-toast';
import { call, put, takeLatest } from 'redux-saga/effects';
import { checkOTPPayload, getOTPPayload, loginResponse, registerResponse } from './types';
import { hideLoading, setLoginLoading, showLoading } from '@/redux/slices/loadingSlice';
import { goBack, navigate } from '@/navigation/RootNavigation';
import { authRoute } from '@/constants/route_key';
import { showToastBottom } from '@/functions';
import { setUserInfoMenu } from '@/redux/slices/menuSlice/menuSlice';
import { getUserInfoMenuSaga } from '../menuSaga/menuSaga';

function* loginSaga(action: PayloadAction<loginPayload>): any {
  const { isRemember, emailOrPhone, password } = action.payload;
  yield put(setLoginLoading(true));
  try {
    const { data, status }: AxiosResponseBWData<loginResponse> = yield call(loginApi, {
      userName: emailOrPhone,
      password: password,
    });
    if (status === apiStatus.SUCCESS) {
      yield put(setLoginMessage(''));
      yield put(
        saveLoginInfo({
          isRemember,
          emailOrPhone,
          password,
        }),
      );
      yield put(
        saveUserInfo({
          accessToken: data.data?.token,
          refreshToken: isRemember ? data.data?.refreshToken : null,
        }),
      );
      // yield* getListUserPermissionSaga();
    } else {
      yield put(setLoginMessage(data.message));
    }
  } catch (e: any) {
    SimpleToast.show(e.message, SimpleToast.SHORT);
    yield put(setLoginLoading(false));
  } finally {
    yield put(setLoginLoading(false));
  }
}

function* registerSaga(action: PayloadAction<registerPayload>): any {
  yield put(setLoginLoading(true));
  try {
    const { data, status }: AxiosResponseBWData<registerResponse> = yield call(registerApi, action.payload);
    if (status === apiStatus.SUCCESS) {
      yield put(setLoginMessage(''));
      const { email }: any = data?.data;
      navigate(authRoute.verifyScreen, { email });
    } else {
      showToastBottom('Email đã tồn tại');
    }
  } catch (e: any) {
    SimpleToast.show(e.message, SimpleToast.SHORT);
    yield put(setLoginLoading(false));
  } finally {
    yield put(setLoginLoading(false));
  }
}

function* getOTPSaga(action: PayloadAction<getOTPPayload>): any {
  yield put(setLoginLoading(true));
  try {
    const { data, status }: AxiosResponseBWData<registerResponse> = yield call(getOtpEmailApi, action.payload);
    if (status === apiStatus.SUCCESS) {
      const { otp }: any = data?.data;
      const { email } = action?.payload;
      navigate(authRoute.OTPCodeScreen, { otp, email });
    } else {
      showToastBottom('Có lỗi ! Vui lòng gửi lại yêu càu');
    }
  } catch (e: any) {
    SimpleToast.show(e.message, SimpleToast.SHORT);
    yield put(setLoginLoading(false));
  } finally {
    yield put(setLoginLoading(false));
  }
}

function* checkOtpSaga(action: PayloadAction<checkOTPPayload>): any {
  yield put(setLoginLoading(true));
  try {
    const { status }: AxiosResponseBWData<checkOTPPayload> = yield call(checkOtpEmailApi, action.payload);
    if (status === apiStatus.SUCCESS) {
      const { email } = action?.payload;

      navigate(authRoute.verifyDoneScreen, { email });
    } else {
      showToastBottom('OTP không đúng ! Vui lòng nhập lại');
    }
  } catch (e: any) {
    SimpleToast.show(e.message, SimpleToast.SHORT);
    yield put(setLoginLoading(false));
  } finally {
    yield put(setLoginLoading(false));
  }
}

function* changePasswordSaga(action: PayloadAction<PayloadChangePassword>): Generator {
  yield put(showLoading());
  try {
    const res: any = yield call(changePasswordApi, action.payload);
    const { data, status } = res;

    if (status === apiStatus.SUCCESS) {
      SimpleToast.show('Đổi mật khẩu thành công. Vui lòng đăng nhập lại', SimpleToast.SHORT);
      yield put(logout());
    } else {
      SimpleToast.show('Thay đổi mật khẩu thất bại', SimpleToast.SHORT);
    }
  } catch (error: any) {
    SimpleToast.show(error.message, SimpleToast.SHORT);
  } finally {
    yield put(hideLoading());
  }
}

function* updateInfoSaga(action: PayloadAction<PayloadUpdateInfo>): Generator {
  yield put(showLoading());
  try {
    const res: any = yield call(updateInfoApi, action.payload);
    const { data, status } = res;

    if (status === apiStatus.SUCCESS) {
      SimpleToast.show('Cập nhật thông tin thành công', SimpleToast.SHORT);
      //
      yield* getUserInfoMenuSaga();
      //
      yield put(setUpdateInfo(true));
    } else {
      SimpleToast.show('Cập nhật thông tin thất bại', SimpleToast.SHORT);
    }
  } catch (error: any) {
    SimpleToast.show(error.message, SimpleToast.SHORT);
  } finally {
    yield put(hideLoading());
  }
}
export function* authSaga() {
  yield takeLatest(login, loginSaga);
  yield takeLatest(register, registerSaga);
  yield takeLatest(getOTP, getOTPSaga);
  yield takeLatest(checkOtp, checkOtpSaga);
  yield takeLatest(changePassword.type, changePasswordSaga);
  yield takeLatest(updateInfo.type, updateInfoSaga);
}
