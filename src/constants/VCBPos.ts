export const VCBPosErrorCode = {
  userCancel: { code: '0100', label: 'Giao dịch bị hủy từ terminal' },
  userCancel1: { code: '0101', label: 'Giao dịch bị hủy từ terminal' },
  haveDiffTrans: { code: '0200', label: 'Đang có một giao dịch khác' },
  amountInvalid: { code: '1302', label: 'Lỗi giá trị tiền' },
  readCardError: { code: '0911', label: 'Lỗi đọc thẻ' },
  unsupportedCard: { code: '9903', label: 'Thẻ không được hỗ trợ' },
  timeout: { code: '9999', label: 'Hết thời gian chờ' },
  inValidTransNo: { code: '1301', label: 'Sai số hóa đơn' },
};

export const VCBPosTXNType = {
  SALE: 1,
  REFUND: 2,
  VOID: 3,
  TRANSFER: 4,
  SETTLE: 5,
  ADJUST: 8,
};
