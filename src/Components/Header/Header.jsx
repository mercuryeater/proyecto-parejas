import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <div className="header__left__container">
          <img
            src="./logo.png"
            alt="Generic Logo"
            className="header__left__container__logo"
          />
        </div>
        <h2>Personal Movie Rating</h2>
      </div>
      <div className="header__right">
        <h3>About Us</h3>
      </div>
    </div>
  );
}

export default Header;
