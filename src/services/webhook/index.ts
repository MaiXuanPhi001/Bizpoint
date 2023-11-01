import { store } from '@/redux/store/store';
import DeviceInfo from 'react-native-device-info';
import api from '../config';

export const webhookLog = (text: string) => {
  api.post('https://hooks.slack.com/services/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', { text });
};

export const webhookLogApi = (data: any) => {
  api.post('https://hooks.slack.com/services/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', { data });
};

export const webhookErrorBoundaryApi = (data: { message: string; stackTrace: string }) => {
  const user = {
    // employeeCode: store.getState().authReducer.loginInfo.employeeCode,
    deviceInfo: DeviceInfo.getModel(),
  };
  api.post('https://hooks.slack.com/services/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', {
    text: JSON.stringify({ user, ...data }),
  });
};
