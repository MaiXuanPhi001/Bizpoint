import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { menuStateType, paramsUserInfoPayload } from './types';

const initialState: menuStateType = {
  userInfo: {
    address: '',
    bizPoint: 0,
    createdAt: '',
    dateOfBirth: null,
    email: '',
    hasChildren: 0,
    id: 0,
    identificationIssuer: null,
    isActive: 0,
    isBlocked: 0,
    isKYC: 0,
    lastUpdate: '',
    level: 0,
    name: '',
    parentId: 0,
    phoneNumber: '',
    provinceId: null,
    referralCode: '',
    referrer: '',
    visitCount: 0,
  },
};

export const menuSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    //
    getUserinfoMenu: () => {},
    setUserInfoMenu: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});

export const { getUserinfoMenu, setUserInfoMenu } = menuSlice.actions;

export default menuSlice.reducer;
