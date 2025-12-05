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
      </div>
    </header>
  );
}
