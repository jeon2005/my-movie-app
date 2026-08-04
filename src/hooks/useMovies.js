import { useQuery , keepPreviousData} from "@tanstack/react-query";
async function fetchMovies(search, page) {
  let url; 
  if (search) {
    url = `https://api.themoviedb.org/3/search/movie?query=${search}&page=${page}`;
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
  return {
    results: data.results,
    totalPages: data.total_pages,
  };
}

export function useMovies(search, page) {
  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["movies", search, page],
    queryFn: () => fetchMovies(search, page),
    placeholderData: keepPreviousData,
  });
  const movies = data?.results ?? [];
  const totalPages = data?.totalPages;
return { movies, totalPages, isLoading, isError, error };
}
