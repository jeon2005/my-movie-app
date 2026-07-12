import { useQuery } from "@tanstack/react-query";
async function fetchMovies(search, page) {
  let url;
  if (search) {
    url = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(search)}&page=${page}`;
  } else {
    url = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`;
  }

  const response = await fetch(url, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
    },
  });

  if (!response.ok) {
    throw new Error("Ошибка загрузки фильмов");
  }

  const data = await response.json();
  return data.results;
}

export function useMovies(search, page) {
  const {
    data: movies = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["movies", search],
    queryFn: () => fetchMovies(search, page),
  });
  return { movies, error, isLoading };
}
