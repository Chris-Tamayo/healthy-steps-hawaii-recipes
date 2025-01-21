import AddRemoveButton from "../AddRemoveButton/AddRemoveButton";
import "../IngredientCard/IngredientCard.css";

const IngredientCard = ({ name, quantity, description }) => {
  const ingredient = { name, quantity, description };

  return (
    <div className="d-flex flex-column ingredient-card">
      <img className="flex-grow-1"></img>
      <div className="d-flex flex-row justify-content-between align-items-center p-2">
        <div className="d-flex flex-column">
          <p className="name mb-1 fw-bold">{name}</p>
          <p className="quantity mb-1">{quantity}</p>
          <p className="description mb-1 fw-light">{description}</p>
        </div>
        <AddRemoveButton ingredient={ingredient}/>
      </div>
      
    </div>
  )
}

export default IngredientCard