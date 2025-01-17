import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./views/HomePage/HomePage";
import AboutPage from "./views/AboutPage/AboutPage";
import BasketPage from "./views/BasketPage/BasketPage";
import IngredientsPage from "./views/IngredientsPage/IngredientsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/ingredients" element={<IngredientsPage />} />
        <Route path="/basket" element={<BasketPage />} />
      </Routes>
    </Router>
  );
}

export default App;
