import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  setSearchTerm: (term) => set({ searchTerm: term }),
  filteredRecipes: [],
  favorites: [],
  recommendation : [],

  addRecipe: (newRecipe) => set((state) => ({ 
    recipes: [...state.recipes, newRecipe] 
  })),
  
  setRecipes: (recipes) => set({ recipes }),

  setSearchTerm: (term) =>
    set((state) => {
      const lowerTerm = term.toLowerCase();
      const filtered = state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(lowerTerm)
      );
      return { searchTerm: term, filteredRecipes: filtered };
    }),

  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),

  deleteRecipe: (id) => set((state) => {
    const updatedRecipes = state.recipes.filter(recipe => recipe.id !== id);
    const updatedFilteredRecipes = state.filteredRecipes.filter(recipe => recipe.id !== id);
    return {
      recipes: updatedRecipes,
      filteredRecipes: updatedFilteredRecipes
    };
  }),
  
  updateRecipe: (id, updatedRecipe) => set((state) => {
    const updatedRecipes = state.recipes.map(recipe => 
      recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
    );
    const updatedFilteredRecipes = state.filteredRecipes.map(recipe =>
      recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
    );
    return {
      recipes: updatedRecipes,
      filteredRecipes: updatedFilteredRecipes
    };

  
  }),

 addFavourite:(recipeId) => set ((state)=>({
  favourites: [...state.favourites,recipeId]
 })),



 removeFavourite:(recipeId) => set ((state)=>({
  favorites: state.favorites.filter(id => id !== recipeId)

 })),

 
 generateRecommendations: () => set((state) => {
  // Enhanced recommendation 
  const favoriteRecipes = state.recipes.filter(recipe => 
    state.favorites.includes(recipe.id)
  );
  
  // Get keywords from favorite recipes' titles and descriptions
  const favoriteKeywords = favoriteRecipes.flatMap(recipe => 
    [...recipe.title.toLowerCase().split(' '), ...recipe.description.toLowerCase().split(' ')]
  ).filter(word => word.length > 3); // Filter out short words
  
  // Find recipes that contain similar keywords but aren't already favorites
  const recommended = state.recipes.filter(recipe => {
    if (state.favorites.includes(recipe.id)) return false; // Don't recommend favorites
    
    const recipeWords = [...recipe.title.toLowerCase().split(' '), 
                        ...recipe.description.toLowerCase().split(' ')];
    
    // Check if recipe keywords with favorites
    const hasCommonKeywords = favoriteKeywords.some(keyword => 
      recipeWords.some(word => word.includes(keyword) || keyword.includes(word))
    );
    
    return hasCommonKeywords || Math.random() > 0.7; 
  }).slice(0, 5); 
  
  return { recommendations: recommended };
}),
}));
