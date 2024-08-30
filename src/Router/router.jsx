import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
} from "react-router-dom";
import SellEv from "../components/sell/MainPage";
import BookPage from "../components/book/book-page";
import Home from "../components/home/home";
import App from "../App";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="/book-EV" element={<BookPage />} />
      <Route path='/sell-EV' element={<SellEv/>} />
    </Route>
  )
);
