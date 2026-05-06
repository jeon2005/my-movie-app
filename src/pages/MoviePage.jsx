import Button from "../components/Button";
import { useParams } from "react-router-dom";

export default function MoviePage({ movies, favorites, toggleFavorite }) {
  const { id } = useParams();
const movie = movies.find((item) => item.id === Number(id));
 
  if (!movie) {
    return <h1>Загрузка...</h1>;
  }
  return (
    <div className="max-w-6xl mx-auto px-4 mt-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
          <img
            src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
            className="w-full h-[500px] object-contain rounded-2xl"
          />
        </div>

        <div className="md:w-2/3 flex flex-col gap-3 relative">
          <h1 className="text-3xl font-bold">{movie.title}</h1>

          <div className="">
            <Button
              text={favorites.includes(movie.id) ? "❤️" : "🤍"}
              onButtonClick={() => toggleFavorite(movie.id)}
            />
          </div>

          <p>Год: {movie.release_date}</p>
          <p>Рейтинг: {movie.vote_average} IMDB</p>
          {/* <p>Режиссер: {movie.director}</p> */}
          {/* <p>Жанры: {movie.genres}</p> */}
          {/* <p>Актеры: {movie.actors}</p> */}

          <p>Описание: {movie.overview}</p>
        </div>
      </div>
    </div>
  );
}
