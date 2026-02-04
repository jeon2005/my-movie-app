export default function MovieCard({ movie, isFavorite, toggleFavorite }) {
  return (
    <div className="relative bg-white rounded-xl shadow max-w-[220px] mx-auto p-2">
      <button
        onClick={() => toggleFavorite(movie)}
        className="absolute top-2 right-2"
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

      <img src={movie.image} alt={movie.title} />
      <p className="p-2">{movie.title}</p>
    </div>
  );
}
