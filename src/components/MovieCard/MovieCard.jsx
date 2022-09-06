import "./movie-card.css";
import StarIcon from "../icons/StarIcon";

function MovieCard({ title, img, rating }) {
  return (
    <div className="card" style={{ backgroundImage: `url(${img})` }}>
      <div className="content">
        <h4>{title}</h4>
        <StarIcon className="star-icon" />
        <span className="rating">{rating}</span>
      </div>
    </div>
  );
}

export default MovieCard;
