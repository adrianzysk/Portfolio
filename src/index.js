import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./views/App";
import MoviesList from "./views/MoviesList";

ReactDOM.render(
  <React.StrictMode>
    <MoviesList />
  </React.StrictMode>,
  document.getElementById("root")
);
