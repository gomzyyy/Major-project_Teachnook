import BookPage from "./components/book/book-page";
import "./App.css";
import { BookContextProvider } from "./components/book/book-context";
import { Outlet } from "react-router";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";

function App() {
  return (
    <>
      <Navbar />
      <BookContextProvider>
        <BookPage />
        {/* <Outlet /> */}
      </BookContextProvider>
      <Footer />
    </>
  );
}

export default App;
