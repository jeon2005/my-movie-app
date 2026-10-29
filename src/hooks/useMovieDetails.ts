import { useQuery } from "@tanstack/react-query";
import { Movie } from "../types";

async function fetchMovieDetails(id: number): Promise<Movie> {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US&page=1`,
    {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
      },
    },
  );

  const data = await response.json();

  return data;
}

export function useMovieDetails(id: number) {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["movie", id],
    queryFn: () => fetchMovieDetails(id),
  });

  return { data, isLoading, isError, error };
}

export function getUserAddress({address}: {address: string}) {
  return address
}