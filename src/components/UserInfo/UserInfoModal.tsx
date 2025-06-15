import React, { useState, useEffect } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
} from '@chakra-ui/modal';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
} from '@chakra-ui/form-control';
import { Button, Input } from '@chakra-ui/react';
import { UserInfo } from './types';

interface Props {
  open: boolean;
  onClose: () => void;
  onSave: (info: UserInfo) => void;
  initialInfo?: UserInfo;
}

const UserInfoModal: React.FC<Props> = ({ open, onClose, onSave, initialInfo }) => {
  const [userName, setUserName] = useState(initialInfo?.userName || '');
  const [jobTitle, setJobTitle] = useState(initialInfo?.jobTitle || '');
  const [usernameError, setUsernameError] = useState('');
  const [jobTitleError, setJobTitleError] = useState('');

  useEffect(() => {
    // read initial values from localStorage if available
    const storedInfo = localStorage.getItem('userInfo');
    const parsedInfo: UserInfo | null = storedInfo
      ? JSON.parse(storedInfo)
      : null;
    setUserName(parsedInfo?.userName || '');
    setJobTitle(parsedInfo?.jobTitle || '');

    setUsernameError('');
    setJobTitleError('');
  }, [open]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let valid = true;
    if (!userName.trim()) {
      setUsernameError('Username is required');
      valid = false;
    } else {
      setUsernameError('');
    }
    if (!jobTitle.trim()) {
      setJobTitleError('Job Title is required');
      valid = false;
    } else {
      setJobTitleError('');
    }
    if (valid) {
      onSave({ userName: userName, jobTitle });
      onClose();
    }
  };

  const handleClose = () => {
    // Reset the form fields when closing the modal
    setUserName('');
    setJobTitle('');
    setUsernameError('');
    setJobTitleError('');
    onClose();
  };
  return (
    <Modal
      autoFocus={true}
      size="md"
      isOpen={open}
      onClose={handleClose}
      closeOnOverlayClick={false}
      closeOnEsc={false}
    >
      <ModalOverlay background={"whitesmoke"}/>
      <ModalContent w="50vw" mx="auto" my="auto" top="20vh">
        <ModalHeader
          bg="blue.50"
          color="blue.800"
          fontWeight="bold"
          fontSize="xl"
          borderTopRadius="md"
          py={4}
          px={6}
          borderBottom="1px solid"
          borderColor="blue.100"
        >
          Enter your information
        </ModalHeader>
        <ModalCloseButton display={userName ? undefined : 'none'} />
        <form onSubmit={handleSubmit} role="form" aria-labelledby="userinfo-modal-title">
          <ModalBody p={6} m={6}>
            <FormControl isInvalid={!!usernameError} mb={4}>
              <FormLabel htmlFor="username">Username*</FormLabel>
              <Input
                id="username"
                aria-required="true"
                aria-describedby={usernameError ? 'username-error' : undefined}
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                autoFocus
              />
              {usernameError && (
                <FormErrorMessage id="username-error">{usernameError}</FormErrorMessage>
              )}
            </FormControl>
            <FormControl isInvalid={!!jobTitleError} mb={4}>
              <FormLabel htmlFor="jobTitle">Job Title</FormLabel>
              <Input
                id="jobTitle"
                aria-required="true"
                aria-describedby={jobTitleError ? 'jobTitle-error' : undefined}
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
              />
              {jobTitleError && (
                <FormErrorMessage id="jobTitle-error">{jobTitleError}</FormErrorMessage>
              )}
            </FormControl>
          </ModalBody>
          <ModalFooter>
            {userName && (
              <Button
                colorScheme="blue"
                onClick={onClose}
                mr={3}
                variant="outline"
              >
                Cancel
              </Button>
            )}
            <Button colorScheme="blue" type="submit">
              Submit
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default UserInfoModal;
