import authReducer from '@/redux/slices/authSlice/authSlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';
import loadingSlice from '@/redux/slices/loadingSlice';
import menuSlice from '../slices/menuSlice/menuSlice';
import transferSlice from '../slices/transferSlice/transferSlice';
import visitSlice from '../slices/visitSlice/visitSlice';

const createDebugger = require('redux-flipper').default;
const sagaMiddleware = createSagaMiddleware();

export const rootReducer = combineReducers({
  authReducer,
  loadingSlice,
  menuSlice,
  transferSlice,
  visitSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
      .concat(sagaMiddleware)
      .concat(createDebugger()),
});

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
