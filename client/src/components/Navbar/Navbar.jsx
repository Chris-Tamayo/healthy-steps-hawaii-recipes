import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const basePath = "/healthy-steps-hawaii-recipes";

  return (
    <div className="position-absolute top-0 start-0 w-100 bg-white p-3 shadow-sm">
      <div className="d-flex justify-content-between align-items-center">
        <button
          onClick={() => navigate(`/`)}
          className="text-decoration-none text-dark border-0 bg-transparent"
        >
          <p className="m-0 fw-bold home-button">Healthy Steps Hawaii</p>
        </button>
        <nav className="d-flex gap-3">
          <button
            onClick={() => navigate(`/about`)}
            className="text-decoration-none text-dark border-0 bg-transparent"
          >
            <p className="m-0">About</p>
          </button>
          <button
            onClick={() => navigate(`/ingredients`)}
            className="text-decoration-none text-dark border-0 bg-transparent"
          >
            <p className="m-0">Select Ingredients</p>
          </button>
          <button
            onClick={() => navigate(`/basket`)}
            className="text-decoration-none text-dark border-0 bg-transparent"
          >
            <p className="m-0">Basket</p>
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
