import MovieList from "../components/MovieList";
import Filters from "../components/Filters";
import { useState } from "react";
import { useEffect } from "react";
export default function HomePage({
  movies,
  favorites,
  toggleFavorite,
  selectedYear,
  setSelectedYear,
  search,
  setSearch,
  page,
  setPage,
}) {
  const [rating, setRating] = useState("");
  const [genre, setGenre] = useState("");
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    async function fetchGenres() {
      const response = await fetch(
        "https://api.themoviedb.org/3/genre/movie/list?language=en-US",
        {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
          },
        },
      );

      const data = await response.json();

      setGenres(data.genres);
    }

    fetchGenres();
  }, []);
  const filteredMovies = movies.filter((movie) => {
    const matchesSearch = movie.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesRating = rating ? movie.vote_average >= Number(rating) : true;
    const matchesGenre = genre ? movie.genre_ids.includes(Number(genre)) : true;
    const matchesYear = selectedYear
      ? movie.release_date.startsWith(selectedYear)
      : true;
    return matchesSearch && matchesRating && matchesGenre && matchesYear;
  });

  return (
    <>
      <Filters
        movies={movies}
        genres={genres}
        genre={genre}
        setGenre={setGenre}
        search={search}
        setSearch={setSearch}
        year={selectedYear}
        setYear={setSelectedYear}
        rating={rating}
        setRating={setRating}
      />

      <MovieList
        movies={filteredMovies}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
      />

      <div className="flex justify-center gap-4 my-6">
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className="px-4 py-2 border rounded"
        >
          Previous
        </button>

        <span>Page {page}</span>

        <button
          onClick={() => setPage(page + 1)}
          className="px-4 py-2 border rounded"
        >
          Next
        </button>
      </div>
    </>
  );
}
