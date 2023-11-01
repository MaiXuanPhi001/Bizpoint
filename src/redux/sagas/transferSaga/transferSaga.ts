import { apiStatus } from '@/constants';

import { AxiosResponseBWData } from '@/types/api';
import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';
// import { } from './types';
import { showToastBottom } from '@/functions';
import {
  getTransferHistory,
  setTransferHistory,
  getPendingTransferHistory,
  setPendingTransferHistory,
} from '@/redux/slices/transferSlice/transferSlice';
import { getPendingTransfeHistoryApi, getTransferApi } from '@/services/api/transfer';
import { getHistoryParams, getPedingHistoryParams } from '@/services/api/transfer/types';

export function* getTransferHistorySaga(action: PayloadAction<getHistoryParams>): any {
  try {
    const { data: data, status: status }: AxiosResponseBWData<any> = yield call(getTransferApi, action.payload);
    if (status === apiStatus.SUCCESS) {
      yield put(setTransferHistory(data?.array));
    } else {
      showToastBottom('Lỗi lấy lịch sử giao dịch');
    }
  } catch (error) {
    console.log('🚀 ~ file: transferSaga.ts:25 ~ function*getTransferHistorySaga ~ error:', error);
  }
}
export function* getPendingTransferHistorySaga(): any {
  try {
    const { data: data, status: status }: AxiosResponseBWData<any> = yield call(getPendingTransfeHistoryApi);
    if (status === apiStatus.SUCCESS) {
      yield put(setPendingTransferHistory(data?.data));
    } else {
      showToastBottom('Lỗi lấy lịch sử chờ xác nhận giao dịch');
    }
  } catch (error) {
    console.log('🚀 ~ file: transferSaga.ts:33 ~ function*getPendingTransferHistorySaga ~ error:', error);
  }
}

export function* transferSaga() {
  yield takeLatest(getTransferHistory, getTransferHistorySaga);
  yield takeLatest(getPendingTransferHistory, getPendingTransferHistorySaga);
}
