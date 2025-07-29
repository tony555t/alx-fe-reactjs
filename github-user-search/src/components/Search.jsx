// src/components/Search.jsx
import { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
  const [inputValue, setInputValue] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    setLoading(true);
    setError('');
    setUserData(null);

    try {
      const data = await fetchUserData(inputValue);
      setUserData(data);
    } catch (err) {
      setError("Looks like we can't find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter GitHub username"
          style={{ padding: '0.5rem', width: '70%' }}
        />
        <button type="submit" style={{ padding: '0.5rem 1rem', marginLeft: '1rem' }}>
          Search
        </button>
      </form>

      <div style={{ marginTop: '2rem' }}>
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {userData && (
          <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
            <img src={userData.avatar_url} alt="User avatar" width={100} />
            <p><strong>Name:</strong> {userData.name || 'No name provided'}</p>
            <p><strong>Username:</strong> {userData.login}</p>
            <p>
              <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
                View GitHub Profile
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
