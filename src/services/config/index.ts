import axios from 'axios';
import setInterceptor from '@/services/config/interceptor';
import { store } from '@/redux/store/store';
import { createRef } from 'react';

export const BASE_URL = 'https://bizpoint.dk-technical.vn/api/';
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json',
    'Cache-Control': 'no-cache',
    'Content-Type': 'application/json',
  },
});

setInterceptor(api);

export default api;
