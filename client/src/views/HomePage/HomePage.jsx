import { useNavigate } from 'react-router-dom';
import "./HomePage.css"
import Navbar from '../../components/Navbar/Navbar';
function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="home-page-container d-flex flex-column justify-content-center align-items-center w-100 h-100">
        <h1 className='w-75 text-center m-3'>We’re here to help you eat healthy without compromising taste.</h1>
        <button className="start-button p-3" onClick={() => navigate('/ingredients')}>Click here to begin</button>
      </div>
    </>
      
  );
}

export default HomePage;
