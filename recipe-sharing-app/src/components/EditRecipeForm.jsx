import { useState } from "react";
import { useRecipeStore } from "./recipeStore";

const EditRecipeForm = ({ recipe }) => {
    const updateRecipe = useRecipeStore(state => state.updateRecipe);
    const [title, setTitle] = useState(recipe.title);
    const [description, setDescription] = useState(recipe.description);
    const [isEditing, setIsEditing] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (title.trim() && description.trim()) {
            updateRecipe(recipe.id, {
                title: title.trim(),
                description: description.trim()
            });
            setIsEditing(false);
        }
    };

    if (!isEditing) {
        return (
            <button onClick={() => setIsEditing(true)} style={{
                padding: '8px 16px',
                backgroundColor: '#28a745',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
            }}>
                Edit Recipe
            </button>
        );
    }

    return (
        <form onSubmit={handleSubmit} style={{
            border: '1px solid #ccc',
            padding: '15px',
            borderRadius: '5px',
            backgroundColor: '#f9f9f9'
        }}>
            <div style={{ marginBottom: '10px' }}>
                <label style={{ display: 'block', marginBottom: '5px' }}>Title:</label>
                <input
                    type="text"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    required
                    style={{
                        width: '100%',
                        padding: '8px',
                        border: '1px solid #ccc',
                        borderRadius: '4px'
                    }}
                />
            </div>
            <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px' }}>Description:</label>
                <textarea
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                    required
                    rows="4"
                    style={{
                        width: '100%',
                        padding: '8px',
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                        resize: 'vertical'
                    }}
                />
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
                <button type="submit" style={{
                    padding: '8px 16px',
                    backgroundColor: '#007bff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                }}>
                    Save Changes
                </button>
                <button type="button" onClick={() => setIsEditing(false)} style={{
                    padding: '8px 16px',
                    backgroundColor: '#6c757d',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                }}>
                    Cancel
                </button>
            </div>
        </form>
    );
};

export default EditRecipeForm;