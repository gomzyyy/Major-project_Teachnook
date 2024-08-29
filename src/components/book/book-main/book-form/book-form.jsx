import "./book-form.css";
import "../../../global.css";
import { useContext } from "react";
import BookContext from "../../book-context";
import { IoClose } from "react-icons/io5";

const BookForm = () => {
  const { choosed, setChoosed, setFormOk, setNavOk, navOk } =
    useContext(BookContext);

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
      className="book-form"
      style={{ height: navOk ? "calc(100vh - 35px)" : "100vh" }}
    >
      <div className="form-container">
        <span
          className="form-close-btn"
          onClick={() => {
            setFormOk(false);
            setNavOk(true);
          }}
        >
          <IoClose />
        </span>
        <div className="top">
          <div className="top-label">Book your Rhyno</div>
          <div className="text-top">
            <span className="text-top-label">
              EMI starting from INR 4,444/mo.
            </span>
            Get the Rhyno SE03 Max at one month's petrol & servicing cost* of an
            equivalent ICE bike.
            <p className="text">
              <span className="conditions">*T&C Apply</span>
            </p>
          </div>
          <div className="chooseModel">
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
        </div>
        <p className="form-label">
          Please enter your personal details below for purchase and registration
          of your Rhyno EV Bikes.
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
