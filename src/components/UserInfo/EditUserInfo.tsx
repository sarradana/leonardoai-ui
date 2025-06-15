'use client';
import React, { useState } from 'react';
import { Button } from '@chakra-ui/react';
import UserInfoModal from './UserInfoModal';
import { UserInfo } from './types';
import { useUserInfo } from '@/components/UserInfo/UserInfoContext';

interface EditUserInfoProps {
  isModalOpen?: boolean;
}

const EditUserInfo: React.FC<EditUserInfoProps> = ({ isModalOpen }) => {
  const { userInfo, setUserInfo } = useUserInfo();

  const [modalOpen, setModalOpen] = useState(isModalOpen || false);

  const handleSave = (info: UserInfo) => {
    setUserInfo(info);
    setModalOpen(false);
  };

  return (
    <>
      <Button
        variant="ghost"
        color="white"
        _hover={{ bg: 'blue.600' }}
        colorScheme="blue"
        onClick={() => setModalOpen(true)}
      >
        Edit User Info
      </Button>
      <UserInfoModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSave={handleSave}
        initialInfo={userInfo || undefined}
      />
    </>
  );
};

export default EditUserInfo;
