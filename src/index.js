import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import MoviesList from "./views/MoviesList";

ReactDOM.render(
  <React.StrictMode>
    <MoviesList />
  </React.StrictMode>,
  document.getElementById("root")
);
