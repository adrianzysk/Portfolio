import React, { useState } from "react";
import "./NavBar.scss";
import SearchIcon from "@mui/icons-material/Search";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { Link } from "react-router-dom";
import { ReactComponent as MyLogo } from "../svg/logo.svg";
import useDelay from "../hooks/useDelay";

const mountedStyle = { animation: "inAnimation 270ms ease-in" };
const unmountedStyle = {
  animation: "outAnimation 270ms ease-out",
  animationFillMode: "forwards",
};

function NavBar({ openNav }) {
  const [open, setOpen] = useState(false);
  const showDiv = useDelay(open, 250);
  return (
    <div>
      <div className="fixed hide">
        <header className="Nav-header">
          <Link to="/" className="logoBox">
            <MyLogo />
          </Link>
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
      </div>
      <div className="fixed show">
        <div className="bar">
          <Link to="/" className="logo">
            <MyLogo className="logo" />
          </Link>
          <button
            onClick={() => setOpen(!open)}
            type="button"
            className="button"
          >
            ☰
          </button>
        </div>
        {showDiv && (
          <div
            className="transition"
            style={open ? mountedStyle : unmountedStyle}
          >
            <div className="flexDisplay">
              <Link to="/app/about">
                <button type="button" className="buttons">
                  About
                </button>
              </Link>
              <Link to="/app/movies">
                <button type="button" className="buttons">
                  Search
                </button>
              </Link>
              <Link to="/app/favourites">
                <button type="button" className="buttons">
                  Favourites
                </button>
              </Link>
              <Link to="/app/contact">
                <button type="button" className="buttons">
                  Contact
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
      <div className="Nav-box" />
    </div>
  );
}

export default NavBar;
