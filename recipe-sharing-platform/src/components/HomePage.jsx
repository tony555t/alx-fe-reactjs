// src/components/HomePage.jsx
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="p-6 md:p-10">
      <h1 className="text-3xl font-bold mb-4">Welcome to Recipe Sharing</h1>
      <p className="mb-6">Discover, share, and create amazing recipes!</p>

      <div className="flex gap-4">
        {/* Link to Add Recipe page */}
        <Link
          to="/add"
          className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
        >
          Add Recipe
        </Link>

        {/* Example: Link to a sample recipe detail page */}
        <Link
          to="/recipe/1"
          className="bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-600"
        >
          View Sample Recipe
        </Link>
      </div>
    </div>
  );
}
