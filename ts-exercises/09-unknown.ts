// Упражнение 09 — unknown против any
//
// any  — «выключаю проверки». TS молчит, а в рантайме код может упасть.
// unknown — «тип пока неизвестен». Пользоваться значением нельзя,
//           пока сам не проверишь его тип (typeof). Это безопасно.
//
// Именно unknown стоит за response.json() — данные приходят непроверенными.

// Задача 1. safeLength: вернуть длину строки, а если это не строка — 0.
// Тип параметра — unknown (НЕ any). Внутри сначала проверь typeof.
// TODO: укажи тип value как unknown и добавь проверку перед value.length
export function safeLength(value: unknown): number {
  if (typeof value === "string") {
    return value.length;
  }
  return 0;
}

// Задача 2. parseCount: если пришло число — вернуть его, иначе 0.
// TODO: сузь unknown через typeof, прежде чем вернуть value
export function parseCount(value: unknown): number {
  if (typeof value === "number") {
    return value;
  }
  return 0;
}

// Задача 3. firstWord: первое слово строки, иначе пустая строка "".
// TODO: проверь, что это строка, потом value.split(" ")[0]
export function firstWord(value: unknown): string {
  if (typeof value === "string") {
    return value.split(" ")[0];
  }
  return "";
}

// ↓ Проверки — не трогай ↓
const len1: number = safeLength("Inception");
const len2: number = safeLength(42);
void [len1, len2];

const c1: number = parseCount(5);
const c2: number = parseCount("nope");
void [c1, c2];

const w1: string = firstWord("hello world");
const w2: string = firstWord(null);
void [w1, w2];

// Вот в чём разница: unknown нельзя использовать без проверки типа.
const value: unknown = 12;
// @ts-expect-error значение типа unknown нельзя умножать, пока не сузишь тип
const doubled: number = value * 2;
void doubled;
