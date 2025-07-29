
import axios from 'axios';


export const fetchUserData = async (username) => {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data;
};

// Advanced user search with multiple filters
export const fetchUsersByCriteria = async ({ username, location, minRepos }) => {
  let query = '';

  if (username) query += `${username} in:login`;
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

  const response = await axios.get(`https://api.github.com/search/users?q=${encodeURIComponent(query)}`);

  const users = response.data.items;

  const detailedUsers = await Promise.all(
    users.map(async (user) => {
      try {
        const detail = await fetchUserData(user.login);
        return detail;
      } catch (e) {
        return user; 
      }
    })
  );

  return detailedUsers;
};
