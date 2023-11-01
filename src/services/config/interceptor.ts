import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { refreshTokenApi } from '../api/auth';
import tokenService from '../tokenService';
import { checkResponseStatus } from './middlewares';

export default async (api: AxiosInstance) => {
  // const value = await AsyncStorage.getItem('CURRENT-EVN');
  // if (!value || value === 'PRODUCTION') {
  //   api.defaults.baseURL = 'https://bizpoint.dk-technical.vn/api/';
  // }
  // khi user request 1 yêu cầu api ---> gắn access token vào header cho api đó
  api.interceptors.request.use(function (config) {
    const accessToken = tokenService.getLocalAccessToken();
    config.headers.Authorization = 'Bearer ' + accessToken;
    return config;
  });

  let isRefreshing = false;
  let failedQueue: any[] = [];
  const processQueue = (error: any, token = null) => {
    console.log('run queue');
    failedQueue?.forEach(prom => {
      if (error) {
        prom.reject(error);
      } else {
        prom.resolve(token);
      }
    });

    failedQueue = [];
  };

  api.interceptors.response.use(
    (response: AxiosResponse) => {
      checkResponseStatus(response.data);
      return response;
    },
    async (error: any) => {
      // đây là khi access token hết hạn... api sẽ trả về status 401
      let originalRequest = error.config;
      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        // đây là check multi request ---> nếu có bất cứ api nào đang refresh token thì các request còn lại sẽ bỏ qua bước này
        if (!isRefreshing) {
          originalRequest._retry = true;
          isRefreshing = true;

          const refreshToken = tokenService.getLocalRefreshToken();
          // bước này check xem có tồn tại refresh token hay không
          // có 2 trường hợp xảy ra để refresh token = null
          // user đăng xuất account
          // user ko lựa chọn lưu mật khẩu
          if (refreshToken) {
            // nếu có refresh tokenn thì gọi api refresh token
            const response = await refreshTokenApi({ refreshToken });
            // nếu get refresh token  thành công
            if (response && response.status === 200) {
              const { data } = response.data;
              // cập nhật refresh token
              tokenService.updateToken(data);
              isRefreshing = false;
              axios.defaults.headers.common['Authorization'] = 'Bearer ' + data;

              // run queue request
              processQueue(null, data);

              // run again request trigger refreshToken
              originalRequest.headers['Authorization'] = 'Bearer ' + data;
              console.log('run request trigger refreshToken');
              return await api(originalRequest);

              // nếu get refresh token thất bại
            } else {
              isRefreshing = false;
              //logout ra khỏi thiết bị
              tokenService.logout();
              return Promise.resolve(error);
            }
          } else {
            // nếu không có refresh token
            isRefreshing = false;
            tokenService.logout();
            return Promise.resolve(error);
          }
        }

        // request QUEUE
        return new Promise(function (resolve, reject) {
          failedQueue.push({ resolve, reject });
        })
          .then(token => {
            originalRequest.headers['Authorization'] = 'Bearer ' + token;
            return axios(originalRequest);
          })
          .catch(err => {
            return Promise.reject(err);
          });
      } else {
        // đây là khi get api thành công
        return Promise.resolve(error.response);
      }
    },
  );
};
