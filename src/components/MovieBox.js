import React from "react";
import "./MovieBox.scss";

function MovieBox({ title, poster, type, year, imdbID }) {
  return (
    <div className="box">
      <div>{title}</div>
      <img src={poster} alt="Movie or game" />
      <div>Type: {type}</div>
      <div>Year: {year}</div>
    </div>
  );
}

export default MovieBox;
