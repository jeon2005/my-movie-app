import { movies } from '../movies';
import MovieList from '../components/MovieList';
import Filters from '../components/Filters';
import { useState, useEffect } from 'react';

export default function HomePage({ favorites, toggleFavorite }) {
  const [search, setSearch] = useState('');
  const [year, setYear] = useState('');
  const [genre, setGenre] = useState('');
  const [rating, setRating] = useState('');

  const filteredMovies = movies.filter((movie) => {
    return (
      movie.title.toLowerCase().includes(search.toLowerCase()) &&
      (year ? movie.year === Number(year) : true) &&
      (genre ? movie.genres.includes(genre) : true) &&
      (rating ? movie.rating >= Number(rating) : true)
    );
  });

  useEffect(() => {
    const getMovies = async () => {
      const response = await fetch(
        'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
        {
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_TMDB_KEY}`,
          },
        },
      );
      const moviesFromAPI = await response.json();
      console.log(moviesFromAPI);
    };
    getMovies();
  }, []);

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

      <MovieList
        movies={filteredMovies}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
      />

      {/* <ul>
        {users.map((user) => {
          return <li key={user.id}>{user.username}</li>;
        })}
      </ul> */}
    </>
  );
}
