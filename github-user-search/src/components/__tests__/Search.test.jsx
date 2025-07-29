// src/components/__tests__/Search.test.jsx
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

import Search from '../Search';
import * as githubService from '../../services/githubService';
vi.mock('../../services/githubService');

describe('Search component', () => {
  it('calls fetchUsersByCriteria and displays user info', async () => {
    const mockUsers = [{
      login: 'octocat',
      avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
      html_url: 'https://github.com/octocat',
    }];

    githubService.fetchUsersByCriteria.mockResolvedValueOnce(mockUsers);

    render(<Search />);

    fireEvent.change(screen.getByPlaceholderText(/github/i), {
      target: { value: 'octocat' },
    });

    fireEvent.click(screen.getByRole('button', { name: /search/i }));

    expect(screen.getByText(/loading/i)).toBeInTheDocument();

    await waitFor(() => {
      expect(githubService.fetchUsersByCriteria).toHaveBeenCalledWith({
        username: 'octocat',
        location: '',
        minRepos: ''
      });
      expect(screen.getByText(/octocat/i)).toBeInTheDocument();
    });
  });

  it('displays error message when no users found', async () => {
    githubService.fetchUsersByCriteria.mockResolvedValueOnce([]);

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
