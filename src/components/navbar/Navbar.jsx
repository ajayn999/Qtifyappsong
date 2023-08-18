import React from "react";
import Searchbar from "../searchbar/Searchbar";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <header className="header">
        <div className="logo">
          <div className="logo_image">
            <img src="/qtifyappsong/public/images/earphone.png" alt="logo" />
            <span>Q</span>
          </div>
          <span className="logo_text">tify</span>
        </div>

        <div className="middle_container">
          <Searchbar />
        </div>

        <div className="right_container">
          <button className="navbar_btn">Give Feedback</button>
        </div>
      </header>
    </>
  );
};

export default Navbar;
