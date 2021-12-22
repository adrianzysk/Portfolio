import React, { useEffect, useState } from "react";
import "./MoviesList.scss";
import MovieBox from "../components/MovieBox";
import NavBar from "../components/NavBar";

function MoviesList() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const handleChange = (event) => {
    setSearch(event.target.value);
  };
  useEffect(async () => {
    await fetch(`http://www.omdbapi.com/?apikey=e9e297b&s=${search}`).then(
      (response) => response.json().then((data) => setMovies(data))
    );
  }, [search]);
  const openNav = () => {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginRight = "250px";
    document.getElementById("nav").style.marginRight = "250px";
  };
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginRight = "0";
    document.getElementById("nav").style.marginRight = "0";
  }
  return (
    <div>
      <div id="mySidebar" className="sidebar">
        <button type="button" className="closebtn" onClick={closeNav}>
          &times;
        </button>
      </div>
      <div id="main" className="App">
        <NavBar openNav={openNav} />
        <input
          type="text"
          placeholder="Enter movie name"
          onChange={handleChange}
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
