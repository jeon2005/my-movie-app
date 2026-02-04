import MovieList from "../components/MovieList";

export default function FavoritesPage({ favorites, toggleFavorite }) {
  if (favorites.length === 0) {
    return <p className="text-center mt-10">Нет избранных фильмов</p>;
  }

  return (
    <div className="max-w-6xl mx-auto mt-6">
      <h1 className="text-xl font-bold mb-4">Избранные фильмы</h1>

      <MovieList
        movies={favorites}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
      />
    </div>
  );
}
