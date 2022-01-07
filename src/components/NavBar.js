import React from "react";
import "./NavBar.scss";
import SearchIcon from "@mui/icons-material/Search";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { Link } from "react-router-dom";
import { ReactComponent as ReactLogo } from "../svg/logo.svg";

function NavBar({ openNav }) {
  return (
    <div>
      <header className="Nav-header">
        <div className="logoBox">
          <ReactLogo />
        </div>
        <nav id="nav">
          <div className="flex-box">
            <Link to="/app/about">
              <button type="button">
                <MenuBookIcon className="icon-position" />
                About
              </button>
            </Link>
            <Link to="/app/movies">
              <button type="button">
                <SearchIcon className="icon-position" />
                Search
              </button>
            </Link>
            <Link to="/app/favourites">
              <button type="button">&#9734; Favourites</button>
            </Link>
            <Link to="/app/contact">
              <button type="button">&#x260F; Contact</button>
            </Link>
            <button id="navBtn" type="button" onClick={openNav}>
              ☰ Open Sidebar
            </button>
          </div>
        </nav>
      </header>
      <div className="Nav-box" />
    </div>
  );
}

export default NavBar;
