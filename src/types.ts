export type Genre = {id: number, name: string}

export type Movie = {
  id: number,
  title: string,
  poster_path: string,
  release_date: string,
  vote_average: number,
  genres: Genre[],
  overview: string,
}