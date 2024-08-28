import "./book-page.css";
import { useState, useContext } from "react";
import NavBook from "./nav-book/nav-book";
import FeatureContainer from "../features/features-container";
import BookMain from "./book-main/book-main";
import BookForm from "./book-main/book-form/book-form";
import BookContext from "./book-context";

const BookPage = () => {
const {navOk, formOk} = useContext(BookContext)


  return (
    <main className="book">
      {navOk && <NavBook />}
      <div className="book-container">
        <BookMain formOk={formOk} />
        {formOk && <BookForm navOk={navOk} />}
      </div>
      <FeatureContainer></FeatureContainer>
    </main>
  );
};

export default BookPage;
