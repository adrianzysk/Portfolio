import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./LandingPage.scss";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailIcon from "@mui/icons-material/Mail";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import { CSSTransition } from "react-transition-group";

function LandingPage() {
  const [inProp, setInProp] = useState(false);
  useEffect(() => {
    setInProp(true);
  });
  return (
    <CSSTransition in={inProp} timeout={800} classNames="landing">
      <div className="height">
        <div className="bg-image" />
        <div className="name">ADRIAN ZYŚK</div>
        <div className="icons">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/adrian-zysk"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
          <a
            target="_blank"
            href="https://www.github.com/adrianzysk"
            rel="noreferrer"
          >
            <GitHubIcon />
          </a>
          <Link to="/app/contact">
            <MailIcon />
          </Link>
        </div>
        <div className="bg-box">
          <div className="bg-border">JUST AVERAGE JUNIOR WEB DEVELOPER</div>
          <Link className="link" to="/app/about">
            <ArrowCircleDownIcon sx={{ fontSize: 200 }} />
          </Link>
        </div>
        <div className="iconsBottom">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/adrian-zysk"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
          <a
            target="_blank"
            href="https://www.github.com/adrianzysk"
            rel="noreferrer"
          >
            <GitHubIcon />
          </a>
          <Link to="/app/contact">
            <MailIcon />
          </Link>
        </div>
      </div>
    </CSSTransition>
  );
}

export default LandingPage;
