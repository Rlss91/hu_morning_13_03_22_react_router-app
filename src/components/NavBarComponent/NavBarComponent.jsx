import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDragon } from "@fortawesome/free-solid-svg-icons";
import "./NavBarComponent.css";

const NavBarComponent = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          Navbar
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className={(navData) => {
                  return "nav-link " + (navData.isActive ? "activeLink" : "");
                }}
                aria-current="page"
                to="/home"
              >
                <FontAwesomeIcon icon={faDragon} />
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={(navData) => {
                  return "nav-link " + (navData.isActive ? "activeLink" : "");
                }}
                aria-current="page"
                to="/login"
              >
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={(navData) => {
                  return "nav-link " + (navData.isActive ? "activeLink" : "");
                }}
                aria-current="page"
                to="/signup"
              >
                Signup
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={(navData) => {
                  return "nav-link " + (navData.isActive ? "activeLink" : "");
                }}
                aria-current="page"
                to="/cardspanel"
              >
                Cards Panel
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBarComponent;
