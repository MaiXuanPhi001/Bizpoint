// import { productDetailParams } from '@/redux/RTK/Product/type';

const AUTH = {
  LOGIN: 'user/login',
  REFRESH_TOKEN: 'user/getRefreshToken',
  LOGOUT: 'auth/logout',
  CHANGE_PASSWORD: 'user/changePassword',
  GET_CURRENT_USER: 'user/profile',
  FUNCTION_BY_USER_GROUP: 'function/functions-by-user-group',
  REGISTER: 'user/register',
  SENDOTP: 'user/sendOTP',
  CHECKOTP: 'user/checkOTP',
  UPDATEINFO: 'user/updateInfo',
};

const PROFILE = {
  PROFILE_USER: 'user/getProfile',
  DETAIL_EMPLOYEE: 'user/',
  CHANGE_PASS: 'user/change-password',
  TOGGLE_NOTIFY: '/user/notify',
  LIST_EMPLOYEE: '/user',
  GET_HOBBIES: '/user/hobbies-options',
  EDIT_PROFILE: '/user',
};

const TRANSFER = {
  TRANSFERHISTORY: 'transfer/getTransferHistory',
  RECEIVETRANSFER_ID: 'transfer/getUsernameById',
  FEETRANSFER: 'transfer/getTransferFee',
  SENDPOINT: 'transfer/sendPoint',
  GETPENDINGHISTORY: 'transfer/getPendingTransfer',
  BYRECEIVE_CONFIRM: 'transfer/confirmTransferByReceiver',
  OTP_SENDER: 'user/sendVoiceOTP',
  BYSENDER_CONFIRM: 'transfer/confirmTransferBySender',
};

const VISIT = {
  FEATURELOCATIONS: 'location/public/getFeatureLocations',
  LOCATIONNEARME: 'location/public/getLocationNearMe',
  SEARCHLOCATION: 'location/public/getAllLocations',
};

// ////////////////////////////////
// ////////////////////////////////
// ////////////////////////////////
// ////////////////////////////////
// ////////////////////////////////
// ////////////////////////////////
// ////////////////////////////////
// ////////////////////////////////
const EMPLOYEE = {
  GET_LIST_EMPLOYEE: '/user',
};

const NOTIFY = {
  GET_NOTIFY: '/announce',
  GET_NOTIFY_HOME: '/homepage/announce',
  MARK_AS_READ: '/announce/view',
  GET_COMMENT: '/announce/comment',
  LIKE_DISLIKE_COMMENT: '/announce/comment/like-dislike',
  CREATE_COMMENT: '/announce/comment',
};

const NEWS = {
  NEWS: '/news',
  TOP_NEW: '/news/top',
  CMT_NEW: 'news-comment',
  LIKE_CMT: 'news-comment/like-dislike',
  CMT_REP: '/news-comment/reply',
};

const TIMEKEEPING = {
  TIME_KEEPING: '/timekeeping',
  SHIFT_INFORMATION: 'timekeeping/shift-info',
  CHECK_IN_OUT: 'timekeeping/checkinout/',
  MANAGER: 'timekeeping/management',
  TIME_KEEPING_STATISTICAL: '/timekeeping/statitics',
  MANAGER_CA: 'timekeeping/schedule',
  CHECK_IP: '/store/check-ip',
};

const DAY_OFF = {
  GET_TYPE_OPTION: 'off-work-type/get-options',
  GET_TOTAL_DAY: '/off-work/me/total-day-offwork',
  GET_LIST: 'off-work/',
  GET_REVIEW: 'off-work/review',
  POST_CREATE: 'off-work',
  USER_REFUSE: 'off-work/user-refuse',
  LIST_OFF_REVIEW: 'off-work/review',
  GET_DETAIL_REVIEW: 'off-work/',
  EXIT_REVIEW: 'off-work/check_exists_review/',
  GET_USER_REFUSE: 'off-work/user-refuse',
  GET_USER_REVIEW: (type_id: number) => `off-work-type/${type_id}/review-level-user`,
  GET_DETAIL_OFFWORK: `off-work`,
  GET_DETAIL_REVIEW_OFFWORK: (offWorkId: number) => `off-work/${offWorkId}`,
  APPROVED_REVIEW_OFFWORK: (offWorkId: number) => `off-work/${offWorkId}/approved-review-list`,
};

const SETTING = {
  BIOMETRIC: 'setting/biometric',
};

const MAIL = {
  MAIL_HOME: '/homepage/mailbox',
  MAIL: '/mail',
  MAIL_INCOMING: 'mail/incoming',
  MAIL_SEND: '/mail',
  MAIL_FLAGGED: '/mail/flagged',
  MAIL_DRAFT: '/mail/draft',
  MAIL_TRASH: '/mail/trash',
  MAIL_UNREAD: '/mail/not-read',
  MAIL_INCOMING_TODAY: 'mail/incoming-in-day',
  MAIL_DEPARTMENT: 'department/get-options',
  MAIL_FRIEND: 'user/get-options',
  SAVE_DRAFT: 'mail/save-draft',
  MAIL_STATUS: 'mail/status-incoming-mail',
  MAIL_UNDO_TRASH: 'mail/trash',
  USER_MAIL: 'mail/',
  GET_USER: 'user/get-options',
  GET_DEPARTMENT: 'department/get-options',
};
const COMMON = {
  GET_PROVINCE_LIST: 'province/get-options',
  GET_DISTRICT_LIST: 'district/get-options',
  GET_WARD_LIST: 'ward/get-options',
  GET_STATISTICAL: '/homepage/statistical',
  CHECK_IP: '/store/check-ip',
};

const CUSTOMER = {
  GET_LIST_CUSTOMER: 'customer',
  GET_CUSTOMER_BY_ID: 'customer/detail',
  CREATE_OR_UPDATE_CUSTOMER: 'customer',
  CREATE_CUSTOMER_WALK_IN: '/customer-lead',
  GET_TASK_TYPE: '/task/task-type-auto/get-options',
  GET_USER_STORE: '/store/get-store-user',
  GET_LIST_STORE: '/store/get-options',
  GET_PURCHASE_HISTORY: '/account/purchase-history',
  GET_SOURCE_CUSTOMER: '/customer/source-options',
};

const PRODUCT = {
  // GET_PRODUCT_DETAIL: (params: productDetailParams) => `product/detail/${params.productId}/stock/${params.stockId}`,
  BORROW_PRODUCT: 'borrow',
  GET_LIST_PRODUCT: '/product',
  POST_CUSTOMER_LEAD: '/customer-lead',
  PRODUCT_INVENTORY_BY_CODE: 'product-inventory-lookup/get-by-code',
  //đổi trả
  RETURN_POLICY_PRODUCT: '/return-policy/product',
  RETURN_POLICY_ORDER: '/return-policy/order',
  //Chi tiet san pham
  GET_DETAIL_PRODUCT: '/product/model',
  GET_PRODUCT_ATTRIBUTES: '/product/attributes',
  //khuyen mai
  GET_PROMOTIONS: '/product/promotion',
  GET_PRE_ORDER_MODELS: '/product/pre-order/get-models',
};

const WORK = {
  GET_LIST_TYPE_WANRRANTY: 'work/get-wanrrantyType',
  CREATE_CUSTOMER: 'work/createCustomer',
  GET_USER: 'work/get-user-by-department',
  GET_CATEGORY_PRODUCT: 'work/get-category',
  GET_CUSTOMER: 'work/get-customer',
  GET_STATUS_PRODUCT: 'work/get-status-product',
  CREATE_STATUS_PRODUCT: 'work/createStatusProduct',
  GET_ACCESSORY: 'work/get-accessory',
  GET_DETAIL_WARRANTY: 'request-warranty-repair',
  GET_LSIT_USER: 'request-warranty-repair/list-user/get-option',
  GET_SOLUTION: 'request-warranty-repair/list-solution-error/get-option',
  GET_COMPONENT_ACCESSORY: 'request-warranty-repair/list-component/get-option',
  CREATE_ERROR_IDENTIFY: 'request-warranty-repair/error',
  GET_LIST_STOCK: 'request-warranty-repair/list-stocks-component/get-option',
  GET_HISTORY_STATUS: 'request-warranty-repair/history-status',
  GET_DETAIL_REPAIR_ERROR: 'request-warranty-repair/error',
  CREATE_POST_WARRANTY: 'work',
  GET_PRINT_WARRANTY: 'request-warranty-repair/export-pdf-receive',
  GET_LIST_OFFER: 'request-warranty-repair/support-type/option',
  CREATE_OFFER: 'request-warranty-repair/support',
  GET_LIST_WARRANTY: 'request-warranty-repair',
  GET_LIST_HOLDING: 'request-warranty-repair/list-stocks-component/get-option',
  GET_PROGRESS_STEP: 'request-warranty-repair/process-step/option',
  GET_PROGRESS_WARRANTY_STEP: 'request-warranty-repair/process-step-warranty/list-option',
  GET_LIST_ERROR: 'request-warranty-repair/list-error/get-option',
  GET_LIST_WORK_BY_USER: 'request-warranty-repair/error-member',
  GET_LIST_HISTORY_UPDATE: 'request-warranty-repair/history-status',
  GET_GEN_STOCK_CODE: 'request-warranty-repair/gen-stocks-out-request-code',
  GET_LIST_PRODUCT_MODEL: 'work/get-model-by-productCategoryid',
  GEN_CODE_WARRANTY: 'work/gen-code-warranty',
  GET_LIST_CENTER: 'request-warranty-repair/user/list-store/option',
  GET_LIST_STOCK_EXPORT: 'request-warranty-repair/list-stocks-component/get-option',
  GET_LIST_EXPORT_FORM: 'request-warranty-repair/stocks-out-type/options',
  CREATE_STOCK_OUT_REQUEST: 'request-warranty-repair/stocks-out-request',
  GET_LIST_ACCESSORIES: 'request-warranty-repair/list-component-stocks-out',
  GET_INFO_USER_STOCKOUT: 'request-warranty-repair/user',
  GET_COMPONENT_BY_STOCK: 'request-warranty-repair/stocks',
  GET_USER_BY_SOLUTION: 'request-warranty-repair/list-user-solution/get-option',
  GET_LIST_PRODUCT: 'work/get-product-category-model',
  GET_STORE_BY_USERNAME: 'work/get-store-by-username',
  GET_LIST_ACCESSORY_CREATE: 'request-warranty-repair/list-accessory/get-option',
  GET_LIST_PROGRESS_BY_TYPE: 'request-warranty-repair/process-step-warranty/option',
  GET_GROUP_STATUS: 'request-warranty-repair/pro-status-group/options',
  GET_LIST_COMPONENT: 'request-warranty-repair/stocks-in-request/list-component',
  GEN_REQUEST_CODE: 'request-warranty-repair/gen-stocks-in-request-code',
  GET_STOCK_IN_TYPE: 'request-warranty-repair/stocks-in-type/options',
  GET_WARRANTY_PERIOD: 'request-warranty-repair/warranty-period/get-options',
  CHANGE_WARRANTY_STATUS: 'request-warranty-repair/update-request-process-step',
  GET_WARRANTY_PRINTF: 'request-warranty-repair/export-pdf-receive',
  GET_HISTORY_WARRANTY_IMEI: 'request-warranty-repair/history-warranty-product',
  GET_HISTORY_WARRANTY_CUSTOMER: 'request-warranty-repair/history-warranty-customer',
  GET_DETAIL_HISTORY_WARRANTY: 'request-warranty-repair/history-warranty-detail',
  GET_STOCK_OUT_BY_SOLUTION: 'request-warranty-repair/stocks-out-type/options',
  GET_EXPORT_COMPONENT: 'request-warranty-repair/stocks-in-request/list-component',
  DELETE_WARRANTY: 'request-warranty-repair/cancel',
  RETURN_COMPONENTS: 'request-warranty-repair/stocks-in-request/return-component',
  EXPORTED_TO_SELL_COMPONENTS_TEST: 'request-warranty-repair/stocks-in-request/return-component-test',
};

const TRANSFER_SHIFT = {
  TRANSFER_SHIFT: 'transfer-shift',
  GET_LIST_TRANSFER_SHIFT: 'transfer-shift/',
  EDIT_TRANSFER_SHIFT: (id: number) => `/transfer-shift/${id}`,
  GET_TYPE_TRANSFER: 'transfer-shift/get-transfer-shift-type',
  GET_STORE: 'transfer-shift/get-store',
  GET_SHIFT: 'transfer-shift/get-shift',
  GET_BUSINESS: 'transfer-shift/get-business',
  GET_LEVEL_REVIEW: 'transfer-shift/list-review',
  GET_LIST_REVIEW_SHIFT: 'transfer-shift/list-review-by-user/',
  APPROVE_TRANSFER_SHIFT: 'transfer-shift/update-review',
  DETAIL_TRANSFER_SHIFT: 'transfer-shift',
  DETAIL_REVIEW_TRANSFER_SHIFT: 'transfer-shift/get-detail-review',
};

const SHIFT = {
  GET_LOCKSHIFT_CLOSE_INFO_AND_CASH: '/lockshift-close',
  GET_LOCKSHIFT_CLOSE_CURRENT: '/lockshift-close/current-shift',
  GET_LOCKSHIFT_CLOSE_CHECK_HAVE: '/lockshift-close/check-have-shift',
  GET_LOCKSHIFT_CLOSE_SEARCH_PRODUCT: '/lockshift-close/products',
  GET_LOCKSHIFT_CLOSE_SEARCH_EQUIPMENT: '/lockshift-close/equipments',
  GET_LOCKSHIFT_CLOSE: '/lockshift-close',
  GET_CASH: '/lock-shift-open/cash',
  GET_LOCKSHIFT_CLOSE_PRODUCT: '/lockshift-close/product',
  GET_LOCKSHIFT_CLOSE_CUSTOMER: '/lockshift-close/customer',
  GET_LOCKSHIFT_CLOSE_EQUIPMENT: '/lockshift-close/equipment',
  //
  GET_LOCKSHIFT_OPEN_CASH: '/lock-shift-open/cash',
  GET_LOCKSHIFT_OPEN_CHECK: '/lock-shift-open/check',
  GET_LOCKSHIFT_OPEN_INFO: '/lock-shift-open/info',
  GET_LOCKSHIFT_OPEN_PRODUCT: '/lock-shift-open/product',
  GET_LOCKSHIFT_OPEN_EQUIPMENT: '/lock-shift-open/equipment',
  GET_LOCKSHIFT_OPEN_ECUSTOMER: '/lock-shift-open/customer',
  POST_LOCKSHIFT_OPEN: '/lock-shift-open',

  GET_SHIFT: 'shift-user',
};

const GROUP_CHAT = {
  CREATE_GROUP: '/chatbox/conversation/create-group',
  GET_LIST_GROUP: '/chatbox/conversation',
  UPDATE_GROUP: '/chatbox/conversation',
  ADD_MEMBER: '/chatbox/conversation/add-group-participant',
};

const COMMISSIONS = {
  GET_LIST_COMMISSIONS: 'commission',
  DETAIL_COMMISSIONS: 'commission/user',
};

const ORDER = {
  GET_ORDER_STATUS: '/order/order-status/options',
  GET_ORDER_LIST: 'order',
  // GET_ORDER_BY_ID: '/order',
  GET_ORDER_DETAIL: '/order',
  PRINT_ORDER_BY_ID: '/order/export-pdf',
  GET_CUSTOMER_LIST: '/order/customer',
  GET_ORDER_TYPE: 'order/order-type/options',
};

const CREATE_ORDER = {
  GET_CURRENT_SHIFT: 'order/shift-info',
  GEN_ORDER_CODE: 'order/code',
  GET_ORDER_TYPE: 'order/order-type/options',
  GET_PRODUCT_BY_IMEI: 'order/product/imei',
  GET_LIST_PROMOTION: 'order/promotion',
  GET_COUPON_INFO: 'order/coupon',
  GET_EXCHANGE_POINT_INFO: 'order/exchange-point',
  GET_LIST_PAYMENT_METHOD: 'payment-form/get-by-store',
  CREATE_ORDER: 'order',
  UPDATE_ORDER: 'order',
  PAY_ORDER: 'order/payment',
  PAY_ORDER_POS: 'order/payment-pos',
  CANCEL_ORDER: 'order',
  SIGNATURE: 'order/signature',
  EXPORT_PDF: 'order/export-pdf',
  GET_ORDER_DETAIL: 'order',
  CHECK_RECEIVER_SLIP: 'order/check-receive-slip',
  //
};
const TASK = {
  GET_TASK_LIST: '/task-detail-meeting',
};
const WARRANTYS = {
  GET_PROGRESS_STEP: 'request-warranty-repair/process-step/option',
  GET_LIST_WARRANTY: 'request-warranty-repair',
};

export {
  AUTH,
  TRANSFER,
  PROFILE,
  NOTIFY,
  MAIL,
  NEWS,
  TIMEKEEPING,
  DAY_OFF,
  SETTING,
  COMMON,
  WORK,
  CUSTOMER,
  EMPLOYEE,
  TRANSFER_SHIFT,
  SHIFT,
  PRODUCT,
  GROUP_CHAT,
  COMMISSIONS,
  ORDER,
  CREATE_ORDER,
  TASK,
  WARRANTYS,
  VISIT,
};
