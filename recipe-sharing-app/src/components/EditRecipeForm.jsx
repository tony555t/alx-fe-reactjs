import { useState } from "react";
import { useRecipeStore } from "../recipeStore";

const EditRecipeForm =({recipe})=>{
    const updateRecipe = useRecipeStore(state => state.updateRecipe);
    const [ title,setTitle]= useState(recipe.title);
    const [ description,setDescription]= useState(recipe.description);
    const [ isEditing,setIsEditing]= useState(false);

const handleSubmit = (e)=>{
    e.preventDefault();
    if (title.trim()&&description.trim()){
        updateRecipe(recipe.id,{
            title:title.trim(),
            description:description.trim()
        })
        setIsEditing(false)
    }
};
if (!isEditing) {
    return (
      <button onClick={() => setIsEditing(true)}>
        Edit Recipe
      </button>
    );
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <button type="submit">Save Changes</button>
      <button type="button" onClick={() => setIsEditing(false)}>
        Cancel
      </button>
    </form>
  );
};

export default EditRecipeForm;