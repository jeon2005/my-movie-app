
export default function MovieCard({ title, poster, genres, rating, year }) {
  return (
    <div className="bg-white rounded-3xl p-4 flex flex-col gap-3">
      <img
        src={poster}
        alt={title}
        className="w-full rounded-3xl object-cover"
      />

      <h3>{title}</h3>

      
      <p className="text-sm text-gray-500">{genres.join(",")}</p>

      <div className="flex justify-between text-sm">
        <span>{year}</span>
        <span>{rating} IMDB</span>
      </div>
    </div>
  );
}
