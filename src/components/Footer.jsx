export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t mt-20">
      <div className="max-w-6xl mx-auto px-4 py-6 text-center text-gray-600 text-sm">
        <p className="font-medium mb-2">ReactFlix</p>
        <p className="mb-1"> Все права защищены.</p>

        <div className="flex justify-center gap-6 mt-3 text-gray-500">
          <a className="hover:text-black transition">Главная</a>
          <a className="hover:text-black transition">Избранное</a>
          <a className="hover:text-black transition">Контакты</a>
        </div>
      </div>
    </footer>
  );
}
