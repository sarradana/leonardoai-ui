import React from 'react';
import { render, screen } from '@/lib/test-utils';
import '@testing-library/jest-dom';
import EditUserInfo from './EditUserInfo';
import { useUserInfo } from './UserInfoContext';

jest.mock('./UserInfoContext');

beforeEach(() => {
  (useUserInfo as jest.Mock).mockReturnValue({
    userInfo: {
      userName: 'Bob',
      jobTitle: 'Developer',
    },
    setUserInfo: jest.fn(),
  });
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('EditUserInfo', () => {
  it('renders the Edit Modal when open', () => {
    render(<EditUserInfo isModalOpen={true}/>);
    expect(screen.getByLabelText('Username*')).toBeInTheDocument();
    expect(screen.getByText('Edit User Info')).toBeInTheDocument();
  });

  it('renders the Edit Modal when open', () => {
    render(<EditUserInfo isModalOpen={false}/>);
    expect(screen.queryByText('Edit User Info')).toBeInTheDocument();
    expect(screen.queryByLabelText('Username*')).not.toBeInTheDocument();
  });
});
