import { apiStatus } from '@/constants';

import { checkOtpEmailApi, getOtpEmailApi, getUserInfoApi, loginApi, registerApi } from '@/services/api/auth';
import { AxiosResponseBWData } from '@/types/api';
import { PayloadAction } from '@reduxjs/toolkit';
import SimpleToast from 'react-native-simple-toast';
import { call, put, takeLatest } from 'redux-saga/effects';
// import { } from './types';
import { hideLoading, setLoginLoading, showLoading } from '@/redux/slices/loadingSlice';
import { navigate } from '@/navigation/RootNavigation';
import { authRoute } from '@/constants/route_key';
import { showToastBottom } from '@/functions';
import { getUserinfoMenu, setUserInfoMenu } from '@/redux/slices/menuSlice/menuSlice';
import { statistical } from './types';

export function* getUserInfoMenuSaga() {
  try {
    const { data: data, status: status }: AxiosResponseBWData<any> = yield call(getUserInfoApi);
    if (status === apiStatus.SUCCESS) {
      yield put(setUserInfoMenu(data?.data));
    }
  } catch (error) {
    console.log('🚀 ~ file: menuSaga.ts:24 ~ function*getUserInfoMenuSaga ~ error:', error);
  }
}

export function* menuSaga() {
  yield takeLatest(getUserinfoMenu, getUserInfoMenuSaga);
}
