export default function Filters({
  search,
  setSearch,
  year,
  setYear,
  genre,
  setGenre,
  rating,
  setRating,
}) {
  return (
    <form className="py-6">
      <div className="max-w-6xl mx-auto flex flex-col gap-5">
        <div className="flex">
          <input
            type="text"
            placeholder="Search for a movie..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-64 border px-3 py-2 rounded-lg text-sm ml-68"
          />
        </div>

        <div className="flex items-center gap-3 ml-68">
          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="border px-3 py-2 rounded-lg text-sm w-40"
          >
            <option value="">Years</option>
            <option value="2010">2010</option>
            <option value="2019">2019</option>
            <option value="2017">2017</option>
          </select>

          <select
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            className="border px-3 py-2 rounded-lg text-sm w-40"
          >
            <option value="">Genres</option>
            <option value="action">Action</option>
            <option value="drama">Drama</option>
            <option value="animation">Comedy</option>
          </select>

          <select
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="border px-3 py-2 rounded-lg text-sm w-40"
          >
            <option value="">Ratings</option>
            <option value="9">9</option>
            <option value="8">8</option>
            <option value="7">7</option>
          </select>
        </div>
      </div>
    </form>
  );
}
