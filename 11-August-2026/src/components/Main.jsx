import { useState } from "react";

export default function Main() {
  const [ingredients, SetIngredients] = useState([]);

  const ingredientsListItems = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

  function addIngredient() {
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient");
    SetIngredients((prev) => [...prev, newIngredient]);
    console.log(ingredients);
  }

  return (
    <main>
      <form action={addIngredient} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>
      <ul>{ingredientsListItems}</ul>
    </main>
  );
}
