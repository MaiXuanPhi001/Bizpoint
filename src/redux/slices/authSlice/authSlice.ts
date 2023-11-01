import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist';
import { userInfo } from './types';

export type PayloadChangePassword = {
  password: string;
  newPassword: string;
};
export type PayloadUpdateInfo = {
  name?: string;
  phoneNumber?: string;
  dateOfBirth?: string;
  identificationNumber?: string;
  identificationIssuer?: string;
  address: string;
  provinceId?: number;
};

interface AuthState {
  isLoading: boolean;
  loginInfo: {
    isRemember: boolean;
    employeeCode: string;
    password: string;
  };
  deviceName: string;
  changePassword: {
    password: string;
    newPassword: string;
    message?: string;
  };
  loginMessage: string;
  user: userInfo;
  optCode: string;

  isSuccessUpdate: boolean;
}

const initialState: AuthState = {
  isLoading: false,
  loginInfo: {
    isRemember: false,
    employeeCode: '',
    password: '',
  },
  changePassword: {
    password: '',
    newPassword: '',
    message: '',
  },
  loginMessage: '',
  deviceName: '',
  user: { accessToken: null, refreshToken: null, permissionList: null },
  optCode: '',
  isSuccessUpdate: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // đăng nhập
    login: (state, action: PayloadAction<loginPayload>) => {
      state.isLoading = true;
    },
    setLoginMessage: (state, action) => {
      state.loginMessage = action.payload;
    },
    saveLoginInfo: (state, action) => {
      state.loginInfo = action.payload;
    },
    saveUserInfo: (state, action: PayloadAction<userInfo>) => {
      state.user = action.payload;
    },
    //
    updateUserInfo: (state, action) => {
      state.user = { ...state.user, ...action.payload };
    },
    setToken: (state, action) => {
      state.user.accessToken = action.payload.accessToken;
      state.user.refreshToken = action.payload.refreshToken;
    },
    // đăng ký
    register: (state, action: PayloadAction<registerPayload>) => {
      state.isLoading = true;
    },
    // send opt email
    getOTP: (state, action) => {
      state.optCode = action.payload;
    },
    //check otp
    checkOtp: (state, action) => {
      state.isLoading = true;
    },
    // change password
    changePassword: (state: AuthState, _: PayloadAction<Partial<PayloadChangePassword>>) => {
      return {
        ...state,
      };
    },

    //
    forceLogout: () => {},
    // đăng xuất
    logout: state => {
      state.user = { accessToken: null, refreshToken: null };
    },
    updateInfo: (state: AuthState, _: PayloadAction<Partial<PayloadUpdateInfo>>) => {
      return {
        ...state,
      };
    },
    setUpdateInfo: (state, action) => {
      state.isSuccessUpdate = action.payload;
    },
  },
});

export const {
  login,
  setLoginMessage,
  saveLoginInfo,
  saveUserInfo,
  setToken,

  logout,

  register,

  updateInfo,
  setUpdateInfo,

  getOTP,
  checkOtp,
  changePassword,
  forceLogout,
} = authSlice.actions;

const authPersistConfig = {
  key: 'auth',
  storage: AsyncStorage,
  whitelist: ['user', 'loginInfo', 'deviceName'],
};

export default persistReducer(authPersistConfig, authSlice.reducer);

export type loginPayload = { isRemember: boolean; emailOrPhone: string; password: string };
export type registerPayload = { name: string; email: string; password: string };
