// Упражнение 14 — Капстоун: типизируем результат хука и компонент
//
// Собираем всё вместе: размеченный union (упр. 12) + Movie (упр. 04) + пропсы.
// Это модель твоего useMovies и компонента, который его показывает.

import type { Movie } from "./04-movie-types";

// Задача 1. Тип результата useMovies — три состояния, как в упр. 12,
//   но с настоящими данными: в success есть и movies, и totalPages.
//   loading  -> { status: "loading" }
//   error    -> { status: "error";   message: string }
//   success  -> { status: "success"; movies: Movie[]; totalPages: number }
// TODO: замени строку ниже на union из трёх вариантов
type MoviesResult =
  | { status: "loading" }
  | { status: "error"; message: string }
  | { status: "success"; movies: Movie[]; totalPages: number };

// Задача 2. Пропсы компонента: одно поле result типа MoviesResult.
// TODO: замени строку ниже на настоящее поле
type MovieListViewProps = { result: MoviesResult };

export function MovieListView({ result }: MovieListViewProps) {
  if (result.status === "loading") {
    return <p>Загрузка…</p>;
  }
  if (result.status === "error") {
    return <p>Ошибка: {result.message}</p>;
  }
  return (
    <ul>
      {result.movies.map((movie) => (
        <li key={movie.id}>
          {movie.title} — стр. из {result.totalPages}
        </li>
      ))}
    </ul>
  );
}

// ↓ Проверки — не трогай ↓
const loading: MoviesResult = { status: "loading" };
const success: MoviesResult = {
  status: "success",
  movies: [],
  totalPages: 10,
};
void [loading, success];

// @ts-expect-error success требует поле totalPages
const bad: MoviesResult = { status: "success", movies: [] };
void bad;

export function Demo() {
  return (
    <div>
      <MovieListView result={loading} />
      <MovieListView result={success} />
      {/* @ts-expect-error result обязателен */}
      <MovieListView />
    </div>
  );
}
