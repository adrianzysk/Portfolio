import React from "react";
import { useDispatch } from "react-redux";
import { add } from "../redux/reducer";
import "./MovieBox.scss";

function MovieBox({ title, poster, type, year, imdbID }) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(add({ title, poster, type, year, imdbID }));
  };
  return (
    <div className="box">
      <h1>{title}</h1>
      <img src={poster} alt="Movie or game" />
      <h3>Type: {type}</h3>
      <h3>Year: {year}</h3>
      <button
        type="button"
        className="favouriteBox"
        aria-label="Add to Favourites"
        onClick={handleClick}
      >
        <h2>ADD TO FAVOURITES</h2>
      </button>
    </div>
  );
}

export default MovieBox;
