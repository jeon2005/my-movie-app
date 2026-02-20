import Button from "../components/Button";
import { useParams } from "react-router-dom";
import { movies } from "../movies";

export default function MoviePage() {
  const { id } = useParams();
  const movie = movies.find((item) => item.id === Number(id));

  if (!movie) {
    return <h1>Фильм не найден</h1>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 mt-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
          <img
            src={movie.image}
            alt={movie.title}
            className="w-full h-[500px] object-contain rounded-2xl"
          />
        </div>

        <div className="md:w-2/3 flex flex-col gap-3 relative">
          <h1 className="text-3xl font-bold">{movie.title}</h1>

          <div className="">
            <Button text={"В избранные"} />
          </div>

          <p>Год: {movie.year}</p>
          <p>Рейтинг: {movie.rating} IMDB</p>
          <p>Режиссер: {movie.director}</p>
          <p>Жанры: {movie.genres}</p>
          <p>Актеры: {movie.actors}</p>

          <p>Описание: {movie.description}</p>
        </div>
      </div>
    </div>
  );
}
