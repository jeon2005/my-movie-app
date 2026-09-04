// Упражнение 08 — Дженерики (обобщённые типы)
//
// Дженерик <T> — это «тип-параметр». Функция работает с любым типом,
// но НЕ теряет его: что положили — то и вернётся.
// Пиши <T> после имени функции:  function foo<T>(x: T): T { ... }


// Задача 1. identity просто возвращает то, что получил.
// Сделай её обобщённой: приняли number — вернули number, приняли string — string.
// TODO: добавь <T>, типизируй параметр и результат
export function identity(value) {
  return value;
}

// Задача 2. Вернуть первый элемент массива или null, если массив пуст.
// Тип элемента заранее не известен — используй дженерик.
// TODO: сделай <T>, параметр T[], результат  T | null
export function firstOrNull(arr) {
  return arr.length > 0 ? arr[0] : null;
}

// Задача 3. Обобщённый fetch: тип ответа задаётся при вызове —  fetchJson<Movie>(...).
// TODO: сделай <T>, url: string, результат  Promise<T>
export async function fetchJson(url) {
  const response = await fetch(url);
  return response.json();
}


// ↓ Проверки — не трогай ↓
const a: number = identity(5);
const b: string = identity("Inception");
void [a, b];

// @ts-expect-error дженерик сохраняет тип: number нельзя присвоить string
const bad: string = identity(5);
void bad;

const n: number | null = firstOrNull([1, 2, 3]);
void n;

// @ts-expect-error элементы — строки, а не числа
const wrong: number = firstOrNull(["a", "b"]);
void wrong;

type Ping = { ok: boolean };
const p: Promise<Ping> = fetchJson<Ping>("/ping");
void p;

// @ts-expect-error тип берётся из <...>: Ping нельзя присвоить Promise<number>
const q: Promise<number> = fetchJson<Ping>("/ping");
void q;
