import React from 'react';
import AddRecipeForm from './components/AddRecipeForm.JSX';
import RecipeList from './components/RecipeList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header style={{ 
        textAlign: 'center', 
        marginBottom: '30px',
        padding: '20px',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px'
      }}>
        <h1>Recipe Sharing Application</h1>
        <p>Share and discover amazing recipes!</p>
      </header>
      
      <main style={{ 
        maxWidth: '800px', 
        margin: '0 auto', 
        padding: '0 20px' 
      }}>
        
        <AddRecipeForm />
        <RecipeList />
      </main>
    </div>
  );
}

export default App;