import AddRemoveButton from "../AddRemoveButton/AddRemoveButton";
import "../IngredientCard/IngredientCard.css";

const IngredientCard = ({ name, quantity, description, image }) => {
  const ingredient = { name, quantity, description, image };

  return (
    <div className="d-flex flex-column ingredient-card">
      <img className="flex-grow-1" src={image} alt={name} />
      <div className="ingredient-text-container d-flex flex-row justify-content-between align-items-center p-2">
        <div className="d-flex flex-column">
          <p className="name fw-bold">{name}</p>
          <p className="quantity">{quantity}</p>
          <p className="description fw-light">{description}</p>
        </div>
        <AddRemoveButton ingredient={ingredient}/>
      </div>
      
    </div>
  )
}

export default IngredientCard