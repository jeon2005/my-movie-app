// // import MovieCard from "./MovieCard";
// // import { movies } from "../movies";

// // export default function MoviesList() {
// //   return (
// //     <div className="max-w-6xl mx-auto px-4">
// //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
// //         {movies.map((movie, index) => (
// //           <MovieCard
// //             key={index}
// //             title={movie.title}
// //             poster={movie.image}
// //             rating={movie.rating}
// //             year={movie.year}
// //           />
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// import MovieCard from "./MovieCard";
// import { movies } from "../movies";

// export default function MoviesList() {
//   return (
//     <div className="max-w-6xl mx-auto px-4">
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 fle justify-items-center">
//         {movies.map((movie, index) => (
//           <MovieCard
//             key={index}
//             title={movie.title}
//             poster={movie.image}
//             rating={movie.rating}
//             year={movie.year}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

import MovieCard from "./MovieCard";
import { movies } from "../movies";

export default function MovieList() {
  return (
    <div className="max-w-3xl mx-auto px-4">
      <div className="flex flex-wrap justify-center gap-5">
        {movies.map((movie, index) => (
          <div key={index} className="w-[400px]">
            <MovieCard
              title={movie.title}
              poster={movie.image}
              rating={movie.rating}
              year={movie.year}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
