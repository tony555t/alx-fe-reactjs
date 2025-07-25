import { useRecipeStore } from "./recipeStore";

const FavouriteList = ()=>{
    const favorites =  useRecipeStore(state => state.faourites.map(id=>
        state.recipes. find (recipe =>recipe.id === id)

    ));
    return (
        <div>
          <h2>My Favorites</h2>
          {favorites.map(recipe => (
            <div key={recipe.id}>
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
            </div>
          ))}
        </div>
      );
    };
    
    export default FavouriteList;