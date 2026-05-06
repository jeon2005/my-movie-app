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
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(false);

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

  useEffect(() => {
    const getMovies = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
          {
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${import.meta.env.VITE_TMDB_KEY}`,
            },
          },
        );

        const data = await response.json();

        if (response.ok) {
          setMovies(data.results);
        }

      } catch(e) {
        console.log(e);
        
        setMovies([]);
      } finally {
        setLoading(false);
      }
    };

    getMovies();
  }, []);

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
                isLoading={isLoading}
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
