import React from 'react';
import { render, screen } from '@/lib/test-utils';
import '@testing-library/jest-dom';
import ViewUserInfo from './ViewUserInfo';
import * as UserInfoContextModule from '@/components/UserInfo/UserInfoContext';

describe('ViewUserInfo', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  beforeEach(() => {

  })

  it('renders nothing if userInfo is not present', () => {
     const { container } = render(<ViewUserInfo />);
    expect(container).toBeEmptyDOMElement();
  });

  it('renders user info when userInfo is present', () => {
    jest
      .spyOn(UserInfoContextModule, 'useUserInfo')
      .mockReturnValue({
        userInfo: { userName: 'Alice', jobTitle: 'Engineer' },
        setUserInfo: jest.fn(),
      });
    render(<ViewUserInfo />);
    expect(screen.getByText(/User name:/)).toBeInTheDocument();
    expect(screen.getByText(/Alice/)).toBeInTheDocument();
    expect(screen.getByText(/User job title:/)).toBeInTheDocument();
    expect(screen.getByText(/Engineer/)).toBeInTheDocument();
  });
});
