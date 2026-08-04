import Button from "../components/Button";
import { useParams } from "react-router-dom";
import { useMovieDetails } from "../hooks/useMovieDetails";
export default function MoviePage({ favorites, toggleFavorite }) {
  const { id } = useParams();
  const movieDetails = useMovieDetails(id);

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
