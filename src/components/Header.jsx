import { Link } from 'react-router-dom';
import Button from './Button';

export default function Header() {
  return (
    <header className="bg-gray-100 border-b py-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link to="/" className="text-2xl font-bold text-gray-800">
          ReactFlix
        </Link>

        <nav className="flex gap-6 text-sm">
          <Link to="/" className="hover:text-black transition">
            <Button text="Home" />
          </Link>
          <Link to="/favorites" className="hover:text-black transition">
            Favorites
          </Link>
        </nav>
      </div>
    </header>
  );
}
