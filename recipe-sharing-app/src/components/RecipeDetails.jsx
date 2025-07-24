import  {useRecipeStore } from '../recipeStore'

const DeleteRecipeButton =({ recepeId})=>{
    const deleteRecipe = useRecipeStore(state => state.deleteRecipe);

    const handleDelete=()=>{}
        if (window.confirm('Are you sureyou wnt to delete this recipe?')){
            deleteRecipe(recepeId);
        }
    
};
return(
    <button onClick={handleDelete} style ={{backgroundColor:'red',color:'white'}}>
        delete recipe
    </button>
)

export default DeleteRecipeButton