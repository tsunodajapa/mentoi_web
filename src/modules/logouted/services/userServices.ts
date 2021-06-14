import api from '@/shared/services/api';
import { CreateUserData, User } from '../../../shared/hooks/auth';

export interface ChangePasswordData {
  oldPassword: string;
  password: string;
  passwordConfirmation: string;
}

export async function updateUser(
  userId: string,
  data: Partial<CreateUserData>,
): Promise<User> {
  return (await api.put<User>(`users/${userId}`, data)).data;
}

export async function changePassword(
  userId: string,
  data: ChangePasswordData,
): Promise<void> {
  await api.patch(`users/${userId}`, data);
}
