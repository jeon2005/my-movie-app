import MovieCard from "./MovieCard";
import { movies } from "../movies";

export default function MoviesList() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex flex-wrap justify-center gap-6">
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
