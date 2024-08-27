import "./book-page.css";
import { useState } from "react";
import NavBook from "./nav-book/nav-book";
import FeatureContainer from "../features/features-container";
import BookForm from "./book-main/book-form/book-form";

const BookMain = () => {
  const [navOk, setNavOk] = useState(true);
  const [formOk, setFormOK] = useState(true);

  return (
    <main className="book">
      {navOk && <NavBook navState={setNavOk} formState={setFormOK} />}
        {formOk && <BookForm formState={setFormOK} />}
      {/* <FeatureContainer /> */}
    </main>
  );
};

export default BookMain;
{
  /* <div dangerouslySetInnerHTML={{__html: LOGO}}/> */
}
