import { useContext, useEffect, useState } from "react";
import "./book-main.css";
import "../../global.css";
import BookContext from "../book-context";

const BookMain = () => {
  const { choosed, navOk, formOk, setFormOk, setChoosed } =
    useContext(BookContext);
  const [image, setImage] = useState("");

  useEffect(() => {
    const handleImage = () => {
      if (choosed === "Rhyno_SE03_Lite") setImage("bike1.png");
      else if (choosed === "Rhyno_SE03") setImage("bike2.png");
      else if (choosed === "Rhyno_SE03_Max") setImage("bike3.png");
    };
    handleImage();
  }, [choosed]);

  const handleChoosed1 = () => {
    setChoosed("Rhyno_SE03_Lite");
    console.log("clicked");
  };
  const handleChoosed2 = () => {
    setChoosed("Rhyno_SE03");
    console.log("clicked");
  };
  const handleChoosed3 = () => {
    setChoosed("Rhyno_SE03_Max");
    console.log("clicked");
  };

  return (
    <div
      className="book-main"
      style={{ width: formOk ? "calc(100vw - 500px)" : "100vw", height: navOk ? "calc(100vh - 35px)" : "100vh"}}
    >
      {!formOk && (
        <div className="chooseModel-main">
          <div
            className="choose-main"
            style={{
              border: choosed === "Rhyno_SE03_Lite" && "2px solid #d0d0d0",
              backgroundColor: choosed === "Rhyno_SE03_Lite" && "white",
            }}
            onClick={handleChoosed1}
          >
            Rhyno SE03 Lite
          </div>
          <div
            className="choose-main"
            style={{
              border: choosed === "Rhyno_SE03" && "2px solid #d0d0d0",
              backgroundColor: choosed === "Rhyno_SE03" && "white",
            }}
            onClick={handleChoosed2}
          >
            Rhyno SE03
          </div>
          <div
            className="choose-main"
            style={{
              border: choosed === "Rhyno_SE03_Max" && "2px solid #d0d0d0",
              backgroundColor: choosed === "Rhyno_SE03_Max" && "white",
            }}
            onClick={handleChoosed3}
          >
            Rhyno SE03 Max
          </div>
        </div>
      )}
      <div
        className="bg-text"
        style={{
          fontSize:
            choosed === "Rhyno SE03" ? "210px" : formOk ? "105px" : "150px",
          width: formOk ? "800px" : "fit-content",
        }}
      >
        {choosed.split("_").join(" ")}
      </div>
      <div
        className="product"
        style={{
          width: formOk ? "calc(100vw - 500px)" : "100vw",
          height: navOk ? "calc(100vh - 35px)" : "100vh",
          top: navOk ? "35px" : "0",
        }}
      >
        <img
          src={`./${image}`}
          className="product-image"
          style={{ height: formOk ? "620px" : "640px" }}
        />
      </div>
      {!formOk && (
        <div className="form-booking-btn" onClick={() => setFormOk(true)}>
          Book {choosed.split("_").join(" ")}
        </div>
      )}
    </div>
  );
};

export default BookMain;
