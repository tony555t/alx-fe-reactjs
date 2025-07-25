import { useRecipeStore } from "../recipeStore";
 


const DeleteRecipeButton =({recipeId})=>{
    const  deleteRecipe = useRecipeStore(state=> state.deleteRecipe;
    
    const handleDelete=()=>{
        if (Window.comfirm('are you sure ')){
            deleteRecipe{recipeId}
        }
    };
    return(
        <button onClick={handleDelete}style={{
            backgroundColor:'red',
            color:'white'
        }}>
            delete recipe

        </button>
    )
}