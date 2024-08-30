import { createContext, useState } from "react";

const NavbarContext = createContext({
    menuOk: false
});

export const NavbarContextProvider = ({ children }) => {
  const [menuOk, setMenuOk] = useState(false);

  return (
    <NavbarContext.Provider
      value={{
        menuOk,
        setMenuOk
      }}
    >
      {children}
    </NavbarContext.Provider>
  );
};
export default NavbarContext;