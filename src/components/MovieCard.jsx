export default function MovieCard({ title, poster, year, rating }) {
  return (
    <div
      className="w-[180px] bg-white rounded-xl overflow-hidden 
                    shadow-md hover:-translate-y-1 transition-transform"
    >
      <img src={poster} className="w-full h-[260px] object-cover" alt={title} />
      <div className="p-3">
        <h2 className="text-[16px] font-bold mb-1">{title}</h2>
        <div className="flex justify-between text-[13px] text-gray-600">
          <span>{year}</span>
          <span>{rating}</span>
        </div>
      </div>
    </div>
  );
}
