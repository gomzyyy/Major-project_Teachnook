import React from "react";
import "./compare-all.css";
import { Link } from "react-router-dom";

const CompareAll = ({ data }) => {
  const feat = data.feature;

  console.log(feat);
  return (
    <div className="compare-container" id={data.id}>
      <div className="compare-image">
        <img src={`./${data.image}`} />
      </div>
      <div className="compare-features-home">
        {feat.map((f, i) => (
          <div className="compare-context" key={i}>
            <div className="compare-label">{f.label} :</div>
            <div className="compare-text">{f.details}</div>
          </div>
        ))}
      </div>
      <Link className="Link" to="/book-Ev"><div className="buy-button">Book now!</div></Link>
    </div>
  );
};

export default CompareAll;
