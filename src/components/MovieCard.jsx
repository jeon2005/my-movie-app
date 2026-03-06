import { Link } from "react-router-dom";
import Button from "./Button";
export default function MovieCard({ movie, isFavorite, toggleFavorite }) {
  return (
    <div className="relative bg-white rounded-xl border-gray-300 border overflow-hidden">
      <div className="absolute top-2 right-2 z-10">
        <Button
          text={isFavorite ? "❤️" : "🤍"}
          onButtonClick={(e) => toggleFavorite(movie.id)}
        />
      </div>

      <Link to={`/movie/${movie.id}`}>
        <img
          src={movie.image}
          alt={movie.title}
          className="w-full h-auto max-h-96 object-contain"
        />
        <p className="px-1 pt-1 text-center font-medium text-sm">
          {movie.title}
        </p>
        <div className="px-1 pb-1 flex gap-1 justify-center text-xs text-gray-600">
          <span>{movie.year} г.</span>
          <span>{movie.rating} IMDB</span>
        </div>
      </Link>
    </div>
  );
}
