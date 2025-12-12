export interface User {
  userId: number;
  userName: string;
  userEmail: string;
  name: string;
  surname: string;
  country: string;
  mobileNumber: string;
  dob: string | null;
  roleId: number;
  roleName: string;
  failedLoginAttempts: number;
  blockedUntil: string | null;
  lastLogin: string;
  otpExpiry: string | null;
  is2FAEnabled: boolean;
  token: string;
}