import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.scss";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailIcon from "@mui/icons-material/Mail";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";

function LandingPage() {
  return (
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
        <div className="bg-border">JUST AVERAGE BEGINNING WEB DEVELOPER</div>
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
  );
}

export default LandingPage;
