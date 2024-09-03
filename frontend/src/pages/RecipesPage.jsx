import React, { useState } from "react";

const RecipesPage = () => {
  const [recipes, setRecipes] = useState([
    {
      id: 1,
      name: "Spaghetti Carbonara",
      ingredients: "Pasta, Eggs, Pecorino, Guanciale",
    },
    {
      id: 2,
      name: "Margherita Pizza",
      ingredients: "Dough, Tomatoes, Mozzarella, Basil",
    },
  ]);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-red-800 mb-4">Manage Recipes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-red-700 mb-2">
              {recipe.name}
            </h2>
            <p className="text-gray-700">
              <strong>Ingredients:</strong> {recipe.ingredients}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipesPage;
