// Упражнение 01 — Примитивы: типы у параметров и переменных
//
// Добавь типы там, где стоит // TODO. Больше ничего не меняй.
// Проверка:  npm run ts:check   (нет ошибок = готово)


// Задача 1. Добавь тип параметру rating (это число, например 8.85).
// TODO
export function formatRating(rating) {
  return `${rating.toFixed(1)} / 10`;
}

// Задача 2. name — строка, moviesCount — число.
// TODO
export function greet(name, moviesCount) {
  return `Привет, ${name}! У тебя в избранном ${moviesCount} фильм(ов).`;
}

// Задача 3. Замени any на подходящий примитивный тип.
// TODO
const isReleased: any = true;


// ↓ Проверки — не трогай ↓
formatRating(8.85);
// @ts-expect-error rating должен быть числом, а не строкой
formatRating("8.85");

greet("Аня", 3);
// @ts-expect-error moviesCount должен быть числом
greet("Аня", "три");

const _check: boolean = isReleased;
void _check;
