import MovieList from "../components/MovieList";
import Filters from "../components/Filters";
import { useGenres } from "../hooks/useGenres";
import { useState } from "react";
export default function HomePage({
  movies,
  favorites,
  toggleFavorite,
  search,
  setSearchParams,
  page,
  isLoading,
  error,
  isError,
  totalPages,
}) {
  const [rating, setRating] = useState("");
  const [genre, setGenre] = useState("");
  const genres = useGenres();
  const [selectedYear, setSelectedYear] = useState("");

  const filteredMovies = movies.filter((movie) => {
    const matchesRating = rating ? movie.vote_average >= Number(rating) : true;
    const matchesGenre = genre ? movie.genre_ids.includes(Number(genre)) : true;
    const matchesYear = selectedYear ? movie.release_date.startsWith(selectedYear) : true;
    return matchesRating && matchesGenre && matchesYear;
  });

  return (
    <>
      <Filters
        movies={movies}
        genres={genres}
        genre={genre}
        setGenre={setGenre}
        search={search}
        year={selectedYear}
        setYear={setSelectedYear}
        rating={rating}
        setRating={setRating}
        setSearchParams={setSearchParams}
      />

      {isLoading && <h2>Loading...</h2>}
      {isError && <h2>{error.message}</h2>}
      {!isLoading && !isError && (
        <MovieList
          movies={filteredMovies}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
        />
      )}
      <div className="flex justify-center gap-4 my-6">
        <button
          onClick={() =>
            setSearchParams({
              search,
              page: page - 1,
            })
          }
          disabled={page === 1}
          className="px-4 py-2 border rounded"
        >
          Previous
        </button>

        <span>Page {page}</span>

        <button
          onClick={() =>
            setSearchParams({
              search,
              page: page + 1,
            })
          }
          disabled={page === totalPages}
          className="px-4 py-2 border rounded"
        >
          Next
        </button>
      </div>
    </>
  );
}
