import Button from "./Button";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="max-w-6xl mx-auto mt-6 text-center">
      <h1 className="text-3xl font-bold mb-4">404</h1>
      <p className="text-gray-500">Ошибка-страница не найдена</p>

      <Link
        to="/"
        // className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition mt-20 inline-block"
      >
        <Button text="Home" />
      </Link>
    </div>
  );
}
