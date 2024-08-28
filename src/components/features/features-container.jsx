import "./features-container.css";
import { FEATURES } from "../../assets/data";

const FeatureContainer = () => {

  return (
    <div className="features">
      <div className="feature fea1">
        <img src={`./${FEATURES[0].icon}`} className="feaIcon" />
        <div className="feaContext">
          <span className="feaLabel">{FEATURES[0].label}</span>
          <span className="feaDescription">{FEATURES[0].description}</span>
        </div>
      </div>
      <div className="feature fea2">
        <img src={`./${FEATURES[1].icon}`} className="feaIcon" />
        <div className="feaContext">
          <span className="feaLabel">{FEATURES[0].label}</span>
          <span className="feaDescription">{FEATURES[0].description}</span>
        </div>
      </div>
      <div className="feature fea3">
        <img src={`./${FEATURES[2].icon}`} className="feaIcon" />
        <div className="feaContext">
          <span className="feaLabel">{FEATURES[0].label}</span>
          <span className="feaDescription">{FEATURES[0].description}</span>
        </div>
      </div>
    </div>
  );
};

export default FeatureContainer;
