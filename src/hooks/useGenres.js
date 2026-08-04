import { useQuery } from "@tanstack/react-query";

async function fetchGenres() {
  const response = await fetch(
    "https://api.themoviedb.org/3/genre/movie/list?language=en-US",
    {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
      },
    },
  );

  const data = await response.json();

  return data.genres;
}

export function useGenres() {
  const { data = [] } = useQuery({
    queryKey: ["genres"],
    queryFn: fetchGenres,
  });

  return data;
}
