import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { transferStateType } from './types';
import { getHistoryParams, getPedingHistoryParams } from '@/services/api/transfer/types';

const initialState: transferStateType = {
  dataTransferHistory: [],
  dataPendingTransferHistory: [],
};

export const transferSlice = createSlice({
  name: 'transfer',
  initialState,
  reducers: {
    // get history transfer
    getTransferHistory: (state, action: PayloadAction<getHistoryParams>) => {},
    setTransferHistory: (state, action) => {
      state.dataTransferHistory = action.payload;
    },
    // get list data transfer pending history
    getPendingTransferHistory: () => {},
    setPendingTransferHistory: (state, action) => {
      state.dataPendingTransferHistory = action.payload;
    },
  },
});

export const { getTransferHistory, setTransferHistory, getPendingTransferHistory, setPendingTransferHistory } =
  transferSlice.actions;

export default transferSlice.reducer;
