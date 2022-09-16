import { Link } from "react-router-dom";
import StarIcon from "../icons/StarIcon";
import "./movie-card.css";

function MovieCard({ title, img, rating, imdbID }) {
  return (
    <Link
      className="card"
      style={{ backgroundImage: `url(${img})` }}
      to={`/movie-detail/${imdbID}`}
    >
      <div className="content">
        <h4>{title}</h4>
        <StarIcon className="star-icon" />
        <span className="rating">{rating}</span>
      </div>
    </Link>
  );
}

export default MovieCard;
