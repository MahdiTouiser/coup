export interface BaseResponse<T> {
  message: string;
  content: T;
  total: number;
}
export interface UserPersonalInfo {
  id: string;
  firstName: string;
  lastName: string;
  nationalCode: string;
  birthDate: string;
  email?: string;
  cityAndState: string | null;
  address?: string;
  weight: number | null;
  height: number | null;
  createdAt?: string;
  updatedAt?: string;
  emergencyContact?: string;
  emergencyPhone?: string;
}
export const UserStatuses = {
  AWAITING_COMPLETION: 'AwaitingCompletion',
  PENDING: 'Pending',
  ACTIVE: 'Active',
  INACTIVE: 'Inactive',
};

export const UserStatusesPersianMap = new Map([
  [UserStatuses.AWAITING_COMPLETION, 'در انتظار تکمیل'],
  [UserStatuses.PENDING, 'در انتظار تأیید'],
  [UserStatuses.ACTIVE, 'فعال '],
  [UserStatuses.INACTIVE, 'غیر فعال'],
]);
export interface UserGeneralInfo {
  code: number;
  userName: string;
  mobile: string;
  userStatus: string;
  userStatusDisplay: string;
  userType: string;
  id: string;
  createdAt: string;
  updatedAt: string;
  firstName: string;
  lastName: string;
}
