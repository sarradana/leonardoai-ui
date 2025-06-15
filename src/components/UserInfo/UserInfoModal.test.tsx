import React from 'react';
import { render, screen, fireEvent } from '@/lib/test-utils';
import '@testing-library/jest-dom';
import UserInfoModal from './UserInfoModal';

describe('UserInfoModal', () => {
  const defaultProps = {
    open: true,
    onClose: jest.fn(),
    onSave: jest.fn(() => console.log('Saved')),
  };

  it('renders modal with form fields', () => {
    render(<UserInfoModal {...defaultProps} />);
    expect(screen.getByText('Enter your information')).toBeInTheDocument();
    expect(screen.getByLabelText('Username*')).toBeInTheDocument();
    expect(screen.getByLabelText('Job Title')).toBeInTheDocument();
  });

  it('calls onSave when submit button is clicked', () => {
    const mockUserInfo = { username: 'Bob', jobTitle: 'Manager' };
    jest.spyOn(window.localStorage.__proto__, 'getItem').mockImplementation((key) => {
      if (key === 'userInfo') return JSON.stringify(mockUserInfo);
      return null;
    });
    render(<UserInfoModal {...defaultProps} />);
    const closeButton = screen.getByRole('button', { name: /submit/i });
    fireEvent.click(closeButton);
    expect(defaultProps.onSave).toHaveBeenCalled();
  });

  it('shows validation errors if username is empty', () => {
    render(<UserInfoModal {...defaultProps} />);
    fireEvent.change(screen.getByLabelText('Username*'), { target: { value: '' } });
    fireEvent.submit(screen.getByRole('form'));
    expect(screen.getByText('Username is required')).toBeInTheDocument();
  });

});
