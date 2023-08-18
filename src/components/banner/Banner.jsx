import React from "react";
import "./Banner.css";
const Banner = () => {
  return (
    <>
      <div className="banner">
        <div className="left_hero">
          <p>100 Thousand Songs, ad-free</p>
          <p>Over thousands podcast episodes</p>
        </div>
        <div className="right_hero">
          <img src="/images/headphone.png" alt="headphone" />
        </div>
      </div>
    </>
  );
};

export default Banner;
