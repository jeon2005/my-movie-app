import { Link } from "react-router-dom";
import { routes } from "../const";
export default function Footer() {
  return (
    <footer className="bg-gray-500 text-gray-200 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-3 gap-10">
        <div>
          <h2 className="text-white text-xl font-bold mb-3">ReactFlix</h2>
          <p className="text-sm text-gray-400">
            Сайт с фильмами на React + TMDB API
          </p>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3">Навигация</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-white transition">
                Главная
              </Link>
            </li>
            <li>
              <Link
                to={routes.favorites}
                className="hover:text-white transition"
              >
                Избранные
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-white transition">
                Контакты
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Контакты</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Email: support@reactflix.com</li>
            <li>Тел: +992 900 00 00 00</li>
            <li>Telegram: @reactflix</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 py-6 flex flex-col items-center gap-2">
        <a
          href="https://www.themoviedb.org/"
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center hover:opacity-80 transition"
        >
          <img src="/tmdb-logo.svg" alt="TMDB Logo" className="w-32" />
          <p className="text-xs text-gray-400 mt-2">Powered by TMDB</p>
        </a>
      </div>
    </footer>
  );
}
