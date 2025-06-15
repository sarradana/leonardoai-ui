'use client';
import React from 'react';
import { useUserInfo } from '@/components/UserInfo/UserInfoContext';
import EditUserInfo from '@/components/UserInfo/EditUserInfo';

export const UserInfoBlock: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { userInfo } = useUserInfo();
  console.log(userInfo);
  return (
    <>
      {userInfo ? children : <EditUserInfo isModalOpen={true}/>}
    </>
  );
};
