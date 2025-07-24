import create from 'zustand'; 

const useRecipeStore = create ((set)=>({
    //initial state
    recipe:[],

    //action : add new recipe 
    addRecipe:(newRecipe )=>
        set((state)=>({
            recipe:[...state.recipes,newRecipe],
        })),

    // set all recipe 
    setRecipes:(recipe)=>set({recipes}),
}))

export default useRecipeStore;