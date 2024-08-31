import React from "react";
import "./home.css";
import "../global.css";
import { Overview } from "./product-overview/product-overview";
import { Link } from "react-router-dom";
import { OVERVIEW_DATA } from "../../assets/data";
import { COMPARE_ALL_DATA as compareData } from "../../assets/data";
import CompareAll from "./compare-all/compare-all";


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
      <main className="overview-home">
      {OVERVIEW_DATA.map((data, i)=><Overview key={i} data={data}/>)}
      </main>
      <main className="compare-all" id="compare_">
      {compareData.map((data, i)=><CompareAll key={i} data={data} />)}
      </main>
    </main>
  );
};

export default Home;
