// Упражнение 02 — Объекты, необязательные поля и union-типы
//
// type — описывает форму объекта.
// поле со знаком ? — необязательное.
// union "a" | "b" — значение может быть только из списка.


// Задача 1. У жанра есть id (число) и name (строка). Опиши эти поля.
// TODO: замени строку ниже на настоящие поля
type Genre = {
  id:number,
  name:string
};

const drama: Genre = { id: 18, name: "Drama" };

// Задача 2. name — строка (обязателен). avatarUrl — строка, но необязателен (?).
// TODO: замени строку ниже на настоящие поля
type User = {
name:string,
avatarUrl:string,
};

const userA: User = { name: "Аня" };
const userB: User = { name: "Борис", avatarUrl: "https://..." };

// Задача 3. Статус может быть только одним из трёх слов.
// TODO: замени string на union  "idle" | "loading" | "error"
type LoadStatus = "idle" | "loading" | "error";

const loadStatus: LoadStatus = "loading";


// ↓ Проверки — не трогай ↓
void drama;
void userA;
void userB;
void loadStatus;

// @ts-expect-error у жанра нет поля title
const wrongGenre: Genre = { id: 1, title: "Drama" };
void wrongGenre;

// @ts-expect-error name обязателен
const wrongUser: User = { avatarUrl: "x" };
void wrongUser;

// @ts-expect-error "done" не входит в список допустимых статусов
const wrongStatus: LoadStatus = "done";
void wrongStatus;
