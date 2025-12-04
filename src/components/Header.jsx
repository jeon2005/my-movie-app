// export default function Header() {
//   return (
//     <header className="bg-blue-600 text-white p-4 shadow-md">
//       <h1 className="text-2xl font-bold">my app</h1>
//     </header>
//   );
// }

import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="">
      <div className="">
        <Link to="/" className="l">
          ReactFlix
        </Link>

        <nav className="">
          <Link to="/">Home</Link>
          <Link to="/favorites">Favorites</Link>
        </nav>
      </div>
    </header>
  );
}
