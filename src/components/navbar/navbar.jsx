import React from "react";
import "./navbar.css";
import { USER_PROFILE_ICON, MENU_ICON, CLOSE_BTN_ICON } from "../../assets/data";
import Sidebar from "./sidebar/sidebar";
import { useContext } from "react";
import NavbarContext from "./nav-contexAPI";
import { Link } from "react-router-dom";

const Navbar = () => {
  const {menuOk, setMenuOk} = useContext(NavbarContext);

  const handleMenu = () =>{
    setMenuOk(p=>!p)
  }
  const closeMenu = () => setMenuOk(false)

  return (<>
    <div className="navbar">
      <div className="nav-logo">
        <img src="LOGO.png" alt="Rhyno" />
      </div>
      <div className="options-container">
        <ul className="options">
        <Link className="Link" to="/book-Ev"><li className="option"  onClick={closeMenu}>Test Ride</li></Link>
        <Link className="Link" to="/book-Ev"><li className="option"  onClick={closeMenu}>Book an EV</li></Link>
          <Link className="Link" to="/book-Ev"><li className="option"  onClick={closeMenu}>Become a partner</li></Link>
        </ul>
      </div>
      <div className="user-menu">
        <div className="icon-options">
        <div className="user">
        <div className="user-profile-icon" dangerouslySetInnerHTML={{ __html: USER_PROFILE_ICON }} />
        </div>
        <div className="menu" onClick={handleMenu}>
        <div className="menu-icon" dangerouslySetInnerHTML={{ __html:menuOk? CLOSE_BTN_ICON : MENU_ICON }} />
        </div>
        </div>
      </div>
    </div>
    <Sidebar/>
    </>
  );
};

export default Navbar;
