import { useState, useEffect } from "react";

import MovieCard from "../../components/MovieCard";
import "./Home.css";

function Home() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (query.trim()) {
      fetch(`https://www.omdbapi.com/?s=${query}&apikey=89bbf049`)
        .then((data) => data.json())
        .then((res) => {
          if (res.Search) {
            setMovies(res.Search);
          } else {
            setMovies([]);
          }
        });
    }
  }, [query]);

  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <h1>Movie App</h1>
          <input
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            type="text"
            placeholder="search movie"
          />
        </div>
        <div className="section">
          {movies.length === 0 && (
            <p className="movie-not-found">Movie Not Found</p>
          )}
          {movies.map((item) => (
            <MovieCard
              img={item.Poster}
              rating="4.5"
              title={item.Title}
              imdbID={item.imdbID}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
