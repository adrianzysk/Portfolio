import { useState } from "react";
import "./App.css";

function MoviesList() {
  const [movies, setMovies] = useState({});
  const [search, setSearch] = useState("");
  const handleChange = (event) => {
    setSearch(event.target.value);
  };
  return (
    <div className="App">
      <header className="App-header">Whatever you want</header>
      <input type="text" placeholder="Search" onChange={handleChange} />
      <div>{search}</div>
    </div>
  );
}

export default MoviesList;
