import api from '@/shared/services/api';
import { CreateUserData, User } from '../../../shared/hooks/auth';

export interface ForgotPasswordData {
  email: string;
}

export interface ResetPasswordData {
  password: string;
  passwordConfirmation: string;
  token: string;
}

export async function updateUser(
  userId: string,
  data: Partial<CreateUserData>,
): Promise<User> {
  return (await api.put<User>(`users/${userId}`, data)).data;
}
