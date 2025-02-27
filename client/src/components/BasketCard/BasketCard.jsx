import "../BasketCard/BasketCard.css";
import RemoveButton from "../RemoveButton/RemoveButton";

const BasketCard = ({ name, quantity, image }) => {
  const ingredient = { name, quantity, image };

  return (
    <div className="d-flex flex-row align-items-center basket-card mb-2">
      <img src={image} alt={name} />
      <div className="basket-text-container p-2 flex-grow-1 d-flex justify-content-between align-items-center">
        <div className="d-flex flex-column">
          <p className="name fw-bold">{name}</p>
          <p className="quantity">{quantity}</p>
        </div>
        <RemoveButton ingredient={ingredient} />
      </div>
    </div>
  )
}

export default BasketCard;