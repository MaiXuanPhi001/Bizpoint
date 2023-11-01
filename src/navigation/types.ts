// import { Employee, hobbies } from '@/redux/slices/employeeSlice/types';
// import { productInventory } from '@/redux/slices/productSlice/type';

export type mainStackParamList = {
  AppTabScreen: any | undefined;
  HomeScreen: undefined;
  VisitScreen: undefined;
  WalletScreen: undefined;
  MenuScreen: undefined;
  ConfirmTransferScreen: {
    data: {
      totalPoint: string;
      nameReceive?: string;
      valueReceive?: string;
      content?: string;
      feePoint?: any;
    };
  };
  //
  VerifyDoneScreen: undefined;
  IdentityVerification: undefined;
  CheckIdentity: undefined;
  CheckFace: undefined;
  TakeFace: undefined;
  RegisterDoneScreen: undefined;
  StartStepScreen: undefined;
  UpdateInfoScreen: undefined;
  //
  AddNewCustomerScreen: { inputValue: string | undefined } | undefined;
  CreateOrderScreen: undefined;
  CreateOrderDoneScreen: { orderId: string; orderNo: string; point: number } | undefined;
  CreatePreOrderDoneScreen: { orderId: string; orderNo: string; point: number } | undefined;

  OrderDetailScreen: { orderId?: string };
  productListScreen: undefined;

  CustomersScreen: undefined;
  AddNewCustomerDoneScreen: {
    customerId: string;
    customerName?: string;
    avatarUrl?: string;
    type?: string;
    phoneNumber?: string;
  };
  CustomerDetailScreen: {
    customerId: string;
    customerName?: string;
    avatarUrl?: string;
    type: string;
    phoneNumber?: string;
  };
  WarrantyScreen: undefined;
  CreateWarrantyScreen: undefined;
  ProductScreen: undefined;
  RequestProductScreen: { productId: string; productName: string; productDesc: string; stockId: string };
  ProductDetailScreen: { model_id: number; stockId?: string };
  ProductDetailPreOrderScreen: {};
  ProductPreOrderScreen: { modelId?: number };
  CreateWarrantyDoneScreen: undefined;
  WarrantyDetailScreen: undefined;
  AddNewCustomerPotentialScreen: undefined;
  CloseShiftScreen: undefined;
  ConfirmCloseShiftScreen: undefined;
  DoubleCheckCloseShiftScreen: undefined;
  ReceiveShiftScreen: undefined;
  ConfirmReceiveShiftScreen: undefined;
  InternalNotificationsScreen: undefined;
  NotificationDetailScreen: { id: number };
  InternalNewsDetailScreen: { id: string };
  ListCommissionScreen: undefined;
  DetailCommissionScreen: { oderCommissionId: number };

  ChatOnlineScreen: undefined;
  ChatDetailScreen: undefined;
  EditGroupChatScreen: undefined;
  SettingChatScreen: undefined;
  CreateGroupChatScreen: undefined;
  SearchScreen: undefined;
  ProductInventoryDetailScreen: { dataProduct: {} };
  CreateMailScreen:
    | {
        mailType?: 're' | 'reAll' | 'fwd' | 'draft';
        mailId?: string;
        mailListUser?: { full_name: string; user_name: string; default_picture_url?: string }[];
        mailListCCUser?: { full_name: string; user_name: string }[];
        mailListDepartment?: { name: string; id: number }[];
        mailSubject?: string;
        mailContent?: string;
        mailAttachments?: { uri: string; type?: string; name: string; size?: number }[];
      }
    | undefined;

  LeaveScreen: undefined;
  DetailRegisterLeaveScreen: { off_work_id: number; off_work_review_list_id: number; isApproved: boolean };
  RequestRegisterScreen: undefined;
  RegisterLeaveSuccessScreen: { isCreate: boolean };
  RegisterLeaveScreen: undefined;
  ReviewOffWorkDetailScreen: { offWorkId: number; offWorkReviewListId: number };
  OffWorkDetailScreen: undefined;
  DevelopScreen: undefined;
  ProductEARScreen: { data: object };
  WarrantyLookupScreen: undefined;
  ResultProductScreen: { status: string };
  ResultCustomerScreen: undefined;
  DetailResultWarrantyScreen: undefined;
  InternalMailDetailScreenProps: { mail_id: number; type: string };
  InternalMailDetailScreen: { mail_id: string; type: string };
  ListUserViewNotifScreen: undefined;
  ListUserViewNewScreen: undefined;
  CommentNotificationScreen: { id: number };
  CommentNewsScreen: { id: string };
  ConfirmTransferShiftScreen: undefined;
  ConfirmTransferShiftDetailScreen: {
    transferShiftReviewListId: number;
    transferShiftId: number;
  };
  TransferShiftDetailScreen: {
    shiftId?: number;
  };
  ShiftScreen: undefined;
  TransferShiftScreen: undefined;
  RequestTransferScreen: undefined;
  RequestTransferSuccessScreen: { isCreate: boolean };
  TaskScreen: undefined;
  TaskDetailScreen: { data_leads_meeting_id: number };
  ListEmployeeScreen: undefined;
  EditDescription: { aboutMe: string };
  EmployeeDetailScreen: { employeeId: string | null } | undefined;
  // AddFavoriteScreen: { hobbies: hobbies[] };
  ChangePasswordScreen: undefined;
  // SeenQrCodeScreen: { employeeDetail: Employee };
  InternalMailBoxScreen: undefined;
  InternalNewsScreen: undefined;
  //
  FeedBack: undefined;
};
