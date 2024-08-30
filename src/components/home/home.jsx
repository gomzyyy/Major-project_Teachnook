import React from "react";
import "./home.css";
import "../global.css";
import { Overview } from "./product-overview/product-overview";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <main className="home">
      <div className="first-look">
        <div className="bg-image">
          <div className="logo-image">
            <img src="LOGO.png" />
          </div>
          <div className="label-first-look">INDIA'S NO1 ELECTRIC BIKE</div>
          <Link className="Link" to="/book-Ev"><div className="booking-btn-home">Book Now</div></Link>
          <img src="./ls-img.png" />
        </div>
      </div>
      <div className="product-description-home">
        <div className="product-overview"></div>
        <div className="product-overview"></div>
        <div className="product-overview"></div>
      </div>
      <main className="overview-home">
      <Overview/>
      </main>
    </main>
  );
};

export default Home;
