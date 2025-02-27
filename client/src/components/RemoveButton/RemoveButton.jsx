import { useContext } from "react";
import { IngredientsContext } from "../../context/IngredientsProvider.jsx";
import "../RemoveButton/RemoveButton.css";

const RemoveButton = ({ ingredient }) => {
  const { toggleIngredient } = useContext(IngredientsContext);

  return (
    <button className="btn" onClick={() => toggleIngredient(ingredient)}>
      <span className="material-symbols-outlined">
        close
      </span>
    </button>
  );
};

export default RemoveButton;