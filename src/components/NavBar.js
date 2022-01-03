import React from "react";
import "./NavBar.scss";
import SearchIcon from "@mui/icons-material/Search";
import MenuBookIcon from "@mui/icons-material/MenuBook";

function NavBar({ openNav }) {
  return (
    <header className="Nav-header">
      <nav id="nav">
        <ul className="flex-box">
          <button type="button">
            <MenuBookIcon className="icon-position" />
            About
          </button>
          <button type="button">
            <SearchIcon className="icon-position" />
            Search
          </button>
          <button type="button">&#9734; Favourites</button>
          <button type="button">&#x260F; Contact</button>
          <button id="navBtn" type="button" onClick={openNav}>
            ☰ Open Sidebar
          </button>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
