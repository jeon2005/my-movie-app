import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import FavoritesPage from './pages/FavoritesPage';
import MoviePage from './pages/MoviePage';

export default function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/favorites" element={<FavoritesPage />} />

        <Route path="/movie/:movieId" element={<MoviePage />} />
      </Routes>

      <Footer />
    </>
  );
}
