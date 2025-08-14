import { useParams, Link } from "react-router-dom";
import recipesData from "../data.json";

export default function RecipeDetail() {
  const { id } = useParams();
  const recipe = recipesData.find((r) => r.id === parseInt(id));

  if (!recipe) {
    return (
      <div className="p-6 text-center">
        <h1 className="text-2xl font-bold">Recipe Not Found</h1>
        <Link to="/" className="text-blue-500 hover:underline">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover rounded-lg" />
      <h1 className="text-3xl font-bold mt-4">{recipe.title}</h1>
      <h2 className="text-xl font-semibold mt-6">Ingredients</h2>
      <ul className="list-disc list-inside text-gray-700 mt-2">
        {recipe.ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h2 className="text-xl font-semibold mt-6">Instructions</h2>
      <p className="mt-2 text-gray-700">{recipe.instructions}</p>
      <Link to="/" className="inline-block mt-6 text-blue-500 hover:underline">
        ← Back to Home
      </Link>
    </div>
  );
}
