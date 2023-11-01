export type getFeatureLocationsParams = {
  limit: number;
  page: number;
};

export type getLocationNearMeParams = {
  limit: number;
  page: number;
  latitude?: number;
  longitude?: number;
};

export type searchLocationParams = {
  limit: number;
  page: number;
  keyword: string;
};
