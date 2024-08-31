import { createContext, useState } from "react";

const BookContext = createContext({
  navOk: true,
  formOk: false,
  choosed:"Rhyno_SE03_Lite",
});

export const BookContextProvider = ({ children }) => {
  const [choosed, setChoosed] = useState("Rhyno_SE03_Lite");
  const [navOk, setNavOk] = useState(true);
  const [formOk, setFormOk] = useState(false);

  return (
    <BookContext.Provider
      value={{
        choosed,
        setChoosed,
        navOk,
        setNavOk,
        formOk,
        setFormOk
            }}
    >
      {children}
    </BookContext.Provider>
  );
};
export default BookContext;
