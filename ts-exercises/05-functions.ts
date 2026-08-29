// Упражнение 05 — Типизируем функции из приложения
//
// Используем типы из упражнения 04.
// Promise<...> — тип того, что возвращает async-функция.

import type { Movie, MoviesResponse } from "./04-movie-types";

// Задача 1. search — string | null, page — число. Возвращает строку (URL).
// TODO
export function buildMoviesUrl(search: string | null, page: number): string {
  if (search) {
    return `https://api.themoviedb.org/3/search/movie?query=${search}&page=${page}`;
  }
  return `https://api.themoviedb.org/3/movie/popular?page=${page}`;
}

// Задача 2. Упрощённая fetchMovies. search — string | null, page — число.
// Тип возврата:  Promise<MoviesResponse>
// TODO
export async function fetchMovies(search: string | null, page: number) {
  const url = buildMoviesUrl(search, page);
  const response = await fetch(url);
  const data = await response.json();
  return data as MoviesResponse;
}

// Задача 3. favorites — массив чисел (number[]), id — число.
// TODO
export function toggleFavorite(favorites: number[], id: number) {
  if (favorites.includes(id)) {
    return favorites.filter((favId) => favId !== id);
  }
  return [...favorites, id];
}

// ↓ Проверки — не трогай ↓
buildMoviesUrl(null, 1);
buildMoviesUrl("Inception", 2);

const result: Promise<MoviesResponse> = fetchMovies(null, 1);
void result;

const next: number[] = toggleFavorite([1, 2, 3], 2);
void next;

// @ts-expect-error id фильма — число, а не строка
toggleFavorite([1, 2], "2");

async function demo() {
  const data = await fetchMovies(null, 1);
  const movies: Movie[] = data.results;
  void movies;
}
void demo;
