import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.scss";

function LandingPage() {
  return (
    <div>
      <Link to="/app/about">NAWIGUJ DO GŁÓWNEJ STRONY</Link>
    </div>
  );
}

export default LandingPage;
