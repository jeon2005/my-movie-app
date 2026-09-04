// Упражнение 12 — Размеченные union (discriminated unions)
//
// У запроса три состояния: грузится / ошибка / успех. И в каждом — свои данные.
// Общее поле-«метка» (здесь status) позволяет TS понять, где мы находимся,
// и открыть доступ только к нужным полям.
//
// Это твой useMovies: сейчас там isLoading / isError / data по отдельности.
// С union нельзя обратиться к movies, пока не убедился, что статус "success".

import type { Movie } from "./04-movie-types";


// Задача. Опиши состояние запроса тремя вариантами:
//   { status: "loading" }
//   { status: "error";   message: string }
//   { status: "success"; movies: Movie[] }
// TODO: замени строку ниже на union из трёх вариантов
type RequestState = { todo?: unknown };


// ↓ Проверки — не трогай ↓

// В каждой ветке доступны только «свои» поля — TS сам это проверяет.
function describe(state: RequestState): string {
  switch (state.status) {
    case "loading":
      return "Загрузка…";
    case "error":
      return `Ошибка: ${state.message}`;
    case "success":
      return `Фильмов: ${state.movies.length}`;
    default: {
      // Сюда попадём, только если появится необработанный статус.
      // never = «такого быть не может»: страховка на будущее.
      const _exhaustive: never = state;
      return _exhaustive;
    }
  }
}
void describe;

const loading: RequestState = { status: "loading" };
const success: RequestState = { status: "success", movies: [] };
void [loading, success];

// @ts-expect-error у loading нет поля message
const s1: RequestState = { status: "loading", message: "x" };
void s1;

// @ts-expect-error success требует поле movies
const s2: RequestState = { status: "success" };
void s2;

// @ts-expect-error "done" — не из списка статусов
const s3: RequestState = { status: "done" };
void s3;
