
import { useState } from "react";
import MovieList from "../components/MovieList";
import Filters from "../components/Filters";
import { movies } from "../movies";

export default function HomePage() {
  const [search, setSearch] = useState("");
  const [year, setYear] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState("");

  const filteredMovies = movies.filter((movie) => {
    return (
      movie.title?.toLowerCase().includes(search.toLowerCase()) &&
      (year === "" || movie.year === Number(year)) &&
      (genre === "" || movie.genres?.includes(genre)) &&
      (rating === "" || movie.rating >= Number(rating))
    );
  });

  return (
    <div className="pt-10">
      <Filters
        search={search}
        setSearch={setSearch}
        year={year}
        setYear={setYear}
        genre={genre}
        setGenre={setGenre}
        rating={rating}
        setRating={setRating}
      />
      <MovieList movies={filteredMovies} />
    </div>
  );
}
