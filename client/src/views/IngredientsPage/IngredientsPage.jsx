import IngredientCard from "../../components/IngredientCard/IngredientCard";
import Navbar from "../../components/Navbar/Navbar"

const IngredientsPage = () => {
  const ingredients = [
    {
      name: "Peanut Butter",
      quantity: "6 oz",
      description: "Organic",
    },
    {
      name: "Canned Chicken",
      quantity: "6 oz",
      description: "Organic",
    },
    {
      name: "Canned Tuna",
      quantity: "6 oz",
      description: "Organic",
    },

  ];

  return (
    <div className="d-flex justify-content-center w-100 h-100">
      <Navbar />
      <div className="content-container">
          <div className="ingredients-header">
          <div className="d-flex">
            <h1 className="content-header">Select Your Ingredients</h1>
          </div>

          <hr/>

          <div className="d-flex flex-row justify-content-between flex-wrap ingredients-container">
            {ingredients.map((ingredient, index) => (
              <IngredientCard 
                key={index} 
                name={ingredient.name}
                quantity={ingredient.quantity}
                description={ingredient.description}
              />
            ))}
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default IngredientsPage