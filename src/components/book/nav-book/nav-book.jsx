import "./nav-book.css";
import { OFFER_ARRAY } from "../../../assets/data";
import { useContext } from "react";
import BookContext from "../book-context";

const NavBook = () => {

const {setNavOk, setFormOk} = useContext(BookContext);

  return (
    <div className="nav-features">
      <div className="offer-scroll">
        <p className="offer offer1">{OFFER_ARRAY[0]}</p>
        <p className="offer offer2">{OFFER_ARRAY[1]}</p>
        <p className="offer offer3">{OFFER_ARRAY[2]}</p>
        <p className="offer offer4">
          Grab the offers by filling the form
          <span
            className="booking-form"
            onClick={() => {
              setFormOk(true);
            }}
          >
            here!
          </span>
        </p>
      </div>
      <span className="closeBtn" onClick={() => setNavOk(false)}>
        close
      </span>
    </div>
  );
};

export default NavBook;
