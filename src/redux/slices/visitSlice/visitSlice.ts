import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { featureLocationsParams, locationNearMeParams, visitStateType } from './types';
import { searchLocationParams } from '@/services/api/visit/types';

const initialState: visitStateType = {
  dataFeatureLocations: [],
  dataLocationNearMe: [],
  dataSearchLocation: [],
};

export const visitSlice = createSlice({
  name: 'visit',
  initialState,
  reducers: {
    // get  những vr shop nổi bật
    getFeatureLocations: (state, action: PayloadAction<featureLocationsParams>) => {},
    setFeatureLocations: (state, action) => {
      state.dataFeatureLocations = action.payload;
    },
    // get địa điểm xung quanh

    getLocationNearMe: (state, action: PayloadAction<locationNearMeParams>) => {},
    setLocationNearMe: (state, action) => {
      state.dataLocationNearMe = action.payload;
    },
    //tìm kiếm VR Shop
    getSearchLocation: (state, action: PayloadAction<searchLocationParams>) => {},
    setSearchLocation: (state, action) => {
      state.dataSearchLocation = action.payload;
    },
  },
});

export const {
  getFeatureLocations,
  setFeatureLocations,
  getLocationNearMe,
  setLocationNearMe,
  getSearchLocation,
  setSearchLocation,
} = visitSlice.actions;

export default visitSlice.reducer;
