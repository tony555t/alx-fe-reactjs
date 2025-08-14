import React, { useState, useEffect } from 'react';
import recipeData from '../data.json';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Load the recipe data from data.json into state when component mounts
    setRecipes(recipeData);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Recipe Sharing Platform
          </h1>
          <p className="text-lg text-gray-600">
            Discover delicious recipes from around the world
          </p>
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
            >
              {/* Recipe Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              
              {/* Recipe Content */}
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {recipe.title}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {recipe.summary}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State (if no recipes) */}
        {recipes.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Loading recipes...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
