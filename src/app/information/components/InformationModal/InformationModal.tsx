import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from '@chakra-ui/modal';
import { Button, Image, Text } from '@chakra-ui/react';
import { Character } from '@/app/information/types';

interface InformationModalProps {
  isOpen: boolean;
  onClose: () => void;
  character: Character | null;
}

const InformationModal: React.FC<InformationModalProps> = ({
  isOpen,
  onClose,
  character,
}) => {
  if (!character) return null;
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay background="teal" />
      <ModalContent top={"100"} >
        <ModalHeader>Character Info</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>
            <b>ID:</b> {character.id}
          </Text>
          <Text>
            <b>Name:</b> {character.name}
          </Text>
          <Text>
            <b>Status:</b> {character.status}
          </Text>
          {character.image && (
            <Image
              src={character.image}
              alt={character.name}
              boxSize="100px"
              borderRadius="8px"
              objectFit="cover"
              mt={4}
            />
          )}
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default InformationModal;
