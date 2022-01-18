import React, { useEffect, useState } from "react";
import "./MoviesList.scss";
import { CSSTransition } from "react-transition-group";
import MovieBox from "../components/MovieBox";

function MoviesList() {
  const [movies, setMovies] = useState({});
  const [search, setSearch] = useState("");
  const [inProp, setInProp] = useState(false);
  useEffect(() => {
    setInProp(true);
  });
  const handleChange = (event) => {
    setSearch(event.target.value);
  };
  useEffect(async () => {
    try {
      await fetch(`http://www.omdbapi.com/?apikey=e9e297b&s=${search}`).then(
        (response) => response.json().then((data) => setMovies(data))
      );
    } catch (error) {
      console.log(error);
    }
  }, [search]);
  return (
    <CSSTransition in={inProp} timeout={800} classNames="landing">
      <div>
        <div className="App">
          <div className="SearchDescription">
            <div>
              <p>
                <b>SEARCH FILM OR GAME AND ADD TO FAVOURITES</b>
              </p>
            </div>
          </div>
          <input
            type="text"
            placeholder="ENTER TITLE"
            onChange={handleChange}
            spellCheck="false"
          />
          {!!movies.Search?.length &&
            movies.Search.map((movie) => (
              <div key={movie.imdbID}>
                <MovieBox
                  title={movie.Title}
                  poster={movie.Poster}
                  type={movie.Type}
                  year={movie.Year}
                  imdbID={movie.imdbID}
                />
              </div>
            ))}
        </div>
      </div>
    </CSSTransition>
  );
}

export default MoviesList;
