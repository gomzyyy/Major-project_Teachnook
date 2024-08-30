import "./App.css";
import { BookContextProvider } from "./components/book/book-context";
import { NavbarContextProvider } from "./components/navbar/nav-contexAPI";
import { Outlet } from "react-router";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";

function App() {
  return (
    <>
      <NavbarContextProvider>
        <Navbar />
      </NavbarContextProvider>
      <BookContextProvider>
        <Outlet />
      </BookContextProvider>
      <Footer />
    </>
  );
}

export default App;
