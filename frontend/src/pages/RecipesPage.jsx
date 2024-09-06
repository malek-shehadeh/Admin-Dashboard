// import React, { useState } from "react";

// const RecipesPage = () => {
//   const [recipes, setRecipes] = useState([
//     {
//       id: 1,
//       name: "Spaghetti Carbonara",
//       ingredients: "Pasta, Eggs, Pecorino, Guanciale",
//     },
//     {
//       id: 2,
//       name: "Margherita Pizza",
//       ingredients: "Dough, Tomatoes, Mozzarella, Basil",
//     },
//   ]);

//   return (
//     <div className="p-6 max-w-4xl mx-auto">
//       <h1 className="text-3xl font-bold text-red-800 mb-4">Manage Recipes</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         {recipes.map((recipe) => (
//           <div key={recipe.id} className="bg-white p-4 rounded-lg shadow">
//             <h2 className="text-xl font-semibold text-red-700 mb-2">
//               {recipe.name}
//             </h2>
//             <p className="text-gray-700">
//               <strong>Ingredients:</strong> {recipe.ingredients}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RecipesPage;
////////////////
import React, { useState, useEffect } from "react";
import axios from "axios";

const RecipesPage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const response = await axios.get("/api/recipes");
      setRecipes(response.data);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  const handleApprovalToggle = async (id, currentApproval) => {
    try {
      await axios.put(`/api/recipes/${id}/toggle-approval`);
      setRecipes(
        recipes.map((recipe) =>
          recipe._id === id ? { ...recipe, approved: !currentApproval } : recipe
        )
      );
    } catch (error) {
      console.error("Error toggling approval:", error);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-red-800 mb-4">Recipes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {recipes.map((recipe) => (
          <div key={recipe._id} className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-red-700 mb-2">
              {recipe.name}
            </h2>
            <p className="text-gray-700 mb-2">
              <strong>Ingredients:</strong>{" "}
              {recipe.ingredients.map((ing) => ing.type).join(", ")}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Servings:</strong> {recipe.servings}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Cuisine:</strong> {recipe.cuisineType}
            </p>
            <button
              onClick={() => handleApprovalToggle(recipe._id, recipe.approved)}
              className={`px-4 py-2 rounded ${
                recipe.approved
                  ? "bg-red-500 hover:bg-red-600 text-white"
                  : "bg-green-500 hover:bg-green-600 text-white"
              }`}
            >
              {recipe.approved ? "Disapprove" : "Approve"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipesPage;
