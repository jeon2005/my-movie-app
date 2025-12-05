// import MovieCard from "./MovieCard";
// import { movies } from "../movies";

// export default function MovieCard() {
//   return (
//     <div className="max-w-6xl mx-auto px-4">
//       <div className="flex flex-wrap justify-center gap-6">
//         {movies.map((movie, index) => (
//           <div key={index} className="w-[400px]">
//             <MovieCard
//               title={movie.title}
//               poster={movie.image}
//               rating={movie.rating}
//               year={movie.year}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

export default function MovieCard({ title, poster, rating, year }) {
  return (
    <div className="bg-white rounded-3xl p-4 flex flex-col gap-3">
      <img
        src={poster}
        alt={title}
        className="w-full rounded-3xl object-cover"
      />

      <h3 className="text-2xl font-medium text-center">{title}</h3>

      <div className="flex justify-between text-sm text-gray-700">
        <span>— {year}г</span>
        <span>{rating} IMDB</span>
      </div>
    </div>
  );
}
