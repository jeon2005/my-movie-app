export default function MovieCard({ movie, isFavorite, toggleFavorite }) {
  return (
    <div className="relative bg-white rounded-xl w-full flex flex-col">
      {/* СЕРДЕЧКО — ПРИКРЕПЛЕНО К КАРТОЧКЕ */}
      <button
        onClick={() => toggleFavorite(movie)}
        className="absolute top-3 right-3 z-20"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill={isFavorite ? "red" : "white"}
          stroke="red"
          width="24"
        >
          <path d="M12 21s-6.7-4.3-9.3-7.3C-1.1 9.7 2.4 3 7.5 5.5c1.9 1 2.5 2.5 2.5 2.5s.6-1.5 2.5-2.5C17.6 3 21.1 9.7 21.3 13.7 18.7 16.7 12 21 12 21z" />
        </svg>
      </button>

      {/* КАРТИНКУ НЕ ТРОГАЕМ */}
      <div className="p-2">
        <img
          src={movie.image}
          alt={movie.title}
          className="
            w-full
            h-auto
            max-h-96
            object-contain
            rounded-md
          "
        />
      </div>

      {/* НАЗВАНИЕ */}
      <p className="px-2 pt-1 text-center font-medium">{movie.title}</p>

      {/* ГОД И РЕЙТИНГ */}
      <div className="px-2 pb-2 flex gap-2 justify-center text-xs text-gray-600">
        <span>{movie.year} г.</span>
        <span>{movie.rating} IMDB</span>
      </div>
    </div>
  );
}
