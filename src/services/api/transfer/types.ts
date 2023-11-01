export type getHistoryParams = {
  limit: number;
  page: number;
};
export type PayloadSendPoint = {
  receiverId: string;
  receiverName: string;
  point?: any;
  fee?: any;
  content: string;
};

export type getPedingHistoryParams = {};

export type PayloadByReceiver = {
  transferId: string;
};
export type PayloadByOtpSender = {
  // transferId: string;
};

export type PayloadBySender = {
  transferId: string;
  otp?: any;
};
