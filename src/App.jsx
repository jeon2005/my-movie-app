import { Routes, Route, useSearchParams } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import FavoritesPage from "./pages/FavoritesPage";
import MoviePage from "./pages/MoviePage";
import { useEffect, useState } from "react";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";
import { useMovies } from "./hooks/useMovies";
function App() {
  const [favorites, setFavorites] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search");
  const page = Number(searchParams.get("page")) || 1;
  const { movies, isError, totalPages, isLoading, error } = useMovies(
    search,
    page,
  );
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
              <HomePage
                movies={movies}
                favorites={favorites}
                toggleFavorite={toggleFavorite}
                search={search}
                page={page}
                setSearchParams={setSearchParams}
                isLoading={isLoading}
                isError={isError}
                error={error}
                totalPages={totalPages}
              />
            }
          />
          <Route
            path="/favorites"
            element={
              <FavoritesPage
                movies={movies}
                favorites={favorites}
                toggleFavorite={toggleFavorite}
              />
            }
          />
          <Route
            path="/movie/:id"
            element={
              <MoviePage
                movies={movies}
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
