import React from "react";
import "./MoviesList.scss";
import { useSelector } from "react-redux";
import FavouriteBox from "../components/FavouriteBox";

function Favourites() {
  const films = useSelector((state) => state.film);
  return (
    <div>
      <div className="App">
        <div className="SearchDescription">
          <div>
            <p>
              <b>FAVOURITES</b>
            </p>
          </div>
        </div>
        {!!films.film?.length &&
          films.film.map((movie) => (
            <div key={movie.imdbID}>
              <FavouriteBox
                title={movie.title}
                poster={movie.poster}
                type={movie.type}
                year={movie.year}
                imdbID={movie.imdbID}
              />
            </div>
          ))}
      </div>
    </div>
  );
}

export default Favourites;
