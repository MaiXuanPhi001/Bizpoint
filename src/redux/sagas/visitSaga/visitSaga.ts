import { apiStatus } from '@/constants';

import { AxiosResponseBWData } from '@/types/api';
import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';
// import { } from './types';
import { showToastBottom } from '@/functions';
import {
  getFeatureLocations,
  setFeatureLocations,
  getLocationNearMe,
  setLocationNearMe,
  getSearchLocation,
  setSearchLocation,
} from '@/redux/slices/visitSlice/visitSlice';
import { getFeatureLocationsApi, getLocationNearMeApi, searchLocationApi } from '@/services/api/visit';

export function* getFeatureLocationsSaga(action: any): any {
  try {
    const { data: data, status: status }: AxiosResponseBWData<any> = yield call(getFeatureLocationsApi, action.payload);
    if (status === apiStatus.SUCCESS) {
      yield put(setFeatureLocations(data?.data));
    } else {
      showToastBottom('Lỗi lấy VR Shop nổi bật');
    }
  } catch (error) {
    console.log('🚀 ~ file: visitSaga.ts:21 ~ function*getFeatureLocationsSaga ~ error:', error);
  }
}

export function* getLocationNearMeSaga(action: any): any {
  try {
    const { data: data, status: status }: AxiosResponseBWData<any> = yield call(getLocationNearMeApi, action.payload);
    if (status === apiStatus.SUCCESS) {
      const { array } = data?.data;
      if (array.length > 0) {
        yield put(setLocationNearMe(array));
      } else {
        showToastBottom('Không có VR Shop gần bạn');
      }
    } else {
      showToastBottom('Lỗi lấy VR Shop gần bạn');
    }
  } catch (error) {
    console.log('🚀 ~ file: visitSaga.ts:34 ~ function*getLocationNearMeSaga ~ error:', error);
  }
}

export function* getSearchLocationSaga(action: any): any {
  try {
    const { data: data, status: status }: AxiosResponseBWData<any> = yield call(searchLocationApi, action.payload);
    if (status === apiStatus.SUCCESS) {
      yield put(setSearchLocation(data?.data?.array));
    } else {
      showToastBottom('Lỗi lấy VR Shop gần bạn');
    }
  } catch (error) {
    console.log('🚀 ~ file: visitSaga.ts:51 ~ function*getLocationNearMeSaga ~ error:', error);
  }
}
export function* visitSaga() {
  yield takeLatest(getFeatureLocations, getFeatureLocationsSaga);
  yield takeLatest(getLocationNearMe, getLocationNearMeSaga);
  yield takeLatest(getSearchLocation, getSearchLocationSaga);
}
