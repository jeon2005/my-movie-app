import { useState } from "react";

export default function Button({ text }) {
  const [favotrites, setFavorites] = useState([]);
  function toggleFavorite(movie) {
    if (favotrites.includes(movie)) {
      setFavorites(favotrites.filter((m) => m.id !== movie.id));
    } else {
      setFavorites([...favotrites, movie]);
    }
  }
  return <button onClick={() => toggleFavorite(movie)}>{text}</button>;
}
