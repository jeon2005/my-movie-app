import { useState } from "react";
import { movies } from "../movies";
import MovieList from "../components/MovieList";
import Filters from "../components/Filters";

export default function HomePage() {
  const [search, setSearch] = useState("");
  const [year, setYear] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState("");

  const filteredMovies = movies.filter((movie) => {
    return (
      movie.title.toLowerCase().includes(search.toLowerCase()) &&
      (year ? movie.year === Number(year) : true) &&
      (genre ? movie.genres.includes(genre) : true) &&
      (rating ? movie.rating >= Number(rating) : true)
    );
  });
  
  return (
    <>
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
    </>
  );
}
