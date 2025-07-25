import React from 'react';
import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes);
  const searchTerm = useRecipeStore(state => state.searchTerm);
  
  // Use filtered recipes if there's a search term, otherwise show all recipes
  const recipesToDisplay = searchTerm ? filteredRecipes : recipes;

  return (
    <div>
      <h2>Recipe List</h2>
      {recipesToDisplay.length === 0 ? (
        searchTerm ? (
          <p>No recipes found matching "{searchTerm}". Try a different search term.</p>
        ) : (
          <p>No recipes available. Add some recipes to get started!</p>
        )
      ) : (
        recipesToDisplay.map(recipe => (
          <div key={recipe.id} style={{ 
            border: '1px solid #ccc', 
            margin: '10px 0', 
            padding: '15px',
            borderRadius: '8px',
            backgroundColor: '#f9f9f9'
          }}>
            <div style={{ marginBottom: '15px' }}>
              <h3 style={{ margin: '0 0 8px 0' }}>
                <Link 
                  to={`/recipe/${recipe.id}`}
                  style={{ 
                    textDecoration: 'none', 
                    color: '#007bff',
                    fontSize: '20px'
                  }}
                >
                  {recipe.title}
                </Link>
              </h3>
              <p style={{ margin: '0', color: '#666' }}>
                {recipe.description.length > 100 
                  ? `${recipe.description.substring(0, 100)}...` 
                  : recipe.description
                }
              </p>
            </div>
            
            <div style={{ 
              display: 'flex', 
              gap: '10px', 
              alignItems: 'center',
              flexWrap: 'wrap'
            }}>
              <Link 
                to={`/recipe/${recipe.id}`}
                style={{
                  padding: '6px 12px',
                  backgroundColor: '#17a2b8',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '4px',
                  fontSize: '14px'
                }}
              >
                View Details
              </Link>
              <EditRecipeForm recipe={recipe} />
              <DeleteRecipeButton recipeId={recipe.id} />
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;