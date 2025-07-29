import { useState } from "react";
import { fetchUsersByCriteria } from "../services/githubService";


const fetchUserData = () => {};

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setUsers([]);

    try {
      const result = await fetchUsersByCriteria({ username, location, minRepos });
      setUsers(result);
    } catch (err) {
      setError("Looks like we can't find any matching users.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <form onSubmit={handleSearch} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            placeholder="GitHub Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="flex-1 p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="flex-1 p-2 border rounded"
          />
          <input
            type="number"
            placeholder="Min Repos"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            className="w-32 p-2 border rounded"
          />
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
            Search
          </button>
        </div>
      </form>

      <div className="mt-6">
        {loading && <p className="text-gray-700">Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {users.length > 0 && (
          <ul className="space-y-4">
            {users.map((user) => (
              <li key={user.login} className="border p-4 rounded shadow-sm">
                <div className="flex items-center space-x-4">
                  <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
                  <div>
                    <p className="font-bold">{user.login}</p>
                    <p><a href={user.html_url} className="text-blue-600 underline" target="_blank" rel="noreferrer">View Profile</a></p>
                    {user.location && <p>📍 {user.location}</p>}
                    {user.public_repos !== undefined && <p>📦 {user.public_repos} repositories</p>}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      
    </div>
  );
};

export default Search;
