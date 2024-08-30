import React from "react";
import "./sidebar.css";
import { useContext, useState } from "react";
import NavbarContext from "../nav-contexAPI";
import { ARROW_ICON } from "../../../assets/data";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { menuOk, setMenuOk } = useContext(NavbarContext);
  const [productsMenu, setProductsMenu] = useState(false);
  const closeMenu = () => setMenuOk(false)

  return (
    <div className="sidebar-nav" style={{ height: menuOk ? "200px" : "0px" }}>
      <div
        className="sidebar-options-container"
        style={{ top: productsMenu && "0" }}
      >
        <ul className="sidebar-options">
          <Link className="Link" to="/">
            <li
              className="sidebar-option opt1"
              onClick={closeMenu}
            >
              Home
            </li>
          </Link>
          <Link className="Link" to="#">
            <li className="sidebar-option opt2">About us</li>
          </Link>
          <li className="sidebar-option opt3">
            <div className="products-options">
              <div
                className="product-list"
                onClick={() => setProductsMenu((p) => !p)}
              >
                <span className="product-menu-label">Products</span>
                <span
                  className="arrow-down"
                  style={{ transform: productsMenu && "rotate(-180deg)" }}
                >
                  <div
                    className="arrow-icon"
                    dangerouslySetInnerHTML={{ __html: ARROW_ICON }}
                  />
                </span>
              </div>
              {productsMenu && (
                <div className="products">
                  <div className="product-menu">SE03 Lite</div>
                  <div className="product-menu">SE03</div>
                  <div className="product-menu">SE03 Max</div>
                  <div className="product-menu">Compare all</div>
                </div>
              )}
            </div>
          </li>
          <li className="sidebar-option opt4">Contact us</li>
          <li className="sidebar-option opt5">Pre-book now</li>
        </ul>
        <div className="social-icons">
          <div className="icon-ig"></div>
          <div className="icon-linkedin"></div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
