import { Routes, Route, useFetcher } from "react-router-dom";

import Header from "./components/Header";
// import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import FavoritesPage from "./pages/FavoritesPage";
import MoviePage from "./pages/MoviePage";

// export default function App() {
//   return (
//     <>
//       <Header />

//       <Routes>
//         <Route path="/" element={<HomePage />} />

//         <Route
//           path="/favorites"
//           element={
//             <FavoritesPage
//               favorites={favorites}
//               toggleFavorite={toggleFavorite}
//             />
//           }
//         />

//         <Route path="/movie/:id" element={<MoviePage />} />
//       </Routes>

//       <Footer />
//     </>
//   );
// }
import { useEffect, useState } from "react";

function App() {
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    const saved = localStorage.getItem("favorites");
    if (saved) {
      setFavorites(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (movieId) => {
    if (favorites.includes(movieId)) {
      setFavorites(favorites.filter((id) => id !== movieId));
    } else {
      setFavorites([...favorites, movieId]);
    }
  };

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage favorites={favorites} toggleFavorite={toggleFavorite} />
          }
        />
        <Route
          path="/favorites"
          element={
            <FavoritesPage
              favorites={favorites}
              toggleFavorite={toggleFavorite}
            />
          }
        />
        <Route path="/movie/:id" element={<MoviePage />} />
      </Routes>
    </>
  );
}

export default App;
