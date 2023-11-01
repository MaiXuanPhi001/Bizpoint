import api from '@/services/config';

import { TRANSFER } from '@/services/uris';
import { PayloadByOtpSender, PayloadByReceiver, PayloadBySender, PayloadSendPoint, getHistoryParams } from './types';

// export const getOrderTypeApi = async () => {
//     return await api.get(CREATE_ORDER.GET_ORDER_TYPE);
//   };

export const getTransferApi = async (params: getHistoryParams) => {
  return await api.get(TRANSFER.TRANSFERHISTORY, { params });
};

// lấy tên người nhận khi nhập số tk
export const getReceiveIdApi = async (id?: any) => {
  return await api.get(TRANSFER.RECEIVETRANSFER_ID, { params: { id } });
};
// lấy phí khi nhập số point
export const getTransfeFeeApi = async () => {
  return await api.get(TRANSFER.FEETRANSFER);
};

//send point
export const sendPointApi = async (payload: PayloadSendPoint) => {
  return await api.post(TRANSFER.SENDPOINT, payload);
};

/// lấy lịch sử chờ xác nhận giao dịch
export const getPendingTransfeHistoryApi = async () => {
  return await api.get(TRANSFER.GETPENDINGHISTORY);
};

// xác nhận giao dịch phía B
export const confirmTransferByReceiverApi = async (payload: PayloadByReceiver) => {
  return await api.post(TRANSFER.BYRECEIVE_CONFIRM, payload);
};
// call api otp xác nhan giao dich
export const otpConfirmApi = async () => {
  return await api.post(TRANSFER.OTP_SENDER);
};

// xác nhận giao dich phía A
export const confirmTransferBySenderApi = async (payload: PayloadBySender) => {
  return await api.post(TRANSFER.BYSENDER_CONFIRM, payload);
};
