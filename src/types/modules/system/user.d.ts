export interface User {
  userId?: number;
  userName?: string;
  password?: string;
  token?: string;
  userInfo?: UserInfo;
}

export interface UserInfo {
  nickName?: string;
  avatar?: string;
}
