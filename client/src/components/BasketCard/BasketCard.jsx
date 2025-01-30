import "../BasketCard/BasketCard.css";

const BasketCard = ({ name, quantity, image }) => {
  return (
    <div className="d-flex flex-row align-items-center basket-card mb-2">
      <img src={image} alt={name} />
      <div className="basket-text-container p-2 flex-grow-1 d-flex justify-content-between align-items-center">
        <div className="d-flex flex-column">
          <p className="name fw-bold">{name}</p>
          <p className="quantity">{quantity}</p>
        </div>
        <p>X</p>
      </div>
    </div>
  )
}

export default BasketCard;