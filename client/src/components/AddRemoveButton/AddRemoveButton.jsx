import { useContext } from "react";
import { IngredientsContext } from "../../context/IngredientsProvider.jsx";

const AddRemoveButton = ({ ingredient }) => {
  const { selectedIngredients, toggleIngredient } = useContext(IngredientsContext);

  const isSelected = selectedIngredients.some((ing) => ing.name === ingredient.name);

  return (
    <button
      className={`btn ${isSelected ? "btn-danger" : "btn-primary"}`}
      onClick={() => toggleIngredient(ingredient)}
    >
      {isSelected ? "Remove" : "Add"}
    </button>
  );
};

export default AddRemoveButton;
