export default function Button({ text, onButtonClick }) {
  return (
    <button
      onClick={onButtonClick}
      className="py-2 px-4 bg-amber-600 rounded-md text-white hover:bg-amber-500 cursor-pointer"
    >
      {text}
    </button>
  );
}
