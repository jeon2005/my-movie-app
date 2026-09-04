// Упражнение 13 — keyof и ограничения дженериков
//
// keyof T — union из имён полей типа T.  keyof Movie = "id" | "title" | ...
// <K extends keyof T> — «K может быть только ключом T».
// T[K] — тип значения этого поля.
// Вместе это даёт типобезопасный доступ к полю: опечатку поймает TS.

import type { Movie } from "./04-movie-types";


// Задача 1. Тип-union из всех имён полей Movie.
// TODO: опиши тип через keyof Movie
type MovieKey = string;

// Задача 2. getField достаёт поле объекта по имени и сохраняет его тип.
//   getField(movie, "title") -> string,  getField(movie, "vote_average") -> number
// TODO: сделай дженерик <T, K extends keyof T>, параметры (obj: T, key: K), результат T[K]
export function getField(obj, key) {
  return obj[key];
}


// ↓ Проверки — не трогай ↓
const k1: MovieKey = "title";
void k1;

// @ts-expect-error "director" — не поле Movie
const k2: MovieKey = "director";
void k2;

const movie: Movie = {
  id: 27205,
  title: "Inception",
  poster_path: "/x.jpg",
  release_date: "2010-07-15",
  vote_average: 8.4,
  genre_ids: [28],
  overview: "...",
};

const title: string = getField(movie, "title");
const rating: number = getField(movie, "vote_average");
void [title, rating];

// @ts-expect-error у Movie нет поля "director"
getField(movie, "director");

// @ts-expect-error title — строка, её нельзя присвоить number
const wrong: number = getField(movie, "title");
void wrong;
