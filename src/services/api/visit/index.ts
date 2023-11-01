import api from '@/services/config';
import { VISIT } from '@/services/uris';
import { getFeatureLocationsParams, getLocationNearMeParams, searchLocationParams } from './types';

export const getFeatureLocationsApi = async (params: getFeatureLocationsParams) => {
  return await api.get(VISIT.FEATURELOCATIONS, { params });
};

export const getLocationNearMeApi = async (params: getLocationNearMeParams) => {
  return await api.get(VISIT.LOCATIONNEARME, { params });
};

export const searchLocationApi = async (params: searchLocationParams) => {
  return await api.get(VISIT.SEARCHLOCATION, { params });
};
