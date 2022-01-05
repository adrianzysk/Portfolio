import React from "react";
import { useDispatch } from "react-redux";
import { remove } from "../redux/reducer";
import "./MovieBox.scss";

function FavouriteBox({ title, poster, type, year, imdbID }) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(remove(imdbID));
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
        <h2>REMOVE FROM FAVOURITES</h2>
      </button>
    </div>
  );
}

export default FavouriteBox;
