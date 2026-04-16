import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import FavoritesPage from "./pages/FavoritesPage";
import MoviePage from "./pages/MoviePage";
import { useEffect, useState } from "react";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";

function App() {
  const [favorites, setFavorites] = useState([]);
  const toggleFavorite = (movieId) => {
    if (favorites.includes(movieId)) {
      setFavorites(favorites.filter((id) => id !== movieId));
    } else {
      setFavorites([...favorites, movieId]);
    }
  };

  useEffect(() => {
    const saved = localStorage.getItem("favorites");
    if (saved) {
      setFavorites(JSON.parse(saved));
    }
    console.log(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
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
          <Route
            path="/movie/:id"
            element={
              <MoviePage
                favorites={favorites}
                toggleFavorite={toggleFavorite}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
export default App;
