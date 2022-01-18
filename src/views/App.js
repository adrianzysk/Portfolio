import React, { useEffect, useState } from "react";
import "./App.scss";
import { Outlet, Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function App() {
  const [inProp, setInProp] = useState(false);
  useEffect(() => {
    setInProp(true);
  });
  const openNav = () => {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginRight = "250px";
    document.getElementById("nav").style.marginRight = "250px";
  };
  const closeNav = () => {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginRight = "0";
    document.getElementById("nav").style.marginRight = "0";
  };
  return (
    <CSSTransition in={inProp} timeout={800} classNames="landing">
      <div>
        <div id="mySidebar" className="sidebar">
          <button type="button" className="closebtn" onClick={closeNav}>
            &times;
          </button>
          <div className="side">
            <Link to="/app/about">
              <button type="button">About</button>
            </Link>
            <Link to="/app/movies">
              <button type="button">Search</button>
            </Link>
            <Link to="/app/favourites">
              <button type="button">Favourites</button>
            </Link>
            <Link to="/app/contact">
              <button type="button">Contact</button>
            </Link>
          </div>
        </div>
        <div id="main">
          <NavBar openNav={openNav} />
          <Outlet />
          <Footer />
        </div>
      </div>
    </CSSTransition>
  );
}

export default App;
