import { Link } from "react-router-dom";

import "../styles/home.css";

function Home() {

   return (
    <div className="home">
      <div className="hero">
        <div className="hero-content">
          <h1>Find Your New Best Friend 🐶</h1>

          <p>
            PawAdopt helps lovely dogs find caring
            families and forever homes.
          </p>

          <Link to="/dogs" className="hero-button">
            View Dogs
          </Link>
        </div>
      </div>

      <div className="home-info">
        <h2>Why Adopt?</h2>

        <p>
          Every dog deserves love, care and a safe
          place to call home.
        </p>
      </div>
    </div>
  );
}
    

export default Home;
