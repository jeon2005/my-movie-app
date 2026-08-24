// Упражнение 06 — Типизируем пропсы React-компонента
//
// Пропсы описываются как обычный объект.
// () => void — функция без аргументов, которая ничего не возвращает (как onClick).


// Задача. Опиши пропсы кнопки:
//   label — строка
//   onClick — функция:  () => void
//   disabled — boolean, необязательный (?)
// TODO: замени строку ниже на настоящие поля
type ButtonProps = {
  todo?: unknown;
};

export function Button({ label, onClick, disabled }: ButtonProps) {
  return (
    <button onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
}


// ↓ Проверки — не трогай ↓
export function Demo() {
  return (
    <div>
      <Button label="Купить" onClick={() => console.log("click")} />
      <Button label="Далее" onClick={() => {}} disabled={true} />
      {/* @ts-expect-error label должен быть строкой */}
      <Button label={123} onClick={() => {}} />
      {/* @ts-expect-error onClick обязателен */}
      <Button label="Нет onClick" />
    </div>
  );
}
