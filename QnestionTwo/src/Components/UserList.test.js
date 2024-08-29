import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import UserList from './UserList';

// Mocking fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve([{ id: 1, name: 'Leanne Graham' }]),
  })
);

test('renders user names', async () => {
  render(<UserList />);
  
  // Wait for loading to finish and check if the user is displayed
  await waitFor(() => expect(screen.getByText('Leanne Graham')).toBeInTheDocument());
});

test('displays error message on fetch failure', async () => {
  fetch.mockImplementationOnce(() =>
    Promise.reject(new Error('Fetch failed'))
  );

  render(<UserList />);

  await waitFor(() => expect(screen.getByText('Error: Fetch failed')).toBeInTheDocument());
});