import React, { createContext, useState } from "react";

export const IngredientsContext = createContext();

export const IngredientsProvider = ({ children }) => {
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  const addIngredient = (ingredient) => {
    setSelectedIngredients((prev) => [...prev, ingredient]);
  };

  const removeIngredient = (ingredientName) => {
    setSelectedIngredients((prev) =>
      prev.filter((ing) => ing.name !== ingredientName)
    );
  };

  const toggleIngredient = (ingredient) => {
    if (selectedIngredients.some((ing) => ing.name === ingredient.name)) {
      removeIngredient(ingredient.name);
    } else {
      addIngredient(ingredient);
    }
  };

  return (
    <IngredientsContext.Provider
      value={{ selectedIngredients, addIngredient, removeIngredient, toggleIngredient }}
    >
      {children}
    </IngredientsContext.Provider>
  );
};
