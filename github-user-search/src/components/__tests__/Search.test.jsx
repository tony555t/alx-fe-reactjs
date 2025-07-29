// src/components/__tests__/Search.test.jsx
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import '@testing-library/jest-dom';

import Search from '../Search';
import * as githubService from '../../services/githubService'
vi.mock('../../services/githubService');

describe('Search component', () => {
  it('calls fetchUserData and displays user info', async () => {
    const mockUser = {
      login: 'octocat',
      name: 'The Octocat',
      avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
      html_url: 'https://github.com/octocat',
    };

    githubService.fetchUserData.mockResolvedValueOnce(mockUser);

    render(<Search />);

    fireEvent.change(screen.getByPlaceholderText(/github/i), {
      target: { value: 'octocat' },
    });

    fireEvent.click(screen.getByRole('button', { name: /search/i }));

    expect(screen.getByText(/loading/i)).toBeInTheDocument();

    await waitFor(() => {
      expect(githubService.fetchUserData).toHaveBeenCalledWith('octocat');
      expect(screen.getByText('The Octocat')).toBeInTheDocument();
    });
  });

  it('displays error message when user not found', async () => {
    githubService.fetchUserData.mockRejectedValueOnce(new Error('Not Found'));

    render(<Search />);

    fireEvent.change(screen.getByPlaceholderText(/github/i), {
      target: { value: 'nonexistentuser' },
    });

    fireEvent.click(screen.getByRole('button', { name: /search/i }));

    await waitFor(() => {
      expect(screen.getByText(/can't find the user/i)).toBeInTheDocument();
    });
  });
});
