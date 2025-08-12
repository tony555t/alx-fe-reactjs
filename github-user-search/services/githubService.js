
import axios from 'axios';

const BASE_URL = 'https://api.github.com';

// Function to fetch individual user data
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Function for advanced search with multiple criteria
export const searchUsers = async (searchParams) => {
  try {
    const { username = '', location = '', minRepos = '' } = searchParams;
    
    // Build query string
    let query = '';
    
    if (username) {
      query += username;
    }
    
    if (location) {
      query += ` location:${location}`;
    }
    
    if (minRepos) {
      query += ` repos:>=${minRepos}`;
    }
    
    const response = await axios.get(`${BASE_URL}/search/users?q=${encodeURIComponent(query)}&per_page=30`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

