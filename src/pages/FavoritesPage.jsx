import Button from "../components/Button";
import { Link } from "react-router-dom";
export default function FavoritesPage() {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <h1 className="font-bold text-center">
          У вас пока нет избранных фильмов!
        </h1>
      </div>

      <Link to="/">
        <Button text={"go home"} />
      </Link>
    </>
  );
}
