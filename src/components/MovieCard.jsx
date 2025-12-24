import { useEffect, useState } from "react";

export default function MovieCard({ movie }) {
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {э
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];-х
    setIsFav(favs.some((m) => m.id === movie.id));
  }, [movie.id]);

  const toggleFavorite = () => {
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];

    const updated = isFav
      ? favs.filter((m) => m.id !== movie.id)
      : [...favs, movie];

    localStorage.setItem("favorites", JSON.stringify(updated));
    setIsFav(!isFav);
  };

  return (
    <div className="relative bg-white rounded-xl shadow hover:shadow-lg transition max-w-[220px] w-full mx-auto">
      <button onClick={toggleFavorite} className="absolute top-3 right-3 z-10 text-2xl">
      {isFav ? "❤️" : "🤍"}
      </button>

      <div className="relative aspect-[2/3] overflow-hidden rounded-t-xl">
        <img
          src={movie.image}
          alt={movie.title}
          className="w-full h-full object-cover" />
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-lg">{movie.title}</h3>

        <div className="flex justify-between text-sm text-gray-500 mt-1">
          <span>{movie.year}</span>
          <span>⭐ {movie.rating} IMDb</span>
        </div>
      </div>
    </div>
  );
}
