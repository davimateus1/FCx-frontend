import { ReactNode, useEffect, useState, createContext } from 'react';

import cookies from 'js-cookie';
import { UserAuth } from '../api/types';
import { history } from '~/lib/history';

type SetResponse = {
  token: string;
  userAuth: UserAuth;
};

export type AuthContextData = {
  user: UserAuth | null;
  handleSetResponse: (response: SetResponse) => void;
  logout: () => void;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext<AuthContextData | null>(null);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const storedUser = cookies.get('user');
  const [user, setUser] = useState<UserAuth | null>(null);

  useEffect(() => {
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, [storedUser]);

  const handleSetResponse = ({ token, userAuth }: SetResponse) => {
    cookies.set('token', token);
    cookies.set('user', JSON.stringify(userAuth));
    setUser(userAuth);
    history.push('/');
  };

  const logout = () => {
    cookies.remove('token');
    cookies.remove('user');
    setUser(null);
    history.push('/login');
  };

  return (
    <AuthContext.Provider value={{ user, handleSetResponse, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
