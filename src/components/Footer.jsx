export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t mt-20">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8 text-gray-700 text-sm">
        <div>
          <h3 className="font-semibold mb-3">ReactFlix</h3>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Навигация</h3>
          <ul className="space-y-2">
            <li>
              <a className="hover:text-black transition cursor-pointer">
                Главная
              </a>
            </li>
            <li>
              <a className="hover:text-black transition cursor-pointer">
                Избранное
              </a>
            </li>
            <li>
              <a className="hover:text-black transition cursor-pointer">
                Контакты
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Контакты</h3>
          <ul className="space-y-2">
            <li>Email: support@reactflix.com</li>
            <li>Тел: +992 900 00 00 00</li>
            <li>Telegram: @reactflix</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
