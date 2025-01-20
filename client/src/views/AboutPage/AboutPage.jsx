import Navbar from "../../components/Navbar/Navbar"

const AboutPage = () => {
  return (
    <div className="d-flex justify-content-center w-100 h-100">
      <Navbar />
      <div className="content-container">
        <div className="ingredients-header">
          <div className="d-flex">
            <h1 className="content-header">About</h1>
          </div>
        </div>
        <hr/>

        <div className="ingredients-container">
          About
        </div>
        
      </div>
    </div>
  )
}

export default AboutPage