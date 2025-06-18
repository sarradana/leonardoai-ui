import React from 'react';
import { render, screen, fireEvent } from '@/lib/test-utils';
import '@testing-library/jest-dom';
import Pagination from './Pagination';

describe('Pagination', () => {
  it('renders current page and disables previous on first page', () => {
    render(<Pagination page={1} totalPages={5} onPageChange={jest.fn()} />);
    expect(screen.getByText('1')).toBeDisabled();
    expect(screen.getByText('Previous')).toBeDisabled();
    expect(screen.getByText('Next')).not.toBeDisabled();
  });

  it('disables next on last page', () => {
    render(<Pagination page={5} totalPages={5} onPageChange={jest.fn()} />);
    expect(screen.getByText('Next')).toBeDisabled();
    expect(screen.getByText('Previous')).not.toBeDisabled();
  });

  it('calls onPageChange with correct value when next/previous clicked', () => {
    const onPageChange = jest.fn();
    render(<Pagination page={2} totalPages={5} onPageChange={onPageChange} />);
    fireEvent.click(screen.getByText('Previous'));
    expect(onPageChange).toHaveBeenCalledWith(1);
    fireEvent.click(screen.getByText('Next'));
    expect(onPageChange).toHaveBeenCalledWith(3);
  });

  it('shows only current page if totalPages is not provided', () => {
    render(<Pagination page={3} onPageChange={jest.fn()} />);
    expect(screen.getByText('3')).toBeInTheDocument();
  });
});

