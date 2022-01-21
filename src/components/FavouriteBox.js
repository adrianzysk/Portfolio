import React from "react";
import { Rating } from "react-simple-star-rating";
import { useDispatch } from "react-redux";
import { remove } from "../redux/reducer";
import useDimension from "../hooks/useDimension";
import "./MovieBox.scss";

function FavouriteBox({ title, poster, desc, release, id, vote, count }) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(remove(id));
  };
  const [width] = useDimension();
  let size;
  if (width > 2150) {
    size = 60;
  } else if (width > 1850) {
    size = 40;
  } else if (width > 1400) {
    size = 38;
  } else if (width > 900) {
    size = 30;
  } else if (width > 440) {
    size = 20;
  } else {
    size = 10;
  }
  return (
    <div className="box">
      <div className="flexRow">
        <div className="flexColumn">
          <img
            src={`https://image.tmdb.org/t/p/original/${poster}`}
            alt="Movie or game"
          />
        </div>
        <div className="flexColumn marginAuto">
          <p className="underline names">{title}</p>
          <p className="underline small">{desc}</p>
          <p className="underline small">Release: {release}</p>
          <div className="underline small">
            <Rating
              readonly={1}
              initialValue={vote}
              iconsCount={10}
              size={size}
            />
            <p>Vote count: {count}</p>
          </div>
          <button
            type="button"
            className="movieButton"
            aria-label="Add to Favourites"
            onClick={handleClick}
          >
            <p>REMOVE</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default FavouriteBox;
