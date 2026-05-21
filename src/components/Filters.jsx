export default function Filters({
  search,
  setSearch,
  year,
  setYear,
  genre,
  setGenre,
  rating,
  setRating,
  movies,
  genres,
}) {
  const years = movies.map((movie) => movie.release_date.slice(0, 4));
  return (
    <form className="py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-2 md:px-0 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4 sm:justify-center">
        <input
          type="text"
          placeholder="Search for a movie..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:w-64 border px-3 py-2 rounded-lg text-sm"
        />

        <select
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="w-full sm:w-40 border px-3 py-2 rounded-lg text-sm"
        >
          <option value="">Years</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>

        <select
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          className="w-full sm:w-40 border px-3 py-2 rounded-lg text-sm"
        >
          <option value="">Genres</option>
          <option value="">Genres</option>

          {genres?.map((genre) => (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          ))}
        </select>
        <select
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className="w-full sm:w-40 border px-3 py-2 rounded-lg text-sm"
        >
          <option value="">Ratings</option>
          <option value="9">9+</option>
          <option value="8">8+</option>
          <option value="7">7+</option>
        </select>
      </div>
    </form>
  );
}
