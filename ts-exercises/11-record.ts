// Упражнение 11 — Record и индексные сигнатуры
//
// Иногда ключи объекта заранее не перечислить (id жанров, названия — их много).
// Тогда описывают «любой ключ такого-то типа → значение такого-то типа»:
//   Record<number, string>      — ключ число, значение строка
//   { [id: number]: string }    — то же самое, «индексная сигнатура»
//
// Это ровно твой useGenres: словарь «id жанра → его название».

// Задача 1. Словарь жанров: ключ — id (число), значение — название (строка).
// TODO: опиши тип через Record<number, string>
type GenreMap = Record<number, string>;

// Задача 2. Счётчик: сколько фильмов в каждом жанре.
//   ключ — название жанра (строка), значение — количество (число).
// TODO: опиши тип через Record<string, number>
type GenreCounts = Record<string, number>;

// Задача 3. То же, что GenreMap, но через индексную сигнатуру.
// TODO: опиши тип как  { [id: number]: string }
type GenreDict = { [id: number]: string };

// ↓ Проверки — не трогай ↓
const genres: GenreMap = { 28: "Action", 18: "Drama", 878: "Sci-Fi" };
void genres;

// @ts-expect-error значение должно быть строкой, а не числом
const badGenres: GenreMap = { 28: 123 };
void badGenres;

const counts: GenreCounts = { Action: 10, Drama: 5 };
void counts;

// @ts-expect-error значение должно быть числом
const badCounts: GenreCounts = { Action: "много" };
void badCounts;

const dict: GenreDict = { 12: "Adventure" };
void dict;

// @ts-expect-error значение должно быть строкой
const badDict: GenreDict = { 12: true };
void badDict;
