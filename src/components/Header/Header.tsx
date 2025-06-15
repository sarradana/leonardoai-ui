import React from 'react';
import Link from 'next/link';
import ViewUserInfo from '@/components/UserInfo/ViewUserInfo';
import EditUserInfo from '@/components/UserInfo/EditUserInfo';
import { Box, Flex, HStack, Spacer } from '@chakra-ui/react';

const Header: React.FC = () => {
  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      px={6}
      py={4}
      bg="blue.500"
      color="white"
      boxShadow="sm"
      position="fixed"
      top={0}
      left={0}
      width="100%"
      height="50px"
      zIndex={1000}
    >
      <Box fontWeight="bold" fontSize="xl">
        Leonardo Ai App
      </Box>
      <nav aria-label="Main navigation">
        <HStack as="ul" p={4} mx={6} style={{ listStyle: 'none' }}>
          <li>
            <Link
              href="/"
              type="button"
              color="white"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/information"
              type="button"
              color="white"
            >
              Information
            </Link>
          </li>
        </HStack>
      </nav>
      <Spacer />
      <ViewUserInfo />
      <EditUserInfo />
    </Flex>
  );
};

export default Header;
