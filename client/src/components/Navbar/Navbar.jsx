import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="position-absolute top-0 start-0 w-100 bg-white p-3 shadow-sm navbar-container">
      <div className="d-flex justify-content-between align-items-center">
        <button
          onClick={() => navigate(`/`)}
          className="text-decoration-none text-dark border-0 bg-transparent"
        >
          <p className="m-0 fw-bold home-button">Healthy Steps Hawaii</p>
        </button>

        <button
          className="navbar-toggler border-0 d-md-none"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="material-symbols-outlined navbar-toggler-icon">menu</span>
        </button>

        <nav className={`d-flex gap-3 ${isOpen ? "d-block" : "d-none"} d-md-flex`}>
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
            <p className="m-0">Ingredients</p>
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
