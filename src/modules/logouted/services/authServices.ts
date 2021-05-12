import api from '@/shared/services/api';
import { CreateUserData, User, AuthState } from '../../../shared/hooks/auth';

export async function createUser(data: CreateUserData): Promise<AuthState> {
  return (await api.post('users', data)).data;
}

export async function getUser(): Promise<User> {
  return (await api.get<User>('users/me')).data;
}

export async function createSession({ email, password }): Promise<AuthState> {
  return (await api.post<AuthState>('sessions', { email, password })).data;
}
