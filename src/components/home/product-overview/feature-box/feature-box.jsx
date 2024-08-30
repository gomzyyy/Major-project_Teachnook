import "./feature-box.css";
import { FEATURES } from "../../../../assets/data";

const FeatureBox = () => {
  return (
    <div className="features-home">
      <div className="feature-home fea1-home">
        <img src={`./${FEATURES[0].icon}`} className="feaIcon-home" />
        <div className="feaContext-home">
          <span className="feaLabel-home">{FEATURES[0].label}</span>
          <span className="feaDescription-home">{FEATURES[0].description}</span>
        </div>
      </div>
      <div className="feature-home fea2-home">
        <img src={`./${FEATURES[1].icon}`} className="feaIcon-home" />
        <div className="feaContext-home">
          <span className="feaLabel-home">{FEATURES[1].label}</span>
          <span className="feaDescription-home">{FEATURES[1].description}</span>
        </div>
      </div>
      <div className="feature-home fea3-home">
        <img src={`./${FEATURES[2].icon}`} className="feaIcon-home" />
        <div className="feaContext-home">
          <span className="feaLabel-home">{FEATURES[2].label}</span>
          <span className="feaDescription-home">{FEATURES[2].description}</span>
        </div>
      </div>
    </div>
  );
};

export default FeatureBox;
