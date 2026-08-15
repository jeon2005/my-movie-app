import { useQuery } from "@tanstack/react-query";

async function fetchMovieDetails(id) {
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

export function useMovieDetails(id) {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["movie", id],
    queryFn: () => fetchMovieDetails(id),
  });

  return {data, isLoading, isError, error};
}
// export function useGenres() {
//   const { data = [] } = useQuery({
//     queryKey: ["genres"],
//     queryFn: fetchGenres,
//   });

//   return data;
// }
