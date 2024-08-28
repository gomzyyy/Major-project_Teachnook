import BookPage from "./components/book/book-page";
import "./App.css";
import { BookContextProvider } from "./components/book/book-context";

function App() {
  return (
    <BookContextProvider>
      <BookPage />
    </BookContextProvider>
  );
}

export default App;
