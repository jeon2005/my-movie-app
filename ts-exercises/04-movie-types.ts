// Упражнение 04 — Типы для данных приложения (TMDB)
//
// Это те же данные, с которыми ты работаешь в useMovies.js и MovieCard.jsx.
// Один фильм из ответа TMDB выглядит так:
//   {
//     id: 27205,
//     title: "Inception",
//     poster_path: "/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg",
//     release_date: "2010-07-15",
//     vote_average: 8.369,
//     genre_ids: [28, 878, 12],
//     overview: "A thief who steals corporate secrets..."
//   }

// Задача 1. Опиши поля фильма (типы: number, string, number[]).
// TODO: замени строку ниже на настоящие поля
export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  genre_ids: number[];
  overview: string;
}

// Задача 2. Ответ TMDB на список: { page, results, total_pages }.
//   page — число,  results — массив Movie (Movie[]),  total_pages — число
// TODO: замени строку ниже на настоящие поля
export interface MoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
}

// ↓ Проверки — не трогай ↓
const inception: Movie = {
  id: 27205,
  title: "Inception",
  poster_path: "/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg",
  release_date: "2010-07-15",
  vote_average: 8.369,
  genre_ids: [28, 878, 12],
  overview: "A thief who steals corporate secrets...",
};
void inception;

const response: MoviesResponse = {
  page: 1,
  results: [inception],
  total_pages: 500,
};
void response;

// @ts-expect-error genre_ids — массив чисел, а не строк
const bad: Movie = { ...inception, genre_ids: ["28", "878"] };
void bad;

// @ts-expect-error в ответе не хватает total_pages
const badResponse: MoviesResponse = { page: 1, results: [] };
void badResponse;
