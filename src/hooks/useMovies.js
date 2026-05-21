import { useEffect, useState } from "react";

export function useMovies() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
          {
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
            },
          },
        );

        const data = await response.json();

        setMovies(data.results);
      } catch {
        setError("Ошибка загрузки");
      } finally {
        setLoading(false);
      }
    };

    getMovies();
  }, []);

  return { movies, error, isLoading };
}
