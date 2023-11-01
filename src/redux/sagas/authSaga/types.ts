export type loginResponse = {
  tokenKey: string;
  tokenType: string;
  token: string;
  tokenExpireAt: number;
  refreshToken: string;
  refreshTokenExpireAt: number;
  refreshTokenExpiresIn: number;
};

export type registerResponse = {
  status?: any;
  message?: any;
  data?: {
    data?: {
      address?: string;
      bizPoint?: number;
      createdAt?: string;
      dateOfBirth?: null;
      email?: string;
      hasChildren?: number;
      id?: number;
      identificationIssuer?: null;
      identificationNumber?: null;
      isActive?: number;
      isBlocked?: number;
      lastUpdate?: string;
      level?: number;
      name?: string;
      parentId?: null;
      phoneNumber?: string;
      provinceId?: null;
      referralCode?: string;
      referrer?: null;
      visitCount?: number;
    };
  };
};
export type getOTPPayload = {
  email?: string;
};

export type checkOTPPayload = {
  email?: string;
  otp?: string;
};
