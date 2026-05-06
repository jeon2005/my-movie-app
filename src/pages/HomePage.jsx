import MovieList from '../components/MovieList';
import Filters from '../components/Filters';
import CircularProgress from '@mui/material/CircularProgress';
import { useState } from 'react';

export default function HomePage({
  movies,
  favorites,
  toggleFavorite,
  isLoading,
}) {
  const [search, setSearch] = useState('');
  const [rating, setRating] = useState('');

  console.log('movies', movies);

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

      {isLoading ? (
        <div className="flex justify-center items-center min-h-80">
          <CircularProgress aria-label="Loading…" />
        </div>
      ) : (
        <MovieList
          movies={filteredMovies}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
        />
      )}
    </>
  );
}
