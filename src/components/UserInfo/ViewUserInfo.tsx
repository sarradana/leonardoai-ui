'use client';
import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { useUserInfo } from './UserInfoContext';

const ViewUserInfo: React.FC = () => {
  const { userInfo } = useUserInfo();

  if (!userInfo) return null;

  return (
    <>
      {userInfo && (
        <>
          <Box textAlign="right">
            <Text>
              <Text as="span" fontWeight="bold">User name:</Text> {userInfo.userName}{' '}
              <Text as="span" fontWeight="bold">User job title:</Text> {userInfo.jobTitle}
            </Text>
          </Box>
        </>
      )}
    </>
  );
};

export default ViewUserInfo;
