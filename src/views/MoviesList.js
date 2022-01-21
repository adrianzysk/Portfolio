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
      await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=d255b2b37994041b1875445e6a30994e&query=${search}`
      ).then((response) => response.json().then((data) => setMovies(data)));
    } catch (error) {
      console.log(error);
    }
  }, [search]);
  const mybutton = document.getElementById("myBtn");
  window.onscroll = function () {
    scrollFunction();
  };
  function scrollFunction() {
    try {
      if (
        document.body.scrollTop > 800 ||
        document.documentElement.scrollTop > 800
      ) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    } catch (error) {
      console.log(error);
    }
  }
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <CSSTransition in={inProp} timeout={800} classNames="landing">
      <div>
        <div className="App">
          <div className="search">
            <div>
              <p>
                <b>SEARCH FILM</b>
              </p>
            </div>
          </div>
          <input
            type="text"
            placeholder="ENTER TITLE"
            onChange={handleChange}
            spellCheck="false"
          />
          {!!movies.results?.length &&
            movies.results.map((movie) => (
              <div key={movie.id}>
                <MovieBox
                  title={movie.title}
                  poster={movie.poster_path}
                  desc={movie.overview}
                  release={movie.release_date}
                  id={movie.id}
                  vote={movie.vote_average}
                  count={movie.vote_count}
                />
              </div>
            ))}
        </div>
        <button
          type="button"
          onClick={topFunction}
          id="myBtn"
          title="Go to top"
        >
          &#8593;
        </button>
      </div>
    </CSSTransition>
  );
}

export default MoviesList;
