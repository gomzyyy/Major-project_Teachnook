import "./feature-box.css";

const FeatureBox = ({val}) => {
  return (
    <div className="features-home">
      <div className="feature-home fea1-home">
        <img src={`./${val[0].icon}`} className="feaIcon-home" />
        <div className="feaContext-home">
          <span className="feaLabel-home">{val[0].label}</span>
          <span className="feaDescription-home">{val[0].description}</span>
        </div>
      </div>
      <div className="feature-home fea2-home">
        <img src={`./${val[1].icon}`} className="feaIcon-home" />
        <div className="feaContext-home">
          <span className="feaLabel-home">{val[1].label}</span>
          <span className="feaDescription-home">{val[1].description}</span>
        </div>
      </div>
      <div className="feature-home fea3-home">
        <img src={`./${val[2].icon}`} className="feaIcon-home" />
        <div className="feaContext-home">
          <span className="feaLabel-home">{val[2].label}</span>
          <span className="feaDescription-home">{val[2].description}</span>
        </div>
      </div>
    </div>
  );
};

export default FeatureBox;
