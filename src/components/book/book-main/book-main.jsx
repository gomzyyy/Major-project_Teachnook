import { useContext, useEffect, useState } from "react";
import "./book-main.css";
import BookContext from "../book-context";

const BookMain = ({ formOk }) => {
  const { choosed, colorName, navOk } = useContext(BookContext);
  const [image, setImage] = useState("")

  useEffect(() => {
    const handleImage = () => {
      if (colorName === "Lightning Yellow") setImage("lighting_yellow.png");
      else if (colorName === "Eclipse Red") setImage("eclipse_red.png");
      else if (colorName === "India Blue") setImage("pacific_blue.png");
      else if (colorName === "Stealth Black") setImage("stealth-black.png");
      else if (colorName === "Mist Grey") setImage("product_grey.png");
      else if (colorName === "Cosmic Black") setImage("product_black.png");
      else if (colorName === "Dark Lunatic Green") setImage("brz_dark_lunar_green.png");
      else if (colorName === "Dark Silver") setImage("brz_dark_silver.png");
      else if (colorName === "Cosmic Black1") setImage("brz_cosmic_black.png");
      else if (colorName === "Rebel Red") setImage("brz_rebel_red.png");
      else if (colorName === "Pacific Blue") setImage("brz_pacific_blue.png");
    };
    handleImage()
  }, [colorName]);

  return (
    <div
      className="book-main"
      style={{ width: formOk ? "calc(100vw - 500px)" : "100vw" }}
    >
      <div
        className="bg-text"
        style={{ fontSize: choosed === "RV400" ? "210px" : "165px" }}
      >
        {choosed.split("_").join(" ")}
      </div>
      <div className="product" style={{ width: formOk ? "calc(100vw - 500px)" : "100vw", height: navOk ? "calc(100vh - 35px)" : "100vh", top: navOk?"35px":"0"}}>
        <img src={`./${image}`} alt="" className="product-image" />
      </div>
    </div>
  );
};

export default BookMain;

