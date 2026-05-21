import { useState } from "react";
import Button from "../components/Button";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
export default function MoviePage({ favorites, toggleFavorite }) {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const getMovies = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?language=en-US&page=1`,
        {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
          },
        },
      );

      const data = await response.json();
      setMovieDetails(data);
    };
    getMovies();
  }, [id]);

  if (!movieDetails) {
    return <h1>Загрузка...</h1>;
  }
  return (
    <div className="max-w-6xl mx-auto px-4 mt-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
          <img
            src={"https://image.tmdb.org/t/p/w500" + movieDetails.poster_path}
            className="w-full h-[500px] object-contain rounded-2xl"
          />
        </div>

        <div className="md:w-2/3 flex flex-col gap-3 relative">
          <h1 className="text-3xl font-bold">{movieDetails.title}</h1>

          <div className="">
            <Button
              text={favorites.includes(movieDetails.id) ? "❤️" : "🤍"}
              onButtonClick={() => toggleFavorite(movieDetails.id)}
            />
          </div>

          <p>Год: {movieDetails.release_date}</p>
          <p>Рейтинг: {movieDetails.vote_average} IMDB</p>
          <p>Genres {movieDetails.genres?.map((genre) => genre.name)}</p>
          <p>Описание: {movieDetails.overview}</p>
        </div>
      </div>
    </div>
  );
}
