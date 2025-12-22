import { useEffect, useState } from "react";
import MovieList from "../components/MovieList";

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("favorites");
    setFavorites(data ? JSON.parse(data) : []);
  }, []);

  if (!favorites.length) {
    return (
      <p className="text-center mt-10 text-gray-500">
        Нет избранных фильмов
      </p>
    );
  }

  return (
    <div className="pt-10">
      <MovieList movies={favorites} />
    </div>
  );
}