import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-gray-100 border-b py-6 px-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-gray-800">
          ReactFlix
        </Link>

        <nav className="flex items-center gap-6 text-sm">
          <Link to="/" className="hover:text-black transition">
            Home
          </Link>

          <Link
            to="/favorites"
            className="flex items-center gap-2 hover:text-black transition"
          >
            Favorites
          </Link>
        </nav>
      </div>
    </header>
  );
}
