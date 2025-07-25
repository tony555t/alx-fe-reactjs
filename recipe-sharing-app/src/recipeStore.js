import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],

  addRecipe: (newRecipe) => set((state) => {
    const updatedRecipes = [...state.recipes, newRecipe];
    const filtered = updatedRecipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    );
    return { 
      recipes: updatedRecipes,
      filteredRecipes: filtered
    };
  }),

  setRecipes: (recipes) => set((state) => {
    const filtered = recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    );
    return { 
      recipes,
      filteredRecipes: filtered
    };
  }),

  setSearchTerm: (term) => set((state) => {
    const lowerTerm = term.toLowerCase();
    const filtered = state.recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(lowerTerm)
    );
    return { 
      searchTerm: term, 
      filteredRecipes: filtered 
    };
  }),

  filterRecipes: () => set((state) => ({
    filteredRecipes: state.recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    ),
  })),

  deleteRecipe: (id) => set((state) => {
    const updatedRecipes = state.recipes.filter(recipe => recipe.id !== id);
    const filtered = updatedRecipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    );
    return {
      recipes: updatedRecipes,
      filteredRecipes: filtered
    };
  }),

  updateRecipe: (id, updatedRecipe) => set((state) => {
    const updatedRecipes = state.recipes.map(recipe => 
      recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
    );
    const filtered = updatedRecipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    );
    return {
      recipes: updatedRecipes,
      filteredRecipes: filtered
    };
  })
}));