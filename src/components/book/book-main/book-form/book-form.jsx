import "./book-form.css";
import "../../../global.css";
import { useContext } from "react";
import { Colors1, Colors2 } from "./color-tray";
import BookContext from "../../book-context";
import { IoClose } from "react-icons/io5";

const BookForm = ({ navOk }) => {
  const { choosed, setChoosed, colorName, setColorName, setFormOk, setNavOk } =
    useContext(BookContext);

  const handleChoosed1 = () => {
    setChoosed("RV400");
    setColorName("Lightning Yellow");
  };
  const handleChoosed2 = () => {
    setChoosed("RV400_BRZ");
    setColorName("Dark Lunatic Green");
  };
  const handleChoosingColor = (e) => {
    let colorChoosed = e.target.id.split("_").join(" ");
    setColorName(colorChoosed);
  };
  return (
    <div
      className="book-form"
      style={{ height: navOk ? "calc(100vh - 35px)" : "100vh" }}
    >
      <div className="form-container">
        <span className="form-close-btn"onClick={() => {setFormOk(false); setNavOk(true);}}><IoClose /></span>
        <div className="top">
          <div className="top-label">Book your Revolt</div>
          <div className="text-top">
            <span className="text-top-label">
              EMI starting from INR 4,444/mo.
            </span>
            Get the RV400 at one month's petrol & servicing cost* of an
            equivalent ICE bike.
            <p className="text">
              <span className="conditions">*T&C Apply</span>
            </p>
          </div>
          <div className="chooseModel">
            <div
              className={`choose2 ${choosed === "RV400" && "selected"}`}
              onClick={handleChoosed1}
            >
              RV400
            </div>
            <div
              className={`choose2 ${choosed === "RV400_BRZ" && "selected"}`}
              onClick={handleChoosed2}
            >
              RV400 BRZ
            </div>
          </div>
          <div className="chooseColor">
            <span className="color-label">
              Color: <span className="choosed-color-label">{colorName}</span>
            </span>
            <div className="colorsTray">
              {choosed === "RV400" ? (
                <Colors1 handleChoosingColor={handleChoosingColor} />
              ) : (
                <Colors2 handleChoosingColor={handleChoosingColor} />
              )}
            </div>
          </div>
        </div>
        <p className="form-label">
          Please enter your personal details below for purchase and registration
          of your Revolt Motorcycle.
        </p>
        <form action="#" className="booking-form">
          <input
            type="text"
            className="getName"
            name="getName"
            placeholder="enter your name"
            required
          />
          <input
            type="text"
            className="getNumber"
            name="getNumber"
            placeholder="enter your phone number"
            required
          />
          <input
            type="text"
            className="getMail"
            name="getMail"
            placeholder="enter mail i'd"
            required
          />
          <div className="getAddress">
            <select name="getState" className="getState" required>
              <option value="">choose state</option>
            </select>
            <select name="getCity" className="getCity" required>
              <option value="">choose city</option>
            </select>
          </div>
          <select name="getDealer" className="getDealer" required>
            <option value="">choose dealer</option>
          </select>
          <p className="verify-note">Please verify you are a human.</p>
          <div className="verify-capatcha">
            <div className="capatcha-quiz">{"9 + 4"}</div>
            <span>=</span>
            <input type="number" className="capatcha-answer" />
          </div>
          <div className="getAgreement">
            <input type="checkbox" className="agreement" required />
            <span className="ask-agreement">
              I agree to the <span className="red">Terms & Conditions</span> for
              this booking.
            </span>
          </div>
          <div className="submitBtn">
            <button className="bookBtn" type="submit">
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default BookForm;
