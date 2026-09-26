// Упражнение 10 — Утилитные типы: Pick, Omit, Partial
//
// Часто нужен «почти такой же» тип, как уже есть. Не переписывай поля руками —
// собери новый тип из существующего:
//   Pick<T, "a" | "b">  — взять только поля a и b
//   Omit<T, "a">        — взять все поля, кроме a
//   Partial<T>          — все поля стали необязательными (?)

import type { Movie } from "./04-movie-types";

// Задача 1. Превью для списка: только id, title и poster_path из Movie.
// TODO: собери тип через Pick<Movie, ...>
type MoviePreview = Pick<Movie, "id" | "title" | "poster_path">;

// Задача 2. Черновик нового фильма: всё как в Movie, но id ещё нет.
// TODO: собери тип через Omit<Movie, ...>
type MovieDraft = Omit<Movie, "id">;

// Задача 3. Патч для обновления: любое подмножество полей Movie.
// TODO: собери тип через Partial<Movie>
type MoviePatch = Partial<Movie>;

// ↓ Проверки — не трогай ↓
const preview: MoviePreview = {
  id: 1,
  title: "Inception",
  poster_path: "/x.jpg",
};
void preview;

// @ts-expect-error в превью нет поля overview
const badPreview: MoviePreview = { id: 1, title: "Inception", poster_path: "/x.jpg", overview: "..." };
void badPreview;

const draft: MovieDraft = {
  title: "New",
  poster_path: "/n.jpg",
  release_date: "2026-01-01",
  vote_average: 0,
  genre_ids: [],
  overview: "",
};
void draft;

// @ts-expect-error в черновике не должно быть id
const badDraft: MovieDraft = { id: 1, title: "New", poster_path: "/n.jpg" };
void badDraft;

const patch: MoviePatch = { vote_average: 9 };
const emptyPatch: MoviePatch = {};
void [patch, emptyPatch];

// @ts-expect-error поле должно быть одним из полей Movie
const badPatch: MoviePatch = { director: "Nolan" };
void badPatch;
