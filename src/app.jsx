import React, { useEffect, useState } from "react";
import "./app.css";
import searchIcon from "./search.svg";
import MovieCard from "./movieCard";

const API_URL = "https://www.omdbapi.com/?apikey=11196ad7";

const App = () => {
  const [searchtTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies("superman");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          type="text"
          value={searchtTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={searchIcon}
          alt=""
          onClick={() => searchMovies(searchtTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((m, i) => {
            return <MovieCard movie1={m} key={i.toString()}></MovieCard>;
          })}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};
// const num = [1, 2, 3, 4, 5, 6];
// num.map((m, i) => console.log(i));
export default App;
