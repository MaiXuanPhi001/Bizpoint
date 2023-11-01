export type paramsUserInfoPayload = {};

export interface menuStateType {
  userInfo?: {
    address?: string;
    bizPoint: number;
    createdAt?: string;
    dateOfBirth?: null;
    email?: string;
    hasChildren?: number;
    id?: number;
    identificationIssuer?: null;
    identificationNumber?: null;
    isActive?: number;
    isBlocked?: number;
    isKYC?: number;
    lastUpdate?: string;
    level?: number;
    name?: string;
    parentId?: number;
    phoneNumber?: string;
    provinceId?: null;
    referralCode?: string;
    referrer?: string;
    visitCount?: number;
  };
}
