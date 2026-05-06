import MovieList from "../components/MovieList";


export default function FavoritesPage({ movies, favorites, toggleFavorite }) {
  const favoriteMovies = movies.filter((movie) => favorites.includes(movie.id));

  return (
    <div className="max-w-6xl mx-auto mt-6">
      <h1 className="text-2xl font-bold mb-4">Избранные фильмы</h1>
      {favoriteMovies.length > 0 ? (
        <MovieList
          movies={favoriteMovies}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
        />
      ) : (
        <p className="text-center text-gray-500">
          Вы ещё не добавили фильмы в избранное.
        </p>
      )}
    </div>
  );
}
