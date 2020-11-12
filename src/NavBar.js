import React from "react";
import { NavLink } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./assests/css/mycss.css";
import navLogo from "./assests/images/Logo.png";

function NavBar(props) {
  return (
    <div className="row navBar_bg gx-0">
      <div className="col-11 mx-auto my-1 ">
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">
              <img
                src={navLogo}
                alt="LogoImage"
                className="navBar_logo img-fluid"
              />
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse navBar_text"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    exact={true}
                    activeClassName="navBar_activeLink"
                    className="nav-link "
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    exact
                    activeClassName="navBar_activeLink"
                    className="nav-link"
                    to="/about"
                  >
                    About Us
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <button
                    className="nav-link dropdown-toggle btn btn-link "
                    href="#"
                    id="navbarDropdown"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    PRODUCTS
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <NavLink
                        activeClassName="navBar_activeLink"
                        className="dropdown-item"
                        to="/service1"
                      >
                        Service-1
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        activeClassName="navBar_activeLink"
                        className="dropdown-item"
                        to="/anotheraction"
                      >
                        Another action
                      </NavLink>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <NavLink
                        activeClassName="navBar_activeLink"
                        className="dropdown-item"
                        to="/service2"
                      >
                        Service-2
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeClassName="navBar_activeLink"
                    className="nav-link"
                    to="/contact"
                  >
                    Contact Us
                  </NavLink>
                </li>
                {/* <li className="nav-item">
                  <NavLink
                    activeClassName="navBar_activeLink"
                    className="nav-link"
                    to="/socialLink"
                  >
                    Social Links
                  </NavLink>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
