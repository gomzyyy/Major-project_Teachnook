import { createContext, useState } from "react";

const BookContext = createContext({
  choosed: true,
  colorName: "Lightning ellowY",
  navOk: true,
  formOk: false,
});

export const BookContextProvider = ({ children }) => {
  const [choosed, setChoosed] = useState("RV400");
  const [colorName, setColorName] = useState("Lightning Yellow");
  const [navOk, setNavOk] = useState(true);
  const [formOk, setFormOk] = useState(false);

  return (
    <BookContext.Provider
      value={{
        choosed,
        setChoosed,
        colorName,
        setColorName,
        navOk,
        setNavOk,
        formOk,
        setFormOk,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};
export default BookContext;
