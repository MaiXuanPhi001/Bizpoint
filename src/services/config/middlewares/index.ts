import { showToastBottom } from '@/functions';
import tokenService from '@/services/tokenService';

type data = {
  data: any;
  error: any;
  status: number;
  message: string;
};

const statusResponse = {
  LOGIN_ANOTHER_DEVICE: 10010,
};

export const checkResponseStatus = (data: data) => {
  switch (data?.status) {
    case statusResponse.LOGIN_ANOTHER_DEVICE: {
      showToastBottom('Tài khoản đã đăng nhập trên thiết bị khác');
      tokenService.logout();
    }
  }
};
