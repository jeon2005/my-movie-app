// Упражнение 07 — Собираем всё вместе: карточка фильма
//
// Переиспользуем тип Movie из упражнения 04 в пропсах компонента.
// Похоже на твой настоящий MovieCard.jsx.


import type { Movie } from "./04-movie-types";

// Задача. Опиши пропсы карточки:
//   movie — объект типа Movie
//   isFavorite — boolean
//   onToggleFavorite — функция:  (id: number) => void
// TODO: замени строку ниже на настоящие поля
type MovieCardProps = {
  todo?: unknown;
};

export function MovieCard({ movie, isFavorite, onToggleFavorite }: MovieCardProps) {
  return (
    <div>
      <button
        aria-label={isFavorite ? "Убрать из избранного" : "Добавить в избранное"}
        onClick={() => onToggleFavorite(movie.id)}
      >
        {isFavorite ? "❤️" : "🤍"}
      </button>
      <img src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} alt={movie.title} />
      <p>{movie.title}</p>
      <span>{movie.vote_average} IMDB</span>
    </div>
  );
}


// ↓ Проверки — не трогай ↓
const sample: Movie = {
  id: 27205,
  title: "Inception",
  poster_path: "/x.jpg",
  release_date: "2010-07-15",
  vote_average: 8.4,
  genre_ids: [28],
  overview: "...",
};

export function Demo() {
  return (
    <div>
      <MovieCard movie={sample} isFavorite={false} onToggleFavorite={(id) => console.log(id)} />
      {/* @ts-expect-error isFavorite должен быть boolean, а не строкой */}
      <MovieCard movie={sample} isFavorite="yes" onToggleFavorite={() => {}} />
      {/* @ts-expect-error забыли передать movie */}
      <MovieCard isFavorite={true} onToggleFavorite={() => {}} />
    </div>
  );
}
