import { createContext, useState, useContext, useEffect } from 'react';
import Cookies from 'js-cookie';

import { useRouter } from 'next/router';
import * as authServices from '../../modules/logouted/services/authServices';
import api from '../services/api';

export interface User {
  id: string;
  name: string;
  email: string;
  nickName: string;
  displayName?: string;
  verified?: boolean;
  scholarity: string;
  permission: string;
  areasInterest: {
    id: string;
    name: string;
  }[];
  avatarUrl: string;
}

export interface CreateUserData {
  name: string;
  email: string;
  nickname: string;
  password: string;
  passwordConfirmation: string;
  scolarity: string;
  gender: 'MALE' | 'FEMALE' | 'OTHER';
  dateBirth?: Date;
  areasInterest?: string[];
}

export interface AuthState {
  token: string;
  user: User;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  loading: boolean;
  signIn(credentials: SignInCredentials): Promise<void>;
  createUser(data: CreateUserData): Promise<void>;
  signOut(): void;
  updateUser(user: User): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    async function loadUserFromCookies() {
      const token = Cookies.get('token');
      if (token) {
        api.defaults.headers.authorization = `Bearer ${token}`;

        const userResponse = await authServices.getUser();

        if (userResponse) setUser(userResponse);
      }
      setLoading(false);
    }
    loadUserFromCookies();
  }, [router]);

  const setAuthState = (token: string, userResponse: User) => {
    Cookies.set('token', token, { expires: 1 });

    api.defaults.headers.authorization = `Bearer ${token}`;

    setUser(userResponse);
  };

  const createUser = async (data: CreateUserData) => {
    const { token, user: userResponse } = await authServices.createUser(data);

    setAuthState(token, userResponse);
  };

  const signIn = async ({ email, password }) => {
    const { token, user: userResponse } = await authServices.createSession({
      email,
      password,
    });

    setAuthState(token, userResponse);
  };

  const signOut = () => {
    Cookies.remove('token');
    delete api.defaults.headers.Authorization;
    window.location.href = '/';

    setUser({} as User);
  };

  const updateUser = (userData: User) => {
    setUser(userData);
  };

  return (
    <AuthContext.Provider
      value={{ user, loading, createUser, signIn, signOut, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
