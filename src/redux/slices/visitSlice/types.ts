export interface visitStateType {
  dataFeatureLocations: [];
  dataLocationNearMe: [];
  dataSearchLocation: [];
}

export type featureLocationsParams = {
  limit?: number;
  page?: number;
};

export type locationNearMeParams = {
  limit: number;
  page: number;
  latitude?: number;
  longitude?: number;
};
