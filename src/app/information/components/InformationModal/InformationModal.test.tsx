import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import InformationModal from './InformationModal';

const character = {
  id: 1,
  name: 'Rick Sanchez',
  status: 'Alive',
  image: 'https://example.com/image.jpg',
};

describe('InformationModal', () => {
  it('renders character information when open', () => {
    render(
      <InformationModal isOpen={true} onClose={jest.fn()} character={character} />
    );
    expect(screen.getByText('Character Info')).toBeInTheDocument();
    expect(screen.getByText(/ID:/)).toHaveTextContent('ID: 1');
    expect(screen.getByText(/Name:/)).toHaveTextContent('Name: Rick Sanchez');
    expect(screen.getByText(/Status:/)).toHaveTextContent('Status: Alive');
  });

  it('does not render when closed', () => {
    render(
      <InformationModal isOpen={false} onClose={jest.fn()} character={character} />
    );
    expect(screen.queryByText('Character Info')).not.toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', () => {
    const onClose = jest.fn();
    render(
      <InformationModal isOpen={true} onClose={onClose} character={character} />
    );
    const closeButton = screen.getByRole('button', { name: /close/i });
    fireEvent.click(closeButton);
    expect(onClose).toHaveBeenCalled();
  });
});

