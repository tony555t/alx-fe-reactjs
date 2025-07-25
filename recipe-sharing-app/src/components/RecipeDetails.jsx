import { useRecipeStore } from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = ({ recipeId }) => {
  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => recipe.id === recipeId)
  );

  if (!recipe) {
    return (
      <div>
        <h2>Recipe Not Found</h2>
        <p>The recipe with ID {recipeId} could not be found.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <div style={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '20px',
        backgroundColor: '#f8f9fa'
      }}>
        <h1 style={{ marginBottom: '15px', color: '#333' }}>{recipe.title}</h1>
        <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '20px' }}>
          {recipe.description}
        </p>
        <p style={{ fontSize: '14px', color: '#666', marginBottom: '20px' }}>
          Recipe ID: {recipe.id}
        </p>
        
        {/* Render EditRecipeForm and DeleteRecipeButton here */}
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <EditRecipeForm recipe={recipe} />
          <DeleteRecipeButton recipeId={recipe.id} />
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;