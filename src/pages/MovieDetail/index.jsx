import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMovieDetails } from "../../utils/request";
import CameraIcon from "../../components/icons/CameraIcon";
import "./MovieDetail.css";

function MovieDetail() {
  const { imdbID } = useParams();
  const [movie, setMovie] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await getMovieDetails(imdbID);
      response && setMovie(response);
      setIsLoading(false);
    })();
  }, [imdbID]);


  const genres = movie?.Genre.split(",");

  return (
    <>
      {isLoading ? <div>Loading... </div> :
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
              {Array.isArray(genres) && genres.map((title) => (
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
        </div>}
    </>
  );

}

export default MovieDetail;
