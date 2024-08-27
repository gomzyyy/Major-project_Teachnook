import "./book-form.css";

const BookForm = () => {
  return (
    <div className="book-form">
      <div className="top">
        <div className="top-label">Book your Revolt</div>
        <div className="text-top">
          <span className="top-text">EMI starting from INR 4,444/mo</span>
          Get the RV400 at one month's petrol & servicing cost* of an equivalent
          ICE bike.
          <p className="text">
            <span className="conditions">*T&C Apply</span>
          </p>
        </div>
        <div className="chooseModel">
          <div className="choose1">RV400</div>
          <div className="choose2">RV400 BRZ</div>
        </div>
        <div className="chooseColor">
          <span className="color-label"></span>
          <ul className="bikeColors">
            <li>
              <div className="pickColor">
                <span className="color grey1"></span>
              </div>
            </li>
            <li>
              <div className="pickColor">
                <span className="color grey2"></span>
              </div>
            </li>
            <li>
              <div className="pickColor">
                <span className="color black"></span>
              </div>
            </li>
            <li>
              <div className="pickColor">
                <span className="color red"></span>
              </div>
            </li>
            <li>
              <div className="pickColor">
                <span className="color blue"></span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <form action="#">
        <input type="text" className="getName" name="getName" />
        <input type="text" className="getNumber" name="getNumber" />
        <input type="text" className="getMail" name="getMail" />
        <select name="getState" className="getState"></select>
        <select name="getCity" className="getCity"></select>
        <select name="getDealer" className="getDealer"></select>
        <p className="verify-note">Please verify you are a human</p>
        <div className="verify-capatcha">
          <div className="capatcha-quiz"></div>
          <span>=</span>
          <div className="capatcha-answer"></div>
        </div>
        <div className="getAgreement">
          <input type="checkbox" className="agreement" />
          <span className="ask-agreement">
            I agree to the <span className="red">Terms & Conditions</span> for
            this booking.
          </span>
        </div>
        <button className="bookBtn" type="submit">Next</button>
      </form>
    </div>
  );
};
export default BookForm;
