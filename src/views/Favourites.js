import React, { useState, useEffect } from "react";
import "./MoviesList.scss";
import { useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";
import FavouriteBox from "../components/FavouriteBox";

function Favourites() {
  const [inProp, setInProp] = useState(false);
  useEffect(() => {
    setInProp(true);
  });
  const films = useSelector((state) => state.film);
  return (
    <CSSTransition in={inProp} timeout={800} classNames="landing">
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
    </CSSTransition>
  );
}

export default Favourites;
