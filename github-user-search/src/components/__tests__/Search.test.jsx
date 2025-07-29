// src/components/__tests__/Search.test.jsx
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import '@testing-library/jest-dom';

import Search from '../Search';
import * as githubService from '../../services/githubService'
vi.mock('../../services/githubService');

describe('Search component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

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
      expect(githubService.fetchUserData).toHaveBeenCalledWith('nonexistentuser');
      expect(screen.getByText("Looks like we can't find the user")).toBeInTheDocument();
    });
  });

  it('prevents search with empty input', () => {
    const mockFetchUserData = vi.spyOn(githubService, 'fetchUserData');
    
    render(<Search />);

    fireEvent.click(screen.getByRole('button', { name: /search/i }));

    expect(mockFetchUserData).not.toHaveBeenCalled();
  });

  it('clears previous results when starting new search', async () => {
    const mockUser = {
      login: 'octocat',
      name: 'The Octocat',
      avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
      html_url: 'https://github.com/octocat',
    };

    githubService.fetchUserData.mockResolvedValueOnce(mockUser);

    render(<Search />);

    // First search
    fireEvent.change(screen.getByPlaceholderText(/github/i), {
      target: { value: 'octocat' },
    });
    fireEvent.click(screen.getByRole('button', { name: /search/i }));

    await waitFor(() => {
      expect(screen.getByText('The Octocat')).toBeInTheDocument();
    });

    // Second search that will fail
    githubService.fetchUserData.mockRejectedValueOnce(new Error('Not Found'));
    
    fireEvent.change(screen.getByPlaceholderText(/github/i), {
      target: { value: 'nonexistentuser' },
    });
    fireEvent.click(screen.getByRole('button', { name: /search/i }));

    await waitFor(() => {
      expect(screen.queryByText('The Octocat')).not.toBeInTheDocument();
      expect(screen.getByText(/looks like we cant find the user/i)).toBeInTheDocument();
    });
  });
});