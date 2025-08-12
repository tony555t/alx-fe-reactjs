import React from 'react';
import Search from './components/Search';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <h1 className="text-2xl font-bold text-gray-900">
            GitHub User Search
          </h1>
          <p className="text-gray-600 mt-1">
            Search for GitHub users and explore their profiles
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-8">
        <Search />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-4xl mx-auto px-6 py-4 text-center text-gray-500 text-sm">
          Built with React and powered by GitHub API
        </div>
      </footer>
    </div>
  );
}

export default App;
