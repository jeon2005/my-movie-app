import MovieList from "../components/MovieList";
import Filters from "../components/Filters";
export default function HomePage() {
  return (
    <div className="pt-10">
      <Filters />
      <MovieList />
    </div>
  );
}
