import { useContext } from "react";
import Navbar from "../../components/Navbar/Navbar"
import { IngredientsContext } from "../../context/IngredientsProvider";

const BasketPage = () => {
  const { selectedIngredients } = useContext(IngredientsContext);

  return (
    <div className="d-flex justify-content-center w-100 h-100">
      <Navbar />
      <div className="content-container">
        <div className="ingredients-header">
          <div className="d-flex">
            <h1 className="content-header">Basket</h1>
          </div>
        </div>
        <hr/>

        <div className="ingredients-container">
          Ingredients:
          <ul>
            {selectedIngredients.map((ingredient) => (
              <li key={ingredient.name}>{ingredient.name}</li>
            ))}
          </ul>
        </div>
        
      </div>
    </div>
  )
}

export default BasketPage