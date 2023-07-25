import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const listStyle = {
    "textDecoration": "none",
    "color": "black"
  };
  return (
    <nav>
      <div className="links">
        <ul>
          <li>
            <Link to="/" style={listStyle}>
              All
            </Link>
          </li>
          <li>
            <Link to="/FullStackDevelopment" style={listStyle}>
        FULL STACK DEVELOPMENT
            </Link>
          </li>
          <li>
            <Link to="/DataScience" style={listStyle}>
            DATA SCIENCE
            </Link>
          </li>
          <li>
            <Link to="/CyberSecurity" style={listStyle}>
            CYBER SECURITY
            </Link>
          </li>
          <li>
            <Link to="/Career" style={listStyle}>
            CAREER
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;