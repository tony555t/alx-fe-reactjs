import React, { useState } from 'react';
import { fetchUserData, searchUsers } from '../services/githubService';

const Search = () => {
  const [searchMode, setSearchMode] = useState('basic'); // 'basic' or 'advanced'
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [userData, setUserData] = useState(null);
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleBasicSearch = async (e) => {
    e.preventDefault();
    if (!username.trim()) return;

    setLoading(true);
    setError('');
    setUserData(null);

    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (err) {
      setError('Looks like we cant find the user');
    } finally {
      setLoading(false);
    }
  };

  const handleAdvancedSearch = async (e) => {
    e.preventDefault();
    
    setLoading(true);
    setError('');
    setUserList([]);

    try {
      const searchParams = {
        username: username.trim(),
        location: location.trim(),
        minRepos: minRepos.trim()
      };

      const data = await searchUsers(searchParams);
      setUserList(data.items || []);
    } catch (err) {
      setError('Error occurred while searching users');
    } finally {
      setLoading(false);
    }
  };

  const resetSearch = () => {
    setUsername('');
    setLocation('');
    setMinRepos('');
    setUserData(null);
    setUserList([]);
    setError('');
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        {/* Search Mode Toggle */}
        <div className="mb-6">
          <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => {
                setSearchMode('basic');
                resetSearch();
              }}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                searchMode === 'basic'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Basic Search
            </button>
            <button
              onClick={() => {
                setSearchMode('advanced');
                resetSearch();
              }}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                searchMode === 'advanced'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Advanced Search
            </button>
          </div>
        </div>

        {/* Basic Search Form */}
        {searchMode === 'basic' && (
          <form onSubmit={handleBasicSearch} className="mb-6">
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Enter GitHub username..."
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                type="submit"
                disabled={loading || !username.trim()}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {loading ? 'Searching...' : 'Search'}
              </button>
            </div>
          </form>
        )}

        {/* Advanced Search Form */}
        {searchMode === 'advanced' && (
          <form onSubmit={handleAdvancedSearch} className="mb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <input
                type="text"
                placeholder="Username..."
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="text"
                placeholder="Location..."
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="number"
                placeholder="Min repositories..."
                value={minRepos}
                onChange={(e) => setMinRepos(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button
              type="submit"
              disabled={loading || (!username.trim() && !location.trim() && !minRepos.trim())}
              className="w-full px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {loading ? 'Searching...' : 'Search Users'}
            </button>
          </form>
        )}

        {/* Loading State */}
        {loading && (
          <div className="flex items-center justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <span className="ml-2 text-gray-600">Loading...</span>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <p className="text-red-600">{error}</p>
          </div>
        )}

        {/* Basic Search Results */}
        {searchMode === 'basic' && userData && !loading && (
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-start space-x-4">
              <img
                src={userData.avatar_url}
                alt={userData.login}
                className="w-20 h-20 rounded-full border-2 border-gray-200"
              />
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-gray-900">
                  {userData.name || userData.login}
                </h2>
                <p className="text-gray-600">@{userData.login}</p>
                {userData.bio && (
                  <p className="text-gray-700 mt-2">{userData.bio}</p>
                )}
                <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-600">
                  {userData.location && (
                    <span>📍 {userData.location}</span>
                  )}
                  <span>📚 {userData.public_repos} repositories</span>
                  <span>👥 {userData.followers} followers</span>
                  <span>Following {userData.following}</span>
                </div>
                <a
                  href={userData.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
                >
                  View GitHub Profile
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Advanced Search Results */}
        {searchMode === 'advanced' && userList.length > 0 && !loading && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Found {userList.length} users
            </h3>
            <div className="grid gap-4">
              {userList.map((user) => (
                <div key={user.id} className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center space-x-4">
                    <img
                      src={user.avatar_url}
                      alt={user.login}
                      className="w-12 h-12 rounded-full border-2 border-gray-200"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">
                        {user.login}
                      </h4>
                      <p className="text-sm text-gray-600">
                        Score: {user.score?.toFixed(2)}
                      </p>
                    </div>
                    <a
                      href={user.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors"
                    >
                      View Profile
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* No Results */}
        {searchMode === 'advanced' && userList.length === 0 && !loading && !error && (username || location || minRepos) && (
          <div className="text-center py-8 text-gray-500">
            No users found matching your criteria.
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
