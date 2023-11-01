import { all } from 'redux-saga/effects';
import { authSaga } from './authSaga/authSaga';
import { menuSaga } from './menuSaga/menuSaga';
import { transferSaga } from './transferSaga/transferSaga';
import { visitSaga } from './visitSaga/visitSaga';

export default function* rootSaga() {
  yield all([authSaga(), menuSaga(), transferSaga(), visitSaga()]);
}
