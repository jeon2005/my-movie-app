import MovieCard from "./MovieCard";

export default function MovieList({ movies, favorites, toggleFavorite }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          isFavorite={favorites.some((m) => m.id === movie.id)}
          toggleFavorite={toggleFavorite}
        />
      ))}
    </div>
  );
}
