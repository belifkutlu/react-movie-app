import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import "./MovieDetail.css";
import CameraIcon from "../../components/icons/CameraIcon";

function MovieDetail() {
  const { imdbID } = useParams();
  const [movie, setMovie] = useState(null);
  console.log(movie);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?i=${imdbID}&apikey=89bbf049`)
      .then((res) => res.json())
      .then((movie) => setMovie(movie));
  }, [imdbID]);

  if (movie === null) {
    return <p style={{ color: "white" }}>Loading...</p>;
  }

  const genres = movie.Genre.split(",");
  return (
    <div className="movie-container">
      <div className="poster">
        <img src={movie.Poster} alt="" />
      </div>
      <div className="movie-section">
        <h3 className="movie-name">
          <span>Movie Name:</span> {movie.Title}
        </h3>
        <h5 className="overwiev">Overview:</h5>
        <h6 className="dsc">{movie.Plot}</h6>
        <h6 className="movie-date">
          Movie Released Date: <span>{movie.Released}</span>
        </h6>
        <h6 className="genre">
          Genre:
          {genres.map((title) => (
            <button>{title}</button>
          ))}
        </h6>
        <h6 className="crew">Crew</h6>
        <div className="director-group">
          <div className="director">
            <strong>
              <CameraIcon className="camera-icon" />
              Director:
            </strong>
            <span>{movie.Director}</span>
          </div>

          <div className="director">
            <strong>
              <CameraIcon className="camera-icon" />
              Production:
            </strong>
            <span> {movie.Production}</span>
          </div>
          <div className="director">
            <strong>
              <CameraIcon className="camera-icon" />
              Writer:
            </strong>
            <span>{movie.Writer} </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
