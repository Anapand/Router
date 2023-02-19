import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul className="navbar">
        <li>
          <NavLink to="/about" className="nav-bar-link">
            About
          </NavLink>
        </li>

        <li>
          <NavLink to="/" className="nav-bar-link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/Contact" className="nav-bar-link">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/Login" className="nav-bar-link">
            Login
          </NavLink>
        </li>

        <li>
          <NavLink to="/user/Anil" className="nav-bar-link">
            Anil
          </NavLink>
        </li>

        <li>
          <NavLink to="/user/Peter" className="nav-bar-link">
            Peter
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
