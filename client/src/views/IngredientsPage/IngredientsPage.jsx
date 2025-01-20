import Navbar from "../../components/Navbar/Navbar"

const IngredientsPage = () => {
  return (
    <div className="d-flex justify-content-center w-100 h-100">
      <Navbar />
      <div className="content-container">
          <div className="ingredients-header">
          <div className="d-flex">
            <h1 className="content-header">Select Your Ingredients</h1>
          </div>

          <hr/>

          <div className="ingredients-container">
            Ingredients
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default IngredientsPage