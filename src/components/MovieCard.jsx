export default function MovieCard({ movie }) {
  return (
    <div className="relative bg-white rounded-xl w-full flex flex-col">
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

      <p className="px-2 pt-1 text-center font-medium">{movie.title}</p>

      <div className="px-2 pb-2 flex gap-2 justify-center text-xs text-gray-600">
        <span>{movie.year} г.</span>
        <span>{movie.rating} IMDB</span>
      </div>
    </div>
  );
}
