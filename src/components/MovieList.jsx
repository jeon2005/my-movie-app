import MovieCard from "./MovieCard";
// import { movies } from "../movies";

export default function MovieList({ movies }) {
  return (
    <div className="max-w-3xl mx-auto px-4">
      <div className="flex flex-wrap justify-center gap-5">
        {movies.map((movie, index) => (
          <div key={index} className="w-[200px]">
            <MovieCard
              title={movie.title}
              poster={movie.image}
              rating={movie.rating}
              year={movie.year}
              genres={movie.genres}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
