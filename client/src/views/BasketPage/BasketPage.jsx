import Navbar from "../../components/Navbar/Navbar"

const BasketPage = () => {
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
          Basket
        </div>
        
      </div>
    </div>
  )
}

export default BasketPage