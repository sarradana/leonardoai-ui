'use client';
import React, { useState } from 'react';
import {
  Heading,
  Text,
  Container,
  Table,
  Spinner,
  Image,
  Link,
  Box,
} from '@chakra-ui/react';
import InformationModal from '../InformationModal/InformationModal';
import Pagination from '../Pagination/Pagination';
import { useRouter } from 'next/navigation';
import { Character } from '@/app/information/types';


type Props = {
  page: number;
  loading: boolean;
  data: {
    characters: {
      results: Character[];
      info: {
        pages: number;
      };
    };
  };
  error: string;
};

export default function InformationClient({
  page,
  data,
  error,
  loading,
}: Props) {
  const router = useRouter();
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(page);
  const handleOpenModal = (char: Character) => {
    setSelectedCharacter(char);
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCharacter(null);
  };
  const handlePageChange = (newPage: number) => {
    router.push(`?page=${newPage}`);
    setCurrentPage(newPage);
  };

  if (error) return <Text color="red.500">Error: {error}</Text>;

  return (
    <>
      <Container maxW="container.md" py={8}>
        <Box mt={4} display="flex" justifyContent="center">
          <Pagination
            page={currentPage}
            totalPages={data?.characters?.info?.pages}
            onPageChange={handlePageChange}
          />
        </Box>
        <Heading mb={4}>Rick and Morty Characters</Heading>
        <Table.Root colorScheme="teal">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader>ID</Table.ColumnHeader>
              <Table.ColumnHeader>Name</Table.ColumnHeader>
              <Table.ColumnHeader>Status</Table.ColumnHeader>
              <Table.ColumnHeader>Image</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {loading ? (
              <Table.Row>
                <Table.Cell colSpan={4} textAlign="center">
                  <Spinner size="xl" color="teal.500" />
                  <Text mt={4}>Loading characters...</Text>
                </Table.Cell>
              </Table.Row>
            ) : (
              data?.characters?.results?.map((char: Character, idx: number) => (
                <Table.Row key={char.id}>
                  <Table.Cell>
                    <Link
                      color="teal.500"
                      onClick={() => handleOpenModal(char)}
                    >
                      {(currentPage - 1) * data.characters.results.length +
                        idx +
                        1}
                    </Link>
                  </Table.Cell>
                  <Table.Cell>{char.name}</Table.Cell>
                  <Table.Cell>{char.status || '-'}</Table.Cell>
                  <Table.Cell>
                    {char.image ? (
                      <Image
                        src={char.image}
                        alt={char.name}
                        boxSize="48px"
                        borderRadius="8px"
                        objectFit="cover"
                      />
                    ) : (
                      '-'
                    )}
                  </Table.Cell>
                </Table.Row>
              ))
            )}
          </Table.Body>
        </Table.Root>
        <InformationModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          character={selectedCharacter}
        />
      </Container>
    </>
  );
}
