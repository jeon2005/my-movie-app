import MovieCard from "./MovieCard";


export default function MovieList({ movies, favorites, toggleFavorite }) {
  return (
    <div
      className="max-w-6xl mx-auto px-4 py-6
                    grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
                    gap-6"
    >
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          isFavorite={favorites.includes(movie.id)}
          toggleFavorite={toggleFavorite}
        />
      ))}
    </div>
  );
}
