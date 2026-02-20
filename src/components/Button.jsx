export default function Button({ text, onButtonClick }) {
  return (
    <button
      onClick={onButtonClick}
      className="py-2 px-4  text-gray-800 rounded-md
hover:shadow-lg hover:shadow-gray-400/50 transition"
    >
      {text}
    </button>
  );
}
