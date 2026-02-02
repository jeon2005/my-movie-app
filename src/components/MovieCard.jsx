export default function MovieCard({ movie }) {
  return (
    <div className="relative bg-white rounded-xl shadow max-w-[220px] mx-auto">
      <button onClick={() => console.log(movie)}
        className="absolute top-2 right-2 bg-black/40 p-2 rounded-full">
        <svg viewBox="0 0 24 24" fill={"white"} className="w-5 h-5">
          <path d="M12 21s-6.7-4.35-9.33-7.36C.78 11.52 1.5 7.5 5 6.5c2-.6 3.5.5 4 1.5.5-1 2-2.1 4-1.5 3.5 1 4.22 5.02 2.33 7.14C18.7 16.65 12 21 12 21z" />
        </svg>
      </button>

      <img src={movie.image} alt={movie.title}/>
      <p className="p-2">{movie.title}</p>
    </div>
  );
}
