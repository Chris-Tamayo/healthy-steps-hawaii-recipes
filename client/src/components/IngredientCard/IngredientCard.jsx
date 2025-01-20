const IngredientCard = ({ name, quantity, description }) => {
  return (
    <div className="d-flex flex-column ingredient-card">
      <img></img>
      <p>{name}</p>
      <p>{quantity}</p>
      <p>{description}</p>
    </div>
  )
}

export default IngredientCard