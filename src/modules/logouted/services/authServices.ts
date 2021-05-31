import api from '@/shared/services/api';
import { CreateUserData, User, AuthState } from '../../../shared/hooks/auth';

export interface ForgotPasswordData {
  email: string;
}

export interface ResetPasswordData {
  password: string;
  passwordConfirmation: string;
  token: string;
}

export async function createUser(data: CreateUserData): Promise<AuthState> {
  return (await api.post('users', data)).data;
}

export async function getUser(): Promise<User> {
  return (await api.get<User>('users/me')).data;
}

export async function createSession({ email, password }): Promise<AuthState> {
  return (await api.post<AuthState>('sessions', { email, password })).data;
}

export async function forgotPassword(data: ForgotPasswordData): Promise<void> {
  await api.post('auth/forgot-password', data);
}

export async function resetPassword(data: ResetPasswordData): Promise<void> {
  await api.post('auth/reset-password', data);
}
