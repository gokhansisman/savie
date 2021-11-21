import React from "react";
import "./Navbar.css";

const NavBar = () => (
  <header className="navbar">
    <div className="navbar__title navbar__item">
      <a href="/">Savie</a>
    </div>
    <div className="navbar__item">About Us</div>
    <div className="navbar__item">Contact</div>
    <div className="navbar__item">
      <a href="/login">Login</a>
    </div>
  </header>
);

export default NavBar;
