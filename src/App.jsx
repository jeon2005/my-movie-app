import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import FavoritesPage from "./pages/FavoritesPage";

export default function App() {
  
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  function toggleFavorite(movie) {
    const isFavorite = favorites.some((m) => m.id === movie.id);

    if (isFavorite) {
      setFavorites(favorites.filter((m) => m.id !== movie.id));
    } else {
      setFavorites([...favorites, movie]);
    }
  }

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
      </Routes>

      <Footer />
    </>
  );
}
