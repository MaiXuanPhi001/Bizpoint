import { AxiosResponse } from 'axios';

export interface BWApiResponseData<T = undefined> {
  data?: T;
  message: string | null;
  error: string | null;
  status: number;
  array?: T;
}

export interface BWListData<T = undefined> {
  items: T[];
  totalItems: number;
  page: string;
  totalPages: number;
  itemsPerPage: string;
}
export interface BWApiResponseListData<T = undefined> extends BWApiResponseData<BWListData<T>> {}

export type AxiosResponseBWData<T = undefined> = AxiosResponse<BWApiResponseData<T>>;
export type AxiosResponseListData<T = undefined> = AxiosResponse<BWApiResponseListData<T>>;
