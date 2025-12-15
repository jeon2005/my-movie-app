export default function Header() {
  return (
    <header className="bg-gray-100 border-b py-6 px-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">ReactFlix</h1>

        <nav className="flex items-center gap-6 text-gray-700 text-sm">
          <a href="#" className="hover:text-black transition">
            Home
          </a>
          <a href="#" className="hover:text-black transition">
            Favourites
          </a>
        </nav>
      </div>
    </header>
  );
}
