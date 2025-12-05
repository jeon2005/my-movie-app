// import { Link } from "react-router-dom";

// export default function Header() {
//   return (
//     <header className="">
//       <div className="">
//         <Link to="/" className="l">
//           ReactFlix
//         </Link>

//         <nav className="">
//           <Link to="/">Home</Link>
//           <Link to="/favorites">Favorites</Link>
//         </nav>
//       </div>
//     </header>
//   );
// }
export default function Header() {
  return (
    <header className="bg-gray-100 border-b py-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-gray-800">ReactFlix</h1>
        <form className="flex flex-col md:flex-row items-center gap-3 w-full md:w-auto">
          <input
            type="text"
            placeholder="Search for a movie..."
            className="border rounded px-3 py-2 w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            placeholder="Years"
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            placeholder="Genres"
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            placeholder="Ratings"
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Search
          </button>
        </form>
      </div>
    </header>
  );
}
