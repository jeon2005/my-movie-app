import MovieList from "../components/MovieList";

export default function FavoritesPage() {

  return (
    <div className="max-w-6xl mx-auto mt-6">
      <h1 className="text-xl font-bold mb-4">Избранные фильмы</h1>
      <MovieList
        movies={[]}
      />
    </div>
  );
}
