import MovieList from "../components/MovieList";
import Filters from "../components/Filters";
import { useState } from "react";

export default function HomePage({ movies, favorites, toggleFavorite }) {
  const [search, setSearch] = useState("");
  const [rating, setRating] = useState("");

  const filteredMovies = movies.filter((movie) => {
    return (
      movie.title.toLowerCase().includes(search.toLowerCase()) &&
      (rating ? movie.vote_average >= Number(rating) : true)
    );
  });

  return (
    <>
      <Filters
        search={search}
        setSearch={setSearch}
        rating={rating}
        setRating={setRating}
      />

      <MovieList
        movies={filteredMovies}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
      />
    </>
  );
}
