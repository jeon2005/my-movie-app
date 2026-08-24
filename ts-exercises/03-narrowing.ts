// Упражнение 03 — Сужение типов и null
//
// string | null — «строка ИЛИ ничего».
// Проверка if (x === null) сужает тип: после неё остаётся string.
//
// Это тема багов "Page 0" и "?search=null" из твоего приложения.


// Задача 1. searchParams.get("page") возвращает  string | null.
// Функция всегда должна вернуть номер страницы (number), не меньше 1:
//   null -> 1,  "abc" -> 1,  "5" -> 5,  "-3" -> 1
// Укажи тип параметра raw:  string | null
// TODO
export function parsePage(raw) {
  const n = Number(raw);
  if (raw === null || Number.isNaN(n) || n < 1) {
    return 1;
  }
  return n;
}

// Задача 2. search тоже приходит как string | null.
// Верни текст для инпута: если null — пустую строку "".
// TODO
export function normalizeSearch(search) {
  if (search === null) {
    return "";
  }
  return search;
}


// ↓ Проверки — не трогай ↓
const p1: number = parsePage(null);
const p2: number = parsePage("abc");
const p3: number = parsePage("5");
void [p1, p2, p3];

const s1: string = normalizeSearch(null);
const s2: string = normalizeSearch("Inception");
void [s1, s2];

// @ts-expect-error parsePage принимает string | null, а не число
parsePage(5);
