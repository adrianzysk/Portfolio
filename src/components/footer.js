import React from "react";
import "./Footer.scss";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function Footer() {
  return (
    <div>
      <div className="footerBox" />
      <footer>
        <div>&copy; Adrian Zyśk</div>
        <div>
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
        </div>
      </footer>
    </div>
  );
}

export default Footer;
