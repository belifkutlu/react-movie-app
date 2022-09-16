import React, { useState, useEffect } from "react";

import MovieCard from "../../components/MovieCard";
import { getMovie } from "../../utils/request";
import "./Home.css";

function Home() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("avengers");

  useEffect(() => {
    (async () => {
      const response = await getMovie(query);
      response && setMovies(response);
    })();
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
          {Array.isArray(movies) ? movies?.map((item, _index) => (
            <React.Fragment key={_index}>
              <MovieCard
                img={item.Poster}
                rating="4.5"
                title={item.Title}
                imdbID={item.imdbID}
              />
            </React.Fragment>
          )) : <h5 className="section-error">{movies}</h5>}
        </div>
      </div>
    </div>

  );
}

export default Home;
