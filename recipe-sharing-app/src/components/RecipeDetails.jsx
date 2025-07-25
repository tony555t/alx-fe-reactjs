import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import './App.css';

// Wrapper component to extract params and pass as props
const RecipeDetailsWrapper = () => {
  const { id } = useParams();
  return <RecipeDetails recipeId={parseInt(id)} />;
};

function App() {
  return (
    <Router>
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
          <Routes>
            <Route path="/" element={
              <>
                <AddRecipeForm />
                <RecipeList />
              </>
            } />
            <Route path="/recipe/:id" element={<RecipeDetailsWrapper />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;