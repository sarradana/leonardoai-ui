'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { UserInfo } from './types';

type UserInfoContextType = {
  userInfo: UserInfo | null;
  setUserInfo: (info: UserInfo | null) => void;
};

export const UserInfoContext = createContext<UserInfoContextType | undefined>(
  undefined
);

export const UserInfoProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [userInfo, setUserInfoState] = useState<UserInfo | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem('userInfo');
    setUserInfoState(stored ? JSON.parse(stored) : null);
  }, []);

  const setUserInfo = (info: UserInfo | null) => {
    setUserInfoState(info);
    if (info) {
      localStorage.setItem('userInfo', JSON.stringify(info));
    } else {
      localStorage.removeItem('userInfo');
    }
  };

  return (
    <UserInfoContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserInfoContext.Provider>
  );
};

export default UserInfoProvider;
export const useUserInfo = () => {
  const context = useContext(UserInfoContext);
  if (!context)
    throw new Error('useUserInfo must be used within UserInfoProvider');
  return context;
};
