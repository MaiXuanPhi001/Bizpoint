import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LoadingState {
  isLoading: boolean;
  isLoginLoading: boolean;
}

const initialState: LoadingState = {
  isLoading: false,
  isLoginLoading: false,
};

const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    showLoading: (state: LoadingState) => {
      state.isLoading = true;
    },
    hideLoading: (state: LoadingState) => {
      state.isLoading = false;
    },
    setLoginLoading: (state: LoadingState, action: PayloadAction<boolean>) => {
      state.isLoginLoading = action.payload;
    },
  },
});

export const { hideLoading, showLoading, setLoginLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
