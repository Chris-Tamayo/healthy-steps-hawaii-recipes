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

        <div>
          <p>
            Healthy Steps Hawai'i is an O'ahu-based 501(c)(3) nonprofit organization formed in 2023 aimed at helping the people of Hawai'i take the first steps towards a healthier future. We are interested in the social determinants of health and believe that by combating these problems, we can help guide Hawai'i toward a healthier future. 
          </p>
          <p>
            Please use this web based application to help you create delicious, healthy, and affordable recipes for you and your family to enjoy!
          </p>
        </div>
        
      </div>
    </div>
  )
}

export default AboutPage