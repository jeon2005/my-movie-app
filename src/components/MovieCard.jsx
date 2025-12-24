export default function MovieCard({ movie }) {
  return (
    <div className="relative bg-white rounded-xl shadow hover:shadow-lg transition max-w-[220px] w-full mx-auto">
      {/* <button className="absolute top-3 right-3 z-10 text-2xl">
      {"❤️"}
      </button> */}

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
