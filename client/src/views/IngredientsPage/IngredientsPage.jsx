import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import IngredientCard from "../../components/IngredientCard/IngredientCard";
import Navbar from "../../components/Navbar/Navbar";
import { useContext } from "react";
import { IngredientsContext } from "../../context/IngredientsProvider";

const IngredientsPage = () => {
  const [ingredients, setIngredients] = useState([]);
  const { selectedIngredients } = useContext(IngredientsContext);

  useEffect(() => {
    // Fetch and parse the CSV file
    const fetchIngredients = async () => {
      const response = await fetch('/healthy-steps-hawaii-recipes/ingredients.csv');
      const csvData = await response.text();

      // Parse the CSV data
      Papa.parse(csvData, {
        header: true,
        skipEmptyLines: true,
        complete: (result) => {
          setIngredients(result.data);
        },
      });
    };

    fetchIngredients();
  }, []);

  return (
    <div className="d-flex justify-content-center w-100 h-100">
      <Navbar />
      <div className="content-container">
        <div className="ingredients-header">
          <div className="d-flex align-items-end">
            <h1 className="content-header">Select Your Ingredients</h1>
            <p className="mx-3 item-count fw-light">{selectedIngredients.length} item(s)</p>
          </div>

          <hr />

          <div className="d-flex flex-row justify-content-start flex-wrap ingredients-container">
            {ingredients.map((ingredient, index) => (
              <IngredientCard
                key={index}
                name={ingredient.name}
                quantity={ingredient.quantity}
                description={ingredient.description}
                image={ingredient.image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IngredientsPage;
