import React from 'react';
import { Button, ButtonGroup, Box } from '@chakra-ui/react';

interface PaginationProps {
  page: number;
  totalPages?: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ page, totalPages, onPageChange }) => (
  <Box mt={4} display="flex" justifyContent="center">
    <ButtonGroup variant="outline">
      <Button
        onClick={() => onPageChange(page - 1)}
        disabled={page <= 1}
      >
        Previous
      </Button>
      <Button disabled>{page}</Button>
      <Button
        onClick={() => onPageChange(page + 1)}
        disabled={!!totalPages && page >= totalPages}
      >
        Next
      </Button>
    </ButtonGroup>
  </Box>
);

export default Pagination;

