import React from "react";
import "./Searchbar.css";
import { BiSearch } from "react-icons/bi";

const Searchbar = () => {
  return (
    <div className="searchbar">
      <input
        type="text"
        id="search"
        name="search"
        className="searchbar_input"
        placeholder="Search a song of your choice"
      />
      <button>
        <BiSearch />
      </button>
    </div>
  );
};

export default Searchbar;
