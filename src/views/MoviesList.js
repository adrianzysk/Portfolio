import React, { useEffect, useState } from "react";
import "./MoviesList.scss";
import MovieBox from "../components/MovieBox";

function MoviesList() {
  const [movies, setMovies] = useState({});
  const [search, setSearch] = useState("");
  const handleChange = (event) => {
    setSearch(event.target.value);
  };
  useEffect(async () => {
    await fetch(`http://www.omdbapi.com/?apikey=e9e297b&s=${search}`).then(
      (response) => response.json().then((data) => setMovies(data))
    );
  }, [search]);
  return (
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
  );
}

export default MoviesList;
