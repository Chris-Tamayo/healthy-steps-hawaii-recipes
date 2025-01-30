import { useContext } from "react";
import Navbar from "../../components/Navbar/Navbar"
import { IngredientsContext } from "../../context/IngredientsProvider";
import "../BasketPage/BasketPage.css";
import BasketCard from "../../components/BasketCard/BasketCard";

const BasketPage = () => {
  const { selectedIngredients } = useContext(IngredientsContext);

  return (
    <div className="d-flex justify-content-center w-100 h-100">
      <Navbar />
      <div className="content-container">
        <div className="ingredients-header">
        <div className="d-flex align-items-end">
            <h1 className="content-header">Basket</h1>
            <p className="mx-3 item-count fw-light">{selectedIngredients.length} item(s)</p>
          </div>
        </div>
        <hr/>

        <div className="w-100 d-flex flex-row">
          <div className="basket-container">
          {selectedIngredients.map((ingredient, index) => (
            <BasketCard 
              key={index} 
              name={ingredient.name}
              quantity={ingredient.quantity}
              image={ingredient.image}
            />
          ))}
          </div>
          <button className="recipes-button">
            <div className="h-100 p-2 d-flex justify-content-between align-items-center">
              <p className="m-0">Find your recipes!</p>
              <p className="m-0">{">"}</p>
            </div>
          </button>
        </div>
        
        
      </div>
    </div>
  )
}

export default BasketPage